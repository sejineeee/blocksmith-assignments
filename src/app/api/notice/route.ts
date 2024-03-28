import { client } from '@/libs/client';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('value');
  const page = parseInt(searchParams.get('page') ?? '1', 10);

  const PERPAGE = 10;

  try {
    const posts = await client.post.findMany({
      take: PERPAGE,
      orderBy: { createdAt: 'desc' },
      where: {
        OR: [
          {
            title: {
              contains: query ? query : '',
              mode: 'insensitive',
            },
          },
          {
            content: {
              contains: query ? query : '',
              mode: 'insensitive',
            },
          },
        ],
      },
    });

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
