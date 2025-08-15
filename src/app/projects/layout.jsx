import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title:
    "GenForge Studio Projects — Case Studies of Fast, High-Converting Builds",
  description:
    "Explore GenForge Studio's curated portfolio: fast, conversion-focused websites for E-commerce, SaaS, branding, and more — built across India with modern tools and craftsmanship.",
  keywords: [
    "case studies",
    "projects",
    "E-commerce builds India",
    "SaaS project case study",
    "website performance",
    "conversion optimization",
    "Cloudinary",
    "Cashfree UPI",
    "GenForge Portfolio",
    "builds for businesses",
    "best website development company",
    "top website development agency",
    "affordable website design company",
    "custom web application development",
    "full-stack development services",
    "e-commerce website design and development",
    "best app development company",
    "mobile app development agency",
    "affordable app developers",
    "hire web developers",
    "hire app developers",
    "small business website design",
    "website design for startups",
    "app development for small business",
    "custom software solutions for small business",
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
  metadataBase: new URL("https://genforgestudio.com"),
  openGraph: {
    title:
      "GenForge Studio Projects — Case Studies of Fast, High-Converting Builds",
    description:
      "See how GenForge crafts fast, scalable websites and apps for E-commerce, SaaS, and branding — optimized for performance and conversion.",
    url: "https://genforgestudio.com/projects",
    siteName: "GenForge Studio",
    images: [
      {
        url: "/og-image-projects.jpg",
        width: 1200,
        height: 630,
        alt: "GenForge Studio – Selected Projects Screenshots",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "GenForge Studio Projects — Case Studies of Fast, High-Converting Builds",
    description:
      "See how GenForge crafts fast, scalable websites and apps for E-commerce, SaaS, and branding — optimized for performance and conversion.",
    images: ["/og-image-projects.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function ProjectsLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://genforgestudio.com/projects" />
      </head>
      <Header />
      <body className="antialiased">{children}</body>
      <Footer />
    </html>
  );
}
