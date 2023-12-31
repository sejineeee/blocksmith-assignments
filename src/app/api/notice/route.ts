import { client } from '@/libs/client';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const posts = await client.post.findMany();

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ message: 'GET ERROR', error }, { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { title, content, customDate } = body;

    const newPost = await client.post.create({
      data: {
        title,
        content,
        customDate,
      },
    });

    return NextResponse.json(newPost);
  } catch (error) {
    return NextResponse.json({ message: 'POST ERROR', error }, { status: 500 });
  }
};
