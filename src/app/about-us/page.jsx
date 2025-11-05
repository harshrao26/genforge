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
        url: "https://genforgestudio.com/og/brand.jpg",
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
    images: ["https://genforgestudio.com/og/brand.jpg"],
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
            <div className="flex gap-8 items-center">
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

      {/* Industries We Serve */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-4">Industries We Serve</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
            {[
              { icon: "🏥", title: "Healthcare" },
              { icon: "🎓", title: "Education" },
              { icon: "🏠", title: "Real Estate" },
              { icon: "💼", title: "SaaS" },
              { icon: "🛒", title: "E-commerce" },
              { icon: "📱", title: "Mobile Apps" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center rounded-xl border border-white/10 bg-gradient-to-tr from-[#120026] via-black to-black p-4 hover:border-purple-500/50 transition-all">
                <span className="text-3xl">{item.icon}</span>
                <span className="mt-2 text-white font-medium text-sm text-center">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 bg-black">
        <h2 className="text-xl font-semibold text-white">
          Trusted by leading brands &amp; clients
        </h2>
        <p className="text-white/70 text-sm mt-1">
          We've partnered with businesses worldwide to deliver high-performance websites, apps, and solutions.
        </p>
      </div>
      <ClientMarquee />

      {/* What Sets Us Apart + Results */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-black to-[#0a0a0a]">
            <h2 className="text-xl font-semibold text-white">What Sets Us Apart</h2>
            <ul className="mt-4 space-y-3 text-white/80 text-base">
              <li>
                <span className="text-purple-400 font-bold">→ </span>
                1-day delivery option for many business applications—no agency bloat.
              </li>
              <li>
                <span className="text-purple-400 font-bold">→ </span>
                All-in-one: design, build, QA, and marketing/automation under one roof.
              </li>
              <li>
                <span className="text-purple-400 font-bold">→ </span>
                Transparent pricing—tiered, simple plans without hidden costs.
              </li>
              <li>
                <span className="text-purple-400 font-bold">→ </span>
                Built by engineers, not just designers—performance and maintainability by default.
              </li>
              <li>
                <span className="text-purple-400 font-bold">→ </span>
                Trusted by 20+ brands in ecommerce, SaaS, real estate, education, and more.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-black to-[#0a0a0a] flex flex-col justify-center">
            <h2 className="text-xl font-semibold text-white">Results Delivered</h2>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <div className="text-3xl font-bold text-white">20+</div>
                <div className="text-base text-white/70">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">20</div>
                <div className="text-base text-white/70">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">1 Day*</div>
                <div className="text-base text-white/70">Fastest Launch</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">6</div>
                <div className="text-base text-white/70">Expert Team</div>
              </div>
            </div>
            <div className="text-xs mt-4 text-white/50">*For ready content and finalized design</div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-6">Our Journey</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-black to-[#120026] hover:border-purple-500/50 transition-all">
              <div className="text-[32px] font-bold text-white mb-2">Mar 2025</div>
              <div className="text-white/80">GenForge Studio founded in Lucknow. Delivered <b>Trygve Studio</b> portfolio site—became known for speed and quality.</div>
            </div>
            <div className="flex-1 rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-black to-[#221136] hover:border-purple-500/50 transition-all">
              <div className="text-[32px] font-bold text-white mb-2">2025-2026</div>
              <div className="text-white/80">Launched 20 projects for SaaS, commerce, hospitals, schools. Team grew to 6, expanded service stack to UPI, marketing automation, and mobile apps.</div>
            </div>
            <div className="flex-1 rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-black to-[#301154] hover:border-purple-500/50 transition-all">
              <div className="text-[32px] font-bold text-white mb-2">2027-2028</div>
              <div className="text-white/80">Expanding with specialized solutions for education, healthcare, real estate—building India's fastest, most reliable digital launches.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-6">Client Success Stories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Trygve Studio */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-black to-[#14002a] p-6 flex flex-col hover:border-purple-500/50 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded bg-purple-600 flex items-center justify-center text-white font-bold">T</div>
                <span className="text-base text-white font-medium">Trygve Studio</span>
              </div>
              <p className="text-white/80 text-sm flex-1">
                "GenForge Studio delivered our architecture portfolio in days. The site loads fast, the admin is easy, and clients always mention the design quality."
              </p>
              <a
                href="https://genforgestudio.com/projects/trygve-studio"
                className="inline-block mt-4 text-purple-400 text-sm hover:underline"
              >
                See case study →
              </a>
            </div>

            {/* E-commerce Client */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-black to-[#14002a] p-6 flex flex-col hover:border-purple-500/50 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl bg-white rounded px-2 h-9 flex items-center">🛍️</span>
                <span className="text-base text-white font-medium">Fashion E-commerce</span>
              </div>
              <p className="text-white/80 text-sm flex-1">
                "Our e-commerce platform is sleek, modern, and user-friendly. Sales increased by 3x after launch with the UPI-first checkout flow."
              </p>
              <span className="mt-4 text-purple-400 text-sm">E-commerce • 2025</span>
            </div>

            {/* Healthcare Client */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-black to-[#14002a] p-6 flex flex-col hover:border-purple-500/50 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl bg-white rounded px-2 h-9 flex items-center">🏥</span>
                <span className="text-base text-white font-medium">Healthcare Portal</span>
              </div>
              <p className="text-white/80 text-sm flex-1">
                "Our online appointment flow improved 4x after launch. Support is always quick and the dashboard is better than any local rival."
              </p>
              <span className="mt-4 text-purple-400 text-sm">Healthcare • 2025</span>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      {/* Brand story */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8">
          <div className="rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-black to-[#0a0a0a]">
            <h2 className="text-xl font-semibold text-white">Brand Story</h2>
            <p className="mt-3 text-white/80">
              GenForge Studio started with a simple idea: ship outcomes, not overhead. In 2024, we saw brilliant local businesses struggle online—expensive agencies quoted ₹10L+ with 6-month timelines, while freelancers disappeared mid-project. We knew there had to be a better way.
            </p>
            <p className="mt-3 text-white/80">
              Armed with Next.js, MongoDB, and years of e-commerce expertise, we founded GenForge Studio in March 2025 with a mission: deliver agency-quality work at freelancer speed and startup-friendly pricing. Our first project, Trygve Studio's architecture portfolio, became the foundation of our approach—fast, beautiful, and conversion-focused.
            </p>
            <p className="mt-3 text-white/80">
              Today, we've helped 20+ businesses launch profitable online platforms, generating ₹10M+ in client revenue. We combine sharp engineering with pragmatic design to deliver sites and apps that feel fast, convert better, and are easy to maintain. We're not just building websites—we're building your competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Our Office */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-black to-[#0a0a0a] p-6">
            <h2 className="text-xl font-semibold text-white mb-3">Our Office</h2>
            <p className="text-white/80">
              2nd Floor, JSV Hyundai Building,<br />
              CP-53 Sitapur Road Yojna,<br />
              Near Engineering College Chauraha,<br />
              Lucknow, Uttar Pradesh
            </p>
            <div className="mt-5 space-y-2">
              <p className="text-white/60">
                Email: <a href="mailto:hello@genforgestudio.com" className="underline text-purple-300 hover:text-purple-400">hello@genforgestudio.com</a>
              </p>
              <p className="text-white/60">
                Call/WhatsApp: <a href="tel:7390803067" className="underline text-purple-300 hover:text-purple-400">7390803067</a>
              </p>
              <div className="flex gap-3 mt-3">
                <a href="https://instagram.com/genforgestudio" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 hover:underline">Instagram →</a>
                <a href="https://linkedin.com/company/genforge-studio" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-400 hover:underline">LinkedIn →</a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 overflow-hidden h-56 md:h-full min-h-[300px]">
          
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.7659646323646!2d80.9438803115921!3d26.9109216600691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957732a46274b%3A0xe09917f505f98e8f!2sCubispace!5e0!3m2!1sen!2sin!4v1762318238673!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy"
              title="GenForge Studio Location"
            />
          </div>
        </div>
      </section>

      {/* FAQ (brand + discovery) */}
      <section className="px-4 sm:px-6 lg:px-8 pb-14 bg-black">
        <div className="max-w-7xl mx-auto rounded-2xl p-6 border border-white/10 bg-black">
          <h3 className="text-lg font-semibold text-white mb-2">FAQs</h3>

          <details className="group border-t border-white/10 py-3 open:py-4">
            <summary className="cursor-pointer list-none text-white/90">
              Why doesn't Google always show our site for "genforge studio" (with a space)?
            </summary>
            <p className="mt-2 text-white/70 text-sm">
              "Geneforge" is a well-known game series. This page and our structured data clarify that
              <strong> GenForge Studio</strong> is a distinct brand and the official website.
            </p>
          </details>

          <details className="group border-t border-white/10 py-3 open:py-4">
            <summary className="cursor-pointer list-none text-white/90">
              Is "genforge studio" the same as GenForge Studio?
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

          <details className="group border-t border-white/10 py-3 open:py-4">
            <summary className="cursor-pointer list-none text-white/90">
              How fast can GenForge deliver a website?
            </summary>
            <p className="mt-2 text-white/70 text-sm">
              For businesses with ready content and finalized design, we offer 1-day delivery. Most projects launch within 1-2 weeks.
            </p>
          </details>

          <details className="group border-t border-white/10 py-3 open:py-4">
            <summary className="cursor-pointer list-none text-white/90">
              Do you work with clients outside India?
            </summary>
            <p className="mt-2 text-white/70 text-sm">
              Yes! We serve clients globally with remote collaboration, transparent pricing, and clear communication throughout the project lifecycle.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 bg-black">
        <div className="max-w-7xl mx-auto rounded-2xl p-8 bg-gradient-to-tr from-[#833DFA] via-black to-black border border-white/10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Have a project in mind?</h2>
          <p className="mt-2 text-white/80">
            Let's design for outcomes — faster pages, higher conversion, lower ops cost.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/contact" className="px-4 py-2 rounded-md bg-white text-black hover:bg-gray-100 transition">Start a project</a>
            <a href="/projects" className="px-4 py-2 rounded-md border border-white/20 text-white hover:bg-white/10 transition">
              Explore projects
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
