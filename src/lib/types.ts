// Type definitions for the application

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
};

export type User = {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type NavLink = {
  href: string;
  label: string;
};

export type PageProps<
  P extends Record<string, string | string[]> = Record<string, string | string[]>
> = {
  params: P;
  searchParams: Record<string, string | string[] | undefined>;
};
