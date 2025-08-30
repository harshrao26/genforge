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
  title: "Terms & Conditions – GenForge Studio",
  description:
    "Read the Terms & Conditions for GenForge Studio. Learn about our services, billing, intellectual property, liability, and more.",
  openGraph: {
    title: "Terms & Conditions – GenForge Studio",
    description:
      "Review the official Terms & Conditions governing use of the GenForge Studio website and services.",
    url: "https://genforgestudio.com/terms-and-conditions",
    siteName: "GenForge Studio",
    images: [
      {
        url: "https://genforgestudio.com/assets/og-terms.png", // Replace with the correct OG image if available
        width: 1200,
        height: 630,
        alt: "GenForge Studio Terms & Conditions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "GenForge Studio – Terms & Conditions",
    description:
      "Terms & Conditions for GenForge Studio’s services and platforms.",
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
