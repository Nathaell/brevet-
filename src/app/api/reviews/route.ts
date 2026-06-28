import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define Review type
interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

const FALLBACK_FILE = path.join(process.cwd(), 'reviews_fallback.json');
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'brevet2026';

// Helper to check if Vercel KV is configured
const isKvConfigured = () => {
  return !!process.env.KV_REST_API_URL && !!process.env.KV_REST_API_TOKEN;
};

// Lazy import @vercel/kv to avoid crashes in local dev when env vars are missing
async function getKv() {
  const { kv } = await import('@vercel/kv');
  return kv;
}

// Fallback file helpers
function readFallback(): Review[] {
  try {
    if (!fs.existsSync(FALLBACK_FILE)) {
      return [];
    }
    const data = fs.readFileSync(FALLBACK_FILE, 'utf-8');
    return JSON.parse(data) as Review[];
  } catch (error) {
    console.error('Error reading fallback file:', error);
    return [];
  }
}

function writeFallback(reviews: Review[]) {
  try {
    fs.writeFileSync(FALLBACK_FILE, JSON.stringify(reviews, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing fallback file:', error);
  }
}

// POST: Add a new review
export async function POST(request: Request) {
  try {
    const { name, rating, comment } = await request.json();

    if (!name || typeof rating !== 'number' || !comment) {
      return NextResponse.json({ error: 'Champs invalides' }, { status: 400 });
    }

    const newReview: Review = {
      id: Math.random().toString(36).substring(2, 9) + Date.now().toString(),
      name: name.trim(),
      rating: Math.max(1, Math.min(5, rating)),
      comment: comment.trim(),
      createdAt: new Date().toISOString()
    };

    if (isKvConfigured()) {
      const kv = await getKv();
      // Store in a list called 'reviews'
      await kv.lpush('reviews', JSON.stringify(newReview));
    } else {
      // Local fallback
      const reviews = readFallback();
      reviews.unshift(newReview);
      writeFallback(reviews);
    }

    return NextResponse.json({ success: true, review: newReview });
  } catch (error) {
    console.error('API POST error:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// GET: Fetch reviews (requires admin password)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');

    if (!code || code !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    let reviews: Review[] = [];

    if (isKvConfigured()) {
      const kv = await getKv();
      const rawReviews = await kv.lrange<string>('reviews', 0, -1);
      reviews = rawReviews.map(r => (typeof r === 'string' ? JSON.parse(r) : r)) as Review[];
    } else {
      // Local fallback
      reviews = readFallback();
    }

    return NextResponse.json({ success: true, reviews });
  } catch (error) {
    console.error('API GET error:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}

// DELETE: Delete a review (requires admin password)
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const id = searchParams.get('id');

    if (!code || code !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    if (!id) {
      return NextResponse.json({ error: 'ID requis' }, { status: 400 });
    }

    if (isKvConfigured()) {
      const kv = await getKv();
      const rawReviews = await kv.lrange<string>('reviews', 0, -1);
      const parsed = rawReviews.map(r => (typeof r === 'string' ? JSON.parse(r) : r)) as Review[];
      
      // Filter out the review to delete
      const updated = parsed.filter((r: Review) => r.id !== id);
      
      // Clear current list and push back updated list
      await kv.del('reviews');
      for (const item of [...updated].reverse()) {
        await kv.lpush('reviews', JSON.stringify(item));
      }
    } else {
      // Local fallback
      const reviews = readFallback();
      const updated = reviews.filter(r => r.id !== id);
      writeFallback(updated);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API DELETE error:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
