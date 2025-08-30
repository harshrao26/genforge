import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Privacy Policy – GenForge Studio",
  description:
    "Learn how GenForge Studio collects, uses, and safeguards your personal information when you use our website and services.",
  openGraph: {
    title: "Privacy Policy – GenForge Studio",
    description:
      "Learn how GenForge Studio collects, uses, and safeguards your personal information when you use our website and services.",
    url: "https://genforgestudio.com/privacy-policy",
    siteName: "GenForge Studio",
    images: [
      {
        url: "https://genforgestudio.com/assets/og-privacy.png", // replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "GenForge Studio Privacy Policy",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy – GenForge Studio",
    description:
      "Learn how GenForge Studio collects, uses, and safeguards your personal information when you use our website and services.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <Footer/> 
    </html>
  );
}
