import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firestore";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ success: false, error: "Invalid email" }, { status: 400 });
    }
    await addDoc(collection(db, "teaser_signups"), {
      email,
      createdAt: serverTimestamp(),
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
} 