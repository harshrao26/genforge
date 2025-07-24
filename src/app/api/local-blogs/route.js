// src/app/api/local-blogs/route.js
import { getLocalBlogsCache, setLocalBlogsCache } from "@/lib/cache";

const API_BASE = process.env.API_BASE_URL;

export async function GET() {
  try {
    // Try reading from local cache in dev ̰ ̰elopment
    if (process.env.NODE_ENV === "development") {
      const cached = getLocalBlogsCache();
      if (cached) {
        return Response.json({ success: true, blogs: cached });
      }
    }

    // Fallback to API
    const res = await fetch(`${API_BASE}/api/blogs`);
    if (!res.ok) throw new Error("Failed to fetch blogs from API");

    const data = await res.json();
    if (data.success && Array.isArray(data.blogs)) {
      if (process.env.NODE_ENV === "development") {
        setLocalBlogsCache(data.blogs);
      }
      return Response.json({ success: true, blogs: data.blogs });
    }

    return Response.json({ success: false, blogs: [] });
  } catch (err) {
    console.error("❌ /api/local-blogs error:", err);
    return Response.json({ success: false, blogs: [] });
  }
}
