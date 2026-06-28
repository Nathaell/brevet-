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

// Unique free bucket ID for KVdb.io (100% free, no card, no signup)
// Since this runs in Next.js Serverless API, the bucket ID is never exposed to the client
const BUCKET_ID = 'nathan_brevet_reviews_prod_2026_9h2j5d8k';
const KVDB_URL = `https://kvdb.io/${BUCKET_ID}/reviews`;

// Fallback file helpers (local dev)
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

// Fetch all reviews from KVdb (or fallback to local file in dev)
async function getReviewsList(): Promise<Review[]> {
  try {
    const res = await fetch(KVDB_URL, { 
      cache: 'no-store',
      headers: { 'Accept': 'application/json' }
    });
    if (!res.ok) {
      if (res.status === 404) return []; // Bucket/key doesn't exist yet
      throw new Error(`KVdb returned ${res.status}`);
    }
    const text = await res.text();
    if (!text.trim()) return [];
    return JSON.parse(text) as Review[];
  } catch (error) {
    console.warn('Error reading from KVdb, falling back to local storage:', error);
    return readFallback();
  }
}

// Save reviews to KVdb (and fallback local file)
async function saveReviewsList(reviews: Review[]): Promise<boolean> {
  try {
    const res = await fetch(KVDB_URL, {
      method: 'PUT', // KVdb.io uses PUT to set values
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reviews)
    });
    
    // Also save to local file for dev safety
    writeFallback(reviews);
    
    return res.ok;
  } catch (error) {
    console.error('Error writing to KVdb:', error);
    writeFallback(reviews);
    return false;
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

    const reviews = await getReviewsList();
    reviews.unshift(newReview);
    await saveReviewsList(reviews);

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

    const reviews = await getReviewsList();
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

    const reviews = await getReviewsList();
    const updated = reviews.filter(r => r.id !== id);
    await saveReviewsList(updated);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API DELETE error:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
