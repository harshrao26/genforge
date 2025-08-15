import logo from '@/assets/logo.png'
import AboutSection from '@/components/AboutSection';
import ClientMarquee from '@/components/ClientMarquee';
import Image from 'next/image';
export const metadata = {
  metadataBase: new URL("https://genforgestudio.com"),
  title: "GenForge Studio — Official Website & Brand Page",
  description:
    "GenForge Studio (often searched as genforge studio) is a global web & app development agency. We build fast, conversion-focused websites, SaaS, e-commerce, and automation.",
  alternates: { canonical: "https://genforgestudio.com/genforge-studio" },
  robots: { index: true, follow: true, maxSnippet: -1, maxImagePreview: "large", maxVideoPreview: -1 },
  openGraph: {
    title: "GenForge Studio — Official Website",
    description:
      "Global web & app development agency. Next.js, E-commerce, SaaS, SEO, automation. Serving clients worldwide.",
    url: "https://genforgestudio.com/genforge-studio",
    siteName: "GenForge Studio",
    type: "article",
    locale: "en",
    images: [
      {
        url: "https://genforgestudio.com/og/brand.jpg", // absolute URL
        width: 1200,
        height: 630,
        alt: "GenForge Studio — Brand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GenForge Studio — Official Website",
    description:
      "Global web & app development agency. Next.js, E-commerce, SaaS, SEO, automation.",
    images: ["https://genforgestudio.com/og/brand.jpg"], // absolute URL
  },
};
export default function BrandPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://genforgestudio.com/" },
        { "@type": "ListItem", position: 2, name: "GenForge Studio", item: "https://genforgestudio.com/genforge-studio" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "GenForge Studio — Official Website & Brand Page",
      url: "https://genforgestudio.com/genforge-studio",
      about: {
        "@type": "Brand",
        "@id": "https://genforgestudio.com/#brand",
        name: "GenForge Studio",
        alternateName: ["genforge studio", "Genforge Studio", "genforgestudio"]
      },
      description:
        "GenForge Studio (genforge studio) is a global web & app development agency specializing in fast, conversion-focused websites, SaaS, e-commerce, and automation."
    },
    {
      "@context": "https://schema.org",
      "@type": "Brand",
      "@id": "https://genforgestudio.com/#brand",
      name: "GenForge Studio",
      alternateName: ["genforge studio", "Genforge Studio", "genforgestudio"],
      url: "https://genforgestudio.com",
      logo: "https://genforgestudio.com/logo.png",
      description:
        "GenForge Studio is a global web & app development agency building fast, conversion-focused websites, SaaS, e-commerce and automation."
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
     <section className="bg-black pt-28 sm:pt-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <p className="text-sm text-white/60 mb-4">
          Home / GenForge Studio
        </p>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-tr from-[#833DFA] via-black to-black p-6 sm:p-10 lg:p-14">
          <div className=" flex gap-8 items-center">
            {/* Text */}
            <div>
              <h1 className="text-3xl sm:text-5xl font-semibold text-white leading-tight">
                GenForge Studio — Official Website
              </h1>
              <p className="mt-4 text-white/80 text-lg">
                <strong>GenForge Studio</strong> (often searched as{" "}
                <strong>genforge studio</strong>) is a global web & app
                development agency. We build fast, conversion-focused
                websites, SaaS platforms, and e-commerce experiences —
                engineered for performance, accessibility, and measurable
                growth.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="/projects"
                  className="px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-gray-100 transition"
                >
                  View Projects
                </a>
                <a
                  href="/contact"
                  className="px-5 py-3 rounded-md border border-white/20 text-white font-medium hover:bg-white/10 transition"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Logo */}

            
          </div>
        </div>
      </div>
    </section>

      {/* What we do */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-white">What We Do</h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Websites & E-commerce",
                desc:
                  "High-performance storefronts and marketing sites with SSR/ISR, image pipelines, and CRO-ready UI.",
              },
              {
                title: "SaaS & Web Apps",
                desc:
                  "Product engineering on Next.js + Node. Auth, dashboards, admin panels, and integrations that scale.",
              },
              {
                title: "Automation & SEO",
                desc:
                  "Workflow automation, webhooks, payouts, and technical SEO baked in — fast, measurable outcomes.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-xl border border-white/10 bg-black p-5">
                <h3 className="text-white font-medium">{c.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:p x-8 pt-8 bg-black">
        <h2 className="text-xl font-semibold text-white">
          Trusted by leading brands &amp; clients
        </h2>
        <p className="text-white/70 text-sm mt-1">
          We’ve partnered with businesses worldwide to deliver high-performance websites, apps, and solutions.
        </p>
      </div>
      <ClientMarquee />
      <AboutSection />

      {/* Proof / metrics */}
       
 

      {/* Brand story */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8">
          <div className="rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-black to-[#0a0a0a]">
            <h2 className="text-xl font-semibold text-white">Brand Story</h2>
            <p className="mt-3 text-white/80">
              GenForge Studio started with a simple idea: ship outcomes, not overhead. We combine sharp engineering with
              pragmatic design to deliver sites and apps that feel fast, convert better, and are easy to maintain.
            </p>
          </div>
         
        </div>
      </section>

      {/* FAQ (brand + discovery) */}
      <section className="px-4 sm:px-6 lg:px-8 pb-14 bg-black">
        <div className="max-w-7xl mx-auto rounded-2xl p-6 border border-white/10 bg-black">
          <h3 className="text-lg font-semibold text-white mb-2">FAQs</h3>

          <details className="group border-t border-white/10 py-3 open:py-4">
            <summary className="cursor-pointer list-none text-white/90">
              Why doesn’t Google always show our site for “genforge studio” (with a space)?
            </summary>
            <p className="mt-2 text-white/70 text-sm">
              “Geneforge” is a well-known game series. This page and our structured data clarify that
              <strong> GenForge Studio</strong> is a distinct brand and the official website.
            </p>
          </details>

          <details className="group border-t border-white/10 py-3 open:py-4">
            <summary className="cursor-pointer list-none text-white/90">
              Is “genforge studio” the same as GenForge Studio?
            </summary>
            <p className="mt-2 text-white/70 text-sm">
              Yes. Many users search in lowercase with a space. This page confirms the brand and helps Google link the query to our site.
            </p>
          </details>

          <details className="group border-t border-white/10 py-3 open:py-4">
            <summary className="cursor-pointer list-none text-white/90">
              What does GenForge Studio build?
            </summary>
            <p className="mt-2 text-white/70 text-sm">
              High-performance websites and apps — E-commerce, SaaS, and custom dashboards — with SEO and performance engineered in.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 bg-black">
        <div className="max-w-7xl mx-auto rounded-2xl p-8 bg-gradient-to-tr from-[#833DFA] via-black to-black border border-white/10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Have a project in mind?</h2>
          <p className="mt-2 text-white/80">
            Let’s design for outcomes — faster pages, higher conversion, lower ops cost.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/contact" className="px-4 py-2 rounded-md bg-white text-black hover:bg-gray-100">Start a project</a>
            <a href="/projects" className="px-4 py-2 rounded-md border border-white/20 text-white hover:bg-white/10">
              Explore projects
            </a>
          </div>
        </div>
      </section>
    </>
  );
}