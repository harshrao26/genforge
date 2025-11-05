// /src/app/projects/strucaxis/page.jsx
import Image from "next/image";
import Link from "next/link";
import strucaxisHero from '@/assets/case-study/strucaxis-hero.png'

export const metadata = {
  title: "StrucAxis — Case Study | GenForge Studio",
  description:
    "Civil & Turnkey Construction Platform for StrucAxis. Fast-loading portfolio website built in 15 days by GenForge Studio.",
  openGraph: {
    title: "StrucAxis — Case Study | GenForge Studio",
    description:
      "Civil & Turnkey Construction Platform for StrucAxis. Modern, lead-focused website built by GenForge Studio.",
    url: "https://genforgestudio.com/projects/strucaxis",
    type: "article",
  },
};

const meta = {
  client: "StrucAxis",
  industry: "Civil Engineering & Turnkey Construction",
  services: [
    "Website Design",
    "Responsive Development",
    "SEO Optimization",
    "Performance Engineering",
  ],
  timeline: "15 Days",
  year: "2025",
  website: "https://strucaxis.com/",
};

const bullets = {
  goals: [
    "Establish credible online presence for a growing construction firm.",
    "Showcase civil & turnkey projects with professional portfolio grid.",
    "Drive qualified inquiries through streamlined contact flow.",
  ],
  challenges: [
    "Building trust through a clean, professional design for B2B construction sector.",
    "Creating scalable portfolio structure as projects accumulate.",
    "Fast turnaround: 15 days from concept to live deployment.",
  ],
  approach: [
    "Minimalist dark theme with professional typography and hierarchy.",
    "Project grid system optimized for fast browsing and filtering.",
    "Mobile-first responsive design for site managers and field teams.",
    "SEO-friendly structure with schema markup for construction services.",
    "Performance optimization: <1.5s LCP, 90+ Lighthouse score.",
  ],
  outcomes: [
    "Professional brand presence established in competitive market.",
    "Improved inquiry quality through clear value proposition.",
    "Fast load times on 4G networks (critical for field teams).",
  ],
};

const metrics = [
  { label: "Delivery Time", value: "15 Days", sub: "concept to live" },
  { label: "Avg. Project Value", value: "₹30K+", sub: "per engagement" },
  { label: "Page Speed", value: "1.4s LCP", sub: "on 4G" },
];

const gallery = [
  { src: strucaxisHero, w: 1800, h: 1100, alt: "Hero — StrucAxis" },
  { src: "/images/strucaxis-projects.png", w: 1600, h: 1100, alt: "Projects Grid — StrucAxis" },
  { src: "/images/strucaxis-about.png", w: 1600, h: 1100, alt: "About — StrucAxis" },
  { src: "/images/strucaxis-contact.png", w: 1600, h: 1100, alt: "Contact Section — StrucAxis" },
  { src: "/images/strucaxis-mobile.png", w: 800, h: 1400, alt: "Mobile View — StrucAxis" },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "Interviewed StrucAxis team to understand core services, target clients, and competitive positioning in civil & turnkey space.",
    timeline: "Days 1-2",
  },
  {
    num: "02",
    title: "Design System",
    desc: "Created professional dark theme with clear typography hierarchy, accent colors, and scalable component library.",
    timeline: "Days 3-4",
  },
  {
    num: "03",
    title: "Development",
    desc: "Built Next.js frontend with image optimization, SEO schema, and mobile-first responsive design.",
    timeline: "Days 5-12",
  },
  {
    num: "04",
    title: "Testing & Launch",
    desc: "Rigorous performance testing, SEO validation, cross-device compatibility, and live deployment.",
    timeline: "Days 13-15",
  },
];

