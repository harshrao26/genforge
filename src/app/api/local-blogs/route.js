export async function GET() {
  try {
    // Dev: Try cached
    if (process.env.NODE_ENV === "development") {
      const cached = getLocalBlogsCache();
      if (cached) {
        return Response.json({ success: true, blogs: cached });
      }
    }

    // Always fetch in production
    const res = await fetch(`${API_BASE}/api/blogs`);
    if (!res.ok) throw new Error("Failed to fetch blogs");

    const data = await res.json();

    // Save locally only in dev
    if (process.env.NODE_ENV === "development") {
      setLocalBlogsCache(data.blogs);
    }

    return Response.json({ success: true, blogs: data.blogs });
  } catch (err) {
    console.error("❌ /api/local-blogs error:", err);
    return Response.json({ success: false, blogs: [] });
  }
}
