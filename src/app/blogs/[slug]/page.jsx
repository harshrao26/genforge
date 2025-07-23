// app/blog/[slug]/page.jsx

import { notFound } from 'next/navigation';
import BlogsClientUI from '@/components/BlogsClientUI';

// ✅ Fetch blog data from API
async function getBlog(slug) {
  const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
   });

  if (!res.ok) return null;
  return await res.json();
}

// ✅ Generate metadata for SEO
export async function generateMetadata({ params }) {
  const res = await fetch(`http://localhost:3000/api/blogs/${params.slug}`, {
   
  });

  if (!res.ok) return {};

  const blog = await res.json();

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription,
    alternates: {
      canonical: blog.canonicalUrl,
    },
    openGraph: {
      title: blog.metaTitle,
      description: blog.metaDescription,
      url: blog.canonicalUrl,
      images: [{ url: blog.image }],
    },
  };
}

// ✅ Pre-generate all blog slugs at build time
export async function generateStaticParams() {
  const res = await fetch('http://localhost:3000/api/blogs', {
    cache: 'no-store',
  });

  const data = await res.json();

  return Array.isArray(data)
    ? data.map((blog) => ({ slug: blog.urlSlug }))
    : [];
}

// ✅ Main component
export default async function BlogDetails({ params }) {
  const blog = await getBlog(params.slug);

  if (!blog) return notFound();

  return (
    <div>
      <BlogsClientUI key={blog._id} blog={blog} />
    </div>
  );
}
