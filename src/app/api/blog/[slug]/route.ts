import { NextResponse } from "next/server";

const globalAny: any = globalThis as any;

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug;
  const post = (globalAny.__BLOG_POSTS || []).find((p: any) => p.slug === slug);
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(post);
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug;
  const list = globalAny.__BLOG_POSTS || [];
  const idx = list.findIndex((p: any) => p.slug === slug);
  if (idx === -1)
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  list.splice(idx, 1);
  return NextResponse.json({ ok: true });
}
