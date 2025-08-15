// app/genforge-studio/layout.jsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://genforgestudio.com"),
  title: "GenForge Studio — Official Website & Brand Page",
  description:
    "GenForge Studio (often searched as genforge studio) is a global web & app development agency. We build fast, conversion-focused websites, SaaS, e-commerce, and automation.",
  alternates: { canonical: "https://genforgestudio.com/genforge-studio" },
  openGraph: {
    title: "GenForge Studio — Official Website",
    description:
      "Global web & app development agency. Next.js, E-commerce, SaaS, SEO, automation. Serving clients worldwide.",
    url: "https://genforgestudio.com/genforge-studio",
    siteName: "GenForge Studio",
    type: "article",
    images: [{ url: "/og/brand.jpg", width: 1200, height: 630, alt: "GenForge Studio — Brand" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GenForge Studio — Official Website",
    description:
      "Global web & app development agency. Next.js, E-commerce, SaaS, SEO, automation.",
    images: ["/og/brand.jpg"],
  },
  robots: { index: true, follow: true, maxSnippet: -1, maxImagePreview: "large" },
};

export default function GenforgeStudioLayout({ children }) {
  return (
    <>
      <Header />
      <main className="bg-black min-h-screen">{children}</main>
      <Footer />
    </>
  );
}