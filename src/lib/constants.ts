// Application constants

export const SITE_NAME = "NextPro";
export const SITE_URL = "https://nextpro.vercel.app";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/blog/create", label: "Create" },
] as const;

export const AUTH_LINKS = [
  { href: "/auth/sign-up", label: "Sign up" },
  { href: "/auth/login", label: "Login" },
] as const;

export const ITEMS_PER_PAGE = 10;
export const MAX_CONTENT_LENGTH = 500;

export const API_ENDPOINTS = {
  BLOG: "/api/blog",
  AUTH: "/api/auth",
} as const;
