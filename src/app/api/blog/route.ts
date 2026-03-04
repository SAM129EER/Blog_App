import { NextResponse } from "next/server";

type Post = { title: string; slug: string; content?: string; excerpt?: string };

// Simple in-memory store for dev only
const globalAny: any = globalThis as any;
if (!globalAny.__BLOG_POSTS) {
  globalAny.__BLOG_POSTS = [
    {
      title: "Welcome",
      slug: "welcome",
      excerpt: "Welcome to the blog",
      content: "This is the first post.",
    },
  ] as Post[];
}

export async function GET() {
  return NextResponse.json(globalAny.__BLOG_POSTS);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const title = (body.title || "").toString();
    const content = (body.content || "").toString();
    if (!title) {
      return NextResponse.json({ error: "Title required" }, { status: 400 });
    }
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
      .slice(0, 200);

    const post: Post = { title, slug, content, excerpt: content.slice(0, 120) };
    globalAny.__BLOG_POSTS.unshift(post);
    return NextResponse.json(post, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
