import { NextResponse } from 'next/server';
import { getFirebaseDb } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

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
    const db = getFirebaseDb();
    const docRef = doc(db, 'settings', 'public');
    const docSnap = await getDoc(docRef);
    const showTeaser = docSnap.exists() ? docSnap.data().showTeaser === true : false;

    return NextResponse.json({ showTeaser });
  } catch (error: unknown) {
    let message = 'Error fetching setting';
    if (hasMessage(error)) {
      message = error.message;
    }
    return NextResponse.json({ showTeaser: false, error: message }, { status: 500 });
  }
} 