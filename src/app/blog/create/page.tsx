"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/web/navbar";

export default function CreateBlog() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
      if (!res.ok) throw new Error("Failed to create post");
      const data = await res.json();
      router.push(`/blog/${data.slug}`);
    } catch (err) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-2xl font-semibold mb-4">Create Post</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border rounded px-3 py-2 h-40"
              required
            />
          </div>
          {error && <p className="text-destructive">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 rounded bg-primary text-white"
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </form>
      </div>
    </>
  );
}
