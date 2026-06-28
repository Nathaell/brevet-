import { NextResponse } from 'next/server';
import { put, list } from '@vercel/blob';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'brevet2026';
const REVIEWS_BLOB_PATH = 'reviews/data.json';

// Read all reviews from Vercel Blob
async function getReviewsList(): Promise<Review[]> {
  try {
    const { blobs } = await list({ prefix: REVIEWS_BLOB_PATH });
    if (blobs.length === 0) return [];

    // Pour les blobs privés, on fetch avec le token dans le header
    const blobToken = process.env.BLOB_READ_WRITE_TOKEN || '';
    const res = await fetch(blobs[0].url, {
      headers: {
        Authorization: `Bearer ${blobToken}`,
      },
    });
    if (!res.ok) return [];
    return await res.json() as Review[];
  } catch {
    return [];
  }
}

// Save all reviews to Vercel Blob
async function saveReviewsList(reviews: Review[]): Promise<void> {
  await put(REVIEWS_BLOB_PATH, JSON.stringify(reviews), {
    access: 'private',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

// POST: Add a new review
export async function POST(request: Request) {
  try {
    const { name, rating, comment } = await request.json();

    if (!name || typeof rating !== 'number' || !comment) {
      return NextResponse.json({ error: 'Champs invalides' }, { status: 400 });
    }

    const newReview: Review = {
      id: Math.random().toString(36).substring(2, 9) + Date.now().toString(36),
      name: name.trim(),
      rating: Math.max(1, Math.min(5, rating)),
      comment: comment.trim(),
      createdAt: new Date().toISOString(),
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
