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
  title: "Thank You – GenForge Studio",
  description:
    "Thank you for getting in touch with GenForge Studio! We appreciate your message and will respond as soon as possible.",
  openGraph: {
    title: "Thank You – GenForge Studio",
    description:
      "Thank you for contacting GenForge Studio. We appreciate your message and will get back to you shortly.",
    url: "https://genforgestudio.com/thank-you",
    siteName: "GenForge Studio",
    images: [
      {
        url: "https://genforgestudio.com/assets/og-thankyou.png", // Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: "GenForge Studio Thank You",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Thank You – GenForge Studio",
    description:
      "Your message has been received — one of our team members will get back to you shortly.",
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
