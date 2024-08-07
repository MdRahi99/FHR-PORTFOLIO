import { NextResponse } from 'next/server';
import dbConnect from '@/utils/db';
import Experience from '@/models/Experience';

export async function GET() {
  await dbConnect();

  try {
    const about = await Experience.find({});
    return NextResponse.json({ success: true, data: about });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

export async function POST(request) {
  await dbConnect();
  const body = await request.json();

  try {
    const about = await Experience.create(body);
    return NextResponse.json({ success: true, data: about }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
