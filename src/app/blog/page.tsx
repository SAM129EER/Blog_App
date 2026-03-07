"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/web/navbar";
import { buttonVariants } from "@/components/ui/button";

type Post = { title: string; slug: string; excerpt?: string };

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch("/api/blog")
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        setPosts(data || []);
      })
      .catch((e) => setError(String(e)))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Blog</h1>
          <Link href="/blog/create" className={buttonVariants({ variant: "default" })}>
            Create post
          </Link>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p className="text-destructive">{error}</p>}

        {!loading && !posts.length && <p>No posts yet.</p>}

        <ul className="space-y-4">
          {posts.map((p) => (
            <li key={p.slug} className="p-4 border rounded">
              <Link href={`/blog/${p.slug}`} className="block">
                <h2 className="font-medium text-lg">{p.title}</h2>
                {p.excerpt && (
                  <p className="text-sm text-muted-foreground">{p.excerpt}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
