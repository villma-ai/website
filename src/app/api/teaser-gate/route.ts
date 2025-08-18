import { NextResponse } from 'next/server';
import { getFirestoreDb } from '@/lib/firestore';

function hasMessage(error: unknown): error is { message: string; } {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as { message: unknown; }).message === 'string'
  );
}

export async function GET() {
  try {
    const db = getFirestoreDb();
    const docRef = db.doc('settings/public');
    const docSnap = await docRef.get();
    const showTeaser = docSnap.exists ? docSnap.data()?.showTeaser === true : false;

    return NextResponse.json({ showTeaser });
  } catch (error: unknown) {
    let message = 'Error fetching setting';
    if (hasMessage(error)) {
      message = error.message;
    }
    return NextResponse.json({ showTeaser: false, error: message }, { status: 500 });
  }
} 