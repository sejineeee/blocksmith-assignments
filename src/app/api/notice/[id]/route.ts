import { client } from '@/libs/client';
import { NextResponse } from 'next/server';

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;

    const post = await client.post.findUnique({
      where: {
        id,
      },
    });

    if (!post) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ message: 'GET ERROR', error }, { status: 500 });
  }
};

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;

    const body = await request.json();
    const { title, content, customDate } = body;

    const updatePost = await client.post.update({
      where: {
        id,
      },
      data: {
        title,
        content,
        customDate,
      },
    });

    if (!updatePost) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(updatePost);
  } catch (error) {
    return NextResponse.json(
      { message: 'UPDATE ERROR', error },
      { status: 500 }
    );
  }
};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;

    await client.post.delete({
      where: {
        id,
      },
    });

    return NextResponse.json('Post has been deleted');
  } catch (error) {
    return NextResponse.json(
      { message: 'DELETE ERROR', error },
      { status: 500 }
    );
  }
};
