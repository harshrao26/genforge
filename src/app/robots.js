// app/robots.js
export default function robots() {
  const base = "https://genforgestudio.com"; // ← update if different
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/api/", "/admin/", "/models/", '/thank-you/'],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}