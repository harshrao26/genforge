 
import Header from "@/components/Header";
import Footer from "@/components/Footer";
 


export const metadata = {
  metadataBase: new URL("https://genforgestudio.com"),
  title:
    "Contact GenForge Studio — Websites, Apps & Business Automation in India",
  description:
    "Talk to GenForge Studio about fast websites, apps, SEO, automation and hosting. Pan-India delivery from Ahmedabad & Surat. Get a response within 12 hours.",
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
  "conversion rate optimization services"
],
  alternates: { canonical: "/contact" },
  openGraph: {
    title:
      "Contact GenForge Studio — Websites, Apps & Automation (Pan-India)",
    description:
      "Start a project or ask a question. Response within 12 hours. Websites, apps, SEO, automation and hosting for businesses across India.",
    url: "https://genforgestudio.com/contact",
    siteName: "GenForge Studio",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og/contact.jpg", // 1200x630; add this asset
        width: 1200,
        height: 630,
        alt: "GenForge Studio — Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contact GenForge Studio — Websites, Apps & Automation (Pan-India)",
    description:
      "Start a project or ask a question. Response within 12 hours. Websites, apps, SEO, automation and hosting for businesses across India.",
    images: ["/og/contact.jpg"],
  },
  robots: { index: true, follow: true, maxSnippet: -1, maxImagePreview: "large" },
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
      <body className="antialiased">
        {children}
      </body>
      <Footer />  
    </html>
  );
}