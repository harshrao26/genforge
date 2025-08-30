// app/sitemap.js
// Robust sitemap: projects from app folders, blogs from content files (with fallback).

const fs = require("fs");
const path = require("path");

const BASE =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://genforgestudio.com").replace(/\/$/, "");

// ---- Static top-level routes you want indexed ----
const STATIC_ROUTES = [
  "/",
  "/projects",
  "/privacy-policy",
  "/terms-and-conditions",
];

// ---- File patterns ----
const PAGE_FILES = ["page.js", "page.jsx", "page.ts", "page.tsx"];
const BLOG_EXTS  = [".md", ".mdx"];

// ---- Helpers ----
function hasPageFile(dirAbs) {
  return PAGE_FILES.some((f) => fs.existsSync(path.join(dirAbs, f)));
}

function listProjectSlugs() {
  // Adjust "src/app" to "app" if you don't use src/
  const root = path.join(process.cwd(), "src", "app", "projects");
  if (!fs.existsSync(root)) return [];
  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => {
      // ignore special/future-proofed folders
      if (name.startsWith("(") || name.startsWith("[") || name.startsWith("@") || name.startsWith("_")) {
        return false;
      }
      const dirAbs = path.join(root, name);
      return hasPageFile(dirAbs);
    });
}

function mtimeOfAny(filesAbs) {
  for (const p of filesAbs) {
    if (fs.existsSync(p)) return fs.statSync(p).mtime;
  }
  return null;
}

function lastModForFolder(segment, slug) {
  const dirAbs = path.join(process.cwd(), "src", "app", segment, slug);
  const candidates = PAGE_FILES.map((f) => path.join(dirAbs, f));
  return mtimeOfAny(candidates) || new Date();
}

// Preferred: Blogs live as MD/MDX in src/content/blogs
function listBlogSlugsFromContent() {
  const dir = path.join(process.cwd(), "src", "content", "blogs");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((d) => {
      if (d.isFile() && BLOG_EXTS.includes(path.extname(d.name))) {
        return [path.basename(d.name, path.extname(d.name))];
      }
      if (d.isDirectory()) {
        // support folder-per-post with index.{md,mdx}
        const idx = ["index.mdx", "index.md"]
          .map((f) => path.join(dir, d.name, f))
          .find((p) => fs.existsSync(p));
        return idx ? [d.name] : [];
      }
      return [];
    });
}

function lastModForBlog(slug) {
  const base = path.join(process.cwd(), "src", "content", "blogs");
  const files = [
    path.join(base, `${slug}.mdx`),
    path.join(base, `${slug}.md`),
    path.join(base, slug, "index.mdx"),
    path.join(base, slug, "index.md"),
  ];
  return mtimeOfAny(files) || new Date();
}

// Fallback if you don’t have a content directory
const FALLBACK_BLOG_SLUGS = [
  "how-we-deliver-a-2page-website-in-24-hours-for-small-business-owners-or-genforge-studio",
  "why-local-businesses-across-india-trust-genforge-studio",
];

// ---- Main export ----
export default async function sitemap() {
  const now = new Date();

  // Static entries
  const statics = STATIC_ROUTES.map((p) => ({
    url: `${BASE}${p}`,
    lastModified: now,
    changeFrequency: p === "/" ? "weekly" : "monthly",
    priority: p === "/" ? 1.0 : 0.6,
  }));

  // Projects from app folders
  const projectSlugs = listProjectSlugs();
  const projects = projectSlugs.map((slug) => ({
    url: `${BASE}/projects/${slug}`,
    lastModified: lastModForFolder("projects", slug) || now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Blogs from content (preferred) or fallback list
  const detectedBlogSlugs = listBlogSlugsFromContent();
  const blogSlugs = detectedBlogSlugs.length ? detectedBlogSlugs : FALLBACK_BLOG_SLUGS;

  const blogs = blogSlugs.map((slug) => ({
    url: `${BASE}/blogs/${slug}`,
    lastModified: detectedBlogSlugs.length ? lastModForBlog(slug) : now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...statics, ...projects, ...blogs];
}