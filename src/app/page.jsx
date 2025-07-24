import React from "react";
import Head from "next/head";
import Home from "@/pages/Home"; // If Home is a custom component
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <>
      <Head>
        <title>GenForge Studio – Growth-Focused Web Solutions</title>
        <meta
          name="description"
          content="We help local businesses get online fast – with websites, automation, hosting, and growth tools all under one roof."
        />
        <meta
          name="keywords"
          content="web design, small business website, next.js agency, website builder, SEO hosting, GenForge Studio"
        />
        <meta name="author" content="GenForge Studio" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="GenForge Studio – Growth-Focused Web Solutions" />
        <meta
          property="og:description"
          content="We help local businesses get online fast – with websites, automation, hosting, and growth tools all under one roof."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://genforgestudio.com" />
        <meta property="og:image" content="/logo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GenForge Studio – Growth-Focused Web Solutions" />
        <meta
          name="twitter:description"
          content="We help local businesses get online fast – with websites, automation, hosting, and growth tools all under one roof."
        />
        <meta name="twitter:image" content="/logo.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://genforgestudio.com" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GenForge Studio",
              url: "https://genforgestudio.com",
              sameAs: [
                "https://instagram.com/genforgestudio",
                "https://linkedin.com/company/genforgestudio",
              ],
              logo: "https://genforgestudio.com/logo.png",
            }),
          }}
        />
      </Head>

      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
};

export default Page;
