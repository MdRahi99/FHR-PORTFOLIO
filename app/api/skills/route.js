import { NextResponse } from 'next/server';
import dbConnect from '@/utils/db';
import Skills from '@/models/Skills';

export async function GET() {
  await dbConnect();

  try {
    const skills = await Skills.find({});
    return NextResponse.json({ success: true, data: skills });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

export async function POST(request) {
  await dbConnect();
  const body = await request.json();

  try {
    const skills = await Skills.create(body);
    return NextResponse.json({ success: true, data: skills }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
