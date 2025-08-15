import "./globals.css";
import Analytics from "@/components/Analytics"; // adjust path

export const metadata = {
  metadataBase: new URL("https://genforgestudio.com"),
  title: "GenForge Studio — Fast Websites & Apps for Global Growth",
  description:
    "We build fast, conversion-driven websites, apps, and automation for startups, SMBs, and enterprises worldwide. Experts in Next.js, e-commerce, SaaS, SEO, and performance.",
  // You can keep your keyword array here if you like, but note Google ignores it.
  keywords: [
    "web design agency",
    "website development company",
    "Next.js web development",
    "full-stack development services",
    "e-commerce website design",
    "SaaS product development",
    "business automation solutions",
    "custom web application development",
    "UI/UX design services",
    "website performance optimization",
    "search engine optimization services",
    "SEO-friendly web design",
    "global web development agency",
    "enterprise website development",
    "cloud-based web applications",
    "cross-platform web development",
    "responsive website design",
    "progressive web apps",
    "e-commerce performance optimization",
    "payment gateway integration",
    "UPI and global payments",
    "Cloudinary media optimization",
    "API integration services",
    "custom CMS development",
    "headless CMS websites",
    "digital transformation services",
    "real-time web applications",
    "website speed optimization",
    "conversion rate optimization",
    "multi-language website development",
    "international website development",
    "secure web hosting services",
    "web application maintenance",
    "website redesign services",
    "B2B website development",
    "B2C website development",
    "mobile-first website design",
    "custom software solutions",
    "global SaaS platform development",
    "best website development company",
    "top website development agency",
    "affordable website design company",
    "best app development company",
    "mobile app development agency",
    "affordable app developers",
    "hire web developers",
    "hire app developers",
    "small business website design",
    "website design for startups",
    "app development for small business",
    "best website development company in India",
    "top web development agency in India",
    "best app development company in India",
    "website development company in Ahmedabad",
    "web development company in Surat",
    "app development company in Ahmedabad",
    "app development company in Surat",
    "website development company in Lucknow",
    "app development company in Lucknow",
    "website development company in Gurugram",
    "app development company in Gurugram",
    "website development company in Noida",
    "app development company in Noida",
    "website development company in Delhi",
    "app development company in Delhi",
    "website development company in Haryana",
    "app development company in Haryana",
    "website development company in Mumbai",
    "app development company in Mumbai",
    "website development company in Bangalore",
    "app development company in Bangalore",
    "website development company in Pune",
    "app development company in Pune",
    "best website development company in USA",
    "app development company in USA",
    "web development agency in UK",
    "app development agency in UK",
    "website development company in Australia",
    "app development company in Australia",
    "website development company in Canada",
    "app development company in Canada",
    "website development company in Dubai",
    "app development company in Dubai",
    "website development company in Singapore",
    "app development company in Singapore",
    "website development company in Germany",
    "app development company in Germany",
    "website development company in France",
    "app development company in France",
    "global website development agency",
    "international app development company",
    "best SaaS development company",
    "custom SaaS product development",
    "e-commerce app development company",
    "e-commerce website design agency",
    "hire Next.js developers",
    "hire React developers",
    "hire Node.js developers",
    "website design for local businesses",
    "website design for restaurants",
    "website design for retail stores",
    "website design for service providers",
    "website redesign services",
    "website performance optimization",
    "SEO-friendly website design",
    "multi-language website development",
    "secure web hosting services",
    "web application maintenance",
    "cross-platform mobile app development",
    "progressive web apps development",
    "business automation solutions",
    "real-time web applications",
    "conversion rate optimization services",
  ],
  authors: [{ name: "GenForge Studio", url: "https://genforgestudio.com" }],
  creator: "GenForge Studio",
  alternates: { canonical: "https://genforgestudio.com" },
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: "large",
  },
  openGraph: {
    title: "GenForge Studio — Global Web & App Development",
    description:
      "Websites, apps, SaaS, and automation built for speed, scalability, and growth — serving clients worldwide.",
    url: "https://genforgestudio.com",
    siteName: "GenForge Studio",
    type: "website",
    locale: "en",
    images: [
      {
        url: "/og/home.png", // ← host a 1200x630 OG image at this path
        width: 1200,
        height: 630,
        alt: "GenForge Studio — Projects & Results",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GenForge Studio — Global Web & App Development",
    description:
      "Websites, apps, SaaS, and automation built for speed, scalability, and growth — serving clients worldwide.",
    images: ["/og/home.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  // Optional: add your Search Console/Bing verification tokens when you have them
  verification: {
    google: "W3rx_ZJ1vFtmER5CPCc-xSuPwCBMiYBKUqZc0HDuJWg",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href="https://genforgestudio.com" />
      </head>

      <body className="antialiased">
        {children}

        {/* Google Analytics 4 */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-V3Q4Z90H7V`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-V3Q4Z90H7V', {
        page_path: window.location.pathname,
      });
    `,
          }}
        />

        {/* ✅ Organization (enhanced) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GenForge Studio",
              alternateName: [
                "genforge studio",
                "Genforge Studio",
                "genforgestudio",
              ], // ← helps with lowercase & variations
              url: "https://genforgestudio.com",
              logo: "https://genforgestudio.com/logo.png",
              sameAs: [
                "https://instagram.com/genforgestudio",
                "https://linkedin.com/company/genforge-studio",
                "https://facebook.com/genforgestudio",
                "https://youtube.com/@genforgestudio",
              ],
              areaServed: "Worldwide",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "sales",
                  email: "hello@genforgestudio.com",
                  availableLanguage: ["en", "hi"],
                },
              ],
            }),
          }}
        />

        {/* ✅ Brand (new) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Brand",
              name: "GenForge Studio",
              alternateName: [
                "genforge studio",
                "Genforge Studio",
                "genforgestudio",
              ],
              url: "https://genforgestudio.com",
              logo: "https://genforgestudio.com/logo.png",
              description:
                "GenForge Studio is a global web & app development agency building fast, conversion-focused websites, SaaS, e-commerce and automation.",
            }),
          }}
        />
        {/* ✅ WebSite + SearchAction Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "GenForge Studio",
              url: "https://genforgestudio.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://genforgestudio.com/search?q={query}",
                "query-input": "required name=query",
              },
            }),
          }}
        />

        <Analytics />
      </body>
    </html>
  );
}
