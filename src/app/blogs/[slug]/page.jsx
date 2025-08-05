import { notFound } from "next/navigation";
import BlogsClientUI from "@/components/BlogsClientUI";

// Use environment variable for API
const API_BASE = "https://genforgestudio.com";

// ✅ Fetch individual blog
async function getBlog(slug) {
  try {
    const res = await fetch(`${API_BASE}/api/blogs/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch blog");

    return await res.json();
  } catch (err) {
    console.error("❌ getBlog error:", err.message);
    return null;
  }
}

// ✅ SEO Metadata Generation
export async function generateMetadata({ params }) {
  try {
    const res = await fetch(`${API_BASE}/api/blogs/${params.slug}`, {
      cache: "no-store",
    });

    if (!res.ok) return {};

    const blog = await res.json();

    return {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || "",
      alternates: {
        canonical: blog.canonicalUrl || "",
      },
      openGraph: {
        title: blog.metaTitle || blog.title,
        description: blog.metaDescription || "",
        url: blog.canonicalUrl || "",
        images: blog.image ? [{ url: blog.image }] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.metaTitle || blog.title,
        description: blog.metaDescription || "",
        images: blog.image ? [blog.image] : [],
      },
    };
  } catch (err) {
    console.error("❌ generateMetadata error:", err.message);
    return {};
  }
}

// ✅ Static generation for all slugs (optional)
export async function generateStaticParams() {
  try {
    const res = await fetch(`${API_BASE}/api/blogs`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch blogs list");

    const blogs = await res.json();

    return Array.isArray(blogs)
      ? blogs.map((blog) => ({ slug: blog.urlSlug }))
      : [];
  } catch (err) {
    console.error("❌ generateStaticParams error:", err.message);
    return [];
  }
}

// ✅ Page Component
export default async function BlogDetails({ params }) {
  const blog = await getBlog(params.slug);

  if (!blog) return notFound();

  return (
    <div>
      <BlogsClientUI key={blog._id} blog={blog} />
    </div>
  );
}
