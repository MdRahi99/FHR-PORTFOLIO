import { NextResponse } from 'next/server';
import dbConnect from '@/utils/db';
import ProjectCategory from '@/models/ProjectCategory';

export async function GET() {
  await dbConnect();

  try {
    const category = await ProjectCategory.find({});
    return NextResponse.json({ success: true, data: category });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

export async function POST(request) {
  await dbConnect();
  const body = await request.json();

  try {
    // Check if the category already exists
    const existingCategory = await ProjectCategory.findOne({ name: body.name });
    if (existingCategory) {
      return NextResponse.json({ success: false, message: 'Category already exists' }, { status: 400 });
    }

    const category = await ProjectCategory.create(body);
    return NextResponse.json({ success: true, data: category }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
