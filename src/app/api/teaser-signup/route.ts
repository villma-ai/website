import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firestore';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ success: false, error: 'Invalid email' }, { status: 400 });
    }
    await db.collection('teaser_signups').add({
      email,
      createdAt: new Date()
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
