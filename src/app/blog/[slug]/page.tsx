import { notFound } from "next/navigation";
import { Navbar } from "@/components/web/navbar";

type Post = { title: string; slug: string; content?: string };

async function getPost(slug: string): Promise<Post | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/api/blog/${slug}`,
  );
  if (!res.ok) return null;
  return res.json();
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  if (!post) return notFound();

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto py-8">
        <h1 className="text-2xl font-semibold mb-4">{post.title}</h1>
        <div className="prose">{post.content}</div>
      </div>
    </>
  );
}
