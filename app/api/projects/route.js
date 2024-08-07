import { NextResponse } from 'next/server';
import dbConnect from '@/utils/db';
import Projects from '@/models/Projects';

export async function GET() {
  await dbConnect();

  try {
    const projects = await Projects.find({});
    return NextResponse.json({ success: true, data: projects });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

export async function POST(request) {
  await dbConnect();
  const body = await request.json();

  try {
    const projects = await Projects.create(body);
    return NextResponse.json({ success: true, data: projects }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
