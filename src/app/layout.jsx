import "./globals.css";

export const metadata = {
  title:
    "GenForge Studio – Fast Websites, Global Growth Partner for Businesses",
  description:
    "We help local and global businesses get online fast – with websites, SEO, automation, hosting, and growth tools all under one roof.",
  keywords: [
    "web design",
    "small business website",
    "next.js agency",
    "website builder",
    "SEO hosting",
    "GenForge Studio",
    "local business web solutions",
    "website with lead forms",
    "business growth",
    "digital marketing",
    "website automation",
    "website hosting",
    "website development",
    "website design",
    "website management",
    "website optimization",
    "website maintenance",
    "website analytics",
    "website performance",
    "website security",
    "website support",
    "website updates",
    "website content management",
    "website user experience",
    "website accessibility",
    "website mobile optimization",
    "website e-commerce",
    "website blogging",
    "website portfolio",
    "website landing pages",
    "website contact forms",
    "website social media integration",
    "website analytics integration",
    "website email marketing",
    "website lead generation",
    "website conversion optimization",
    "website customer support",
    "website online presence",
    "website brand identity",
    "business website design",
    "business website development",
    "business website hosting",
    "business website management",
    "business website optimization",
    "business website maintenance",
    "business website analytics",
    "business website performance",
    "business website security",
    "business website support",
    "business website updates",
    "business website content management",
    "business website user experience",
    "business automation",
    "business growth tools",
    "business digital marketing",
    "business online presence",
    "business lead generation",
  ],
  authors: [{ name: "GenForge Studio", url: "https://genforgestudio.com" }],
  creator: "GenForge Studio",
  metadataBase: new URL("https://genforgestudio.com"),
  openGraph: {
    title:
      "GenForge Studio – Fast Websites, Global Growth Partner for Businesses",
    description:
      "We help local businesses get online fast – with websites, automation, hosting, and growth tools all under one roof.",
    url: "https://genforgestudio.com",
    siteName: "GenForge Studio",
    images: [
      {
        url: "/my-app/public/logo.png",
        width: 1200,
        height: 630,
        alt: "GenForge Studio Website Screenshot",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "GenForge Studio – Fast Websites, Global Growth Partner for Businesses",
    description:
      "We help local businesses get online fast – with websites, automation, hosting, and growth tools all under one roof.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href="https://genforgestudio.com" />

        {/* ✅ Google Tag Manager Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K27XWTN6');`,
          }}
        />
      </head>

      <body className="antialiased">
        {/* ✅ Google Tag Manager NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K27XWTN6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}

        {/* ✅ LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "GenForge Studio",
              url: "https://genforgestudio.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              sameAs: [
                "https://instagram.com/genforgestudio",
                "https://linkedin.com/company/genforge-studio",
                "https://facebook.com/genforgestudio",
                "https://youtube.com/@genforgestudio",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