export default function StrucAxisCaseStudy() {
  return (
    <main className="relative overflow-clip bg-[#000000] text-white">
      {/* Ambient gradient field */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_15%,rgba(131,61,250,0.12),transparent_50%),radial-gradient(40%_40%_at_80%_85%,rgba(236,72,153,0.10),transparent_45%)]" />

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-28 md:pt-36">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                Case Study
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
                StrucAxis
              </h1>
              <p className="mt-3 max-w-2xl text-base text-gray-300">
                A professional, performance-optimized website for a{" "}
                <span className="text-white/90">
                  civil engineering & turnkey construction
                </span>{" "}
                firm — built in just <span className="text-white/90">15 days</span> to establish credible
                market presence and drive qualified inquiries.
              </p>
            </div>

            {/* Meta block */}
            <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
              <MetaChip label="Client" value={meta.client} />
              <MetaChip label="Industry" value={meta.industry} />
              <MetaChip label="Timeline" value={meta.timeline} />
              <MetaChip label="Year" value={meta.year} />
            </div>
          </div>

          {/* Hero image */}
          <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(120%_60%_at_70%_-10%,rgba(255,255,255,0.08),transparent)]" />
            <Image
              src={gallery[0].src}
              alt={gallery[0].alt}
              width={gallery[0].w}
              height={gallery[0].h}
              priority
              className="h-auto w-full object-cover bg-gray-900"
            />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <Section>
        <SectionHeading eyebrow="Overview" title="From concept to live in 15 days" />
        <div className="mt-6 grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-gray-300">
            <p>
              StrucAxis needed a professional online presence to compete in the civil engineering and turnkey construction sector. The challenge: deliver a credible, fast-loading website in record time without compromising quality.
            </p>
            <p>
              We built a clean, trust-focused platform with a scalable project portfolio, clear CTAs, and performance-first engineering. The result: a website that loads fast on 4G networks (critical for field teams) and converts visitors into qualified inquiries.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {meta.services.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-gray-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ListCard title="Goals" items={bullets.goals} />
            <ListCard title="Challenges" items={bullets.challenges} />
          </div>
        </div>
      </Section>

      {/* APPROACH */}
      <Section>
        <SectionHeading eyebrow="Approach" title="Fast, professional, scalable" />
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <ol className="space-y-4 text-gray-300">
            {bullets.approach.map((a, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-md bg-white/10 text-[11px] font-semibold">
                  {i + 1}
                </span>
                <span>{a}</span>
              </li>
            ))}
          </ol>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h4 className="text-sm font-semibold text-white">Key Outcomes</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              {bullets.outcomes.map((o, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-fuchsia-400/80" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg border border-white/10 bg-white/5 p-3 text-center"
                >
                  <div className="text-lg font-semibold">{m.value}</div>
                  <div className="text-[11px] text-gray-400">{m.label}</div>
                  <div className="text-[10px] text-gray-500">{m.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* TIMELINE / PROCESS */}
      <Section>
        <SectionHeading eyebrow="Process" title="15-day sprint to launch" />
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.num}
              className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-purple-500/50 transition-all"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {step.num}
              </div>
              <h4 className="text-base font-semibold text-white mb-2">
                {step.title}
              </h4>
              <p className="text-xs text-gray-400 mb-3">{step.timeline}</p>
              <p className="text-sm text-gray-300 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

       {/* <Section>
        <SectionHeading eyebrow="Gallery" title="Website screens & responsiveness" />
        <div className="mt-6 space-y-6">
           <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              src={gallery[1].src}
              alt={gallery[1].alt}
              width={gallery[1].w}
              height={gallery[1].h}
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] bg-gray-900"
            />
            <figcaption className="absolute inset-x-0 bottom-0 hidden bg-gradient-to-t from-black/60 to-transparent p-4 text-sm text-gray-200 sm:block">
              {gallery[1].alt}
            </figcaption>
          </figure>

           <div className="grid gap-6 md:grid-cols-2">
            {gallery.slice(2, 4).map((img) => (
              <figure
                key={img.src}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] bg-gray-900"
                />
                <figcaption className="absolute inset-x-0 bottom-0 hidden bg-gradient-to-t from-black/60 to-transparent p-3 text-xs text-gray-200 sm:block">
                  {img.alt}
                </figcaption>
              </figure>
            ))}
          </div>

           <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-lg font-semibold text-white mb-4">
              Mobile-First Design
            </h3>
            <p className="text-gray-300 mb-6">
              Optimized for site managers and field teams accessing on 4G networks. Fast load times, clear hierarchy, and touch-friendly CTAs.
            </p>
            <div className="flex justify-center">
              <figure className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 max-w-sm">
                <Image
                  src={gallery[4].src}
                  alt={gallery[4].alt}
                  width={gallery[4].w}
                  height={gallery[4].h}
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] bg-gray-900"
                />
              </figure>
            </div>
          </div>
        </div>
      </Section> */}

      {/* TESTIMONIAL */}
      <Section>
        <blockquote className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="pointer-events-none absolute -top-8 -left-8 h-28 w-28 rounded-full bg-[#7e39f3] blur-2xl" />
          <p className="text-lg leading-relaxed text-gray-200">
            "GenForge delivered our site in just 15 days—faster than expected without compromising quality. The website looks professional and loads instantly on mobile. Perfect for reaching clients and field teams."
          </p>
          <footer className="mt-4 text-sm text-gray-400">
            — StrucAxis Team
          </footer>
        </blockquote>
      </Section>

      {/* KEY LEARNINGS */}
      <Section>
        <SectionHeading eyebrow="Key Learnings" title="What we discovered" />
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <LearningCard
            icon="⚡"
            title="Speed Matters in B2B"
            desc="Field teams often access on 4G. Every 100ms of load time affects bounce rate. We prioritized LCP and image optimization."
          />
          <LearningCard
            icon="🏗️"
            title="Trust Through Design"
            desc="Construction clients judge credibility instantly. Professional typography, clear hierarchy, and minimal design build confidence faster than flashy animations."
          />
          <LearningCard
            icon="📱"
            title="Mobile-First in Construction"
            desc="Site managers and field engineers work on phones. Touch-friendly CTAs, readable fonts, and fast interactions are non-negotiable."
          />
        </div>
      </Section>

      {/* CTA */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-gradient-to-r from-[#833DFA]/20 to-fuchsia-500/10 p-6 sm:flex-row">
            <div>
              <h3 className="text-xl font-semibold">Explore the live website</h3>
              <p className="mt-1 text-sm text-gray-300">
                See the performance and design in context.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={meta.website}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center rounded-md bg-white/90 px-4 py-2 text-sm font-semibold text-black transition hover:bg-white"
              >
                Visit strucaxis.com →
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10"
              >
                Start a Project
              </Link>
            </div>
          </div>

          {/* Next/Prev nav */}
          <div className="mt-8 flex items-center justify-between text-sm text-gray-400">
            <Link href="/projects" className="hover:text-white/90">
              ← All Projects
            </Link>
            <Link href="/projects/trygve-studio" className="hover:text-white/90">
              Next: Trygve Studio →
            </Link>
          </div>
        </div>
      </section>

      {/* Related Projects CTA */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <h3 className="text-2xl font-semibold">More Case Studies</h3>
            <p className="mt-2 text-gray-300">
              See how we've helped other businesses transform online.
            </p>
            <Link
              href="/projects"
              className="mt-6 inline-block px-6 py-3 rounded-md bg-white/10 border border-white/15 text-white hover:bg-white/20 transition"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ===== Subcomponents ===== */

function Section({ children }) {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">{children}</div>
    </section>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs uppercase tracking-[0.25em] text-white/60">
        {eyebrow}
      </div>
      <h2 className="mt-2 text-2xl font-semibold md:text-3xl">{title}</h2>
    </div>
  );
}

function MetaChip({ label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
      <div className="text-[11px] uppercase tracking-wide text-white/50">
        {label}
      </div>
      <div className="mt-1 text-sm text-white/90">{value}</div>
    </div>
  );
}

function ListCard({ title, items }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <h4 className="text-sm font-semibold text-white mb-3">{title}</h4>
      <ul className="space-y-2 text-sm text-gray-300">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-fuchsia-400/80" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LearningCard({ icon, title, desc }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-purple-500/50 transition-all">
      <div className="text-4xl mb-3">{icon}</div>
      <h4 className="text-base font-semibold text-white mb-2">{title}</h4>
      <p className="text-sm text-gray-300 leading-relaxed">{desc}</p>
    </div>
  );
}
