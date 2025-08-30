// /src/app/projects/trygve-studio/page.jsx
import Image from "next/image";
import Link from "next/link";
import try1 from "@/assets/case-study/try0.jpeg"
import t1 from "@/assets/case-study/t1.png"
import t2 from "@/assets/case-study/t2.png"
import t66 from "@/assets/case-study/t6.png"
import t4 from "@/assets/case-study/t4.png"

export const metadata = {
  title: "Trygve Studio — Case Study | GenForge Studio",
  description:
    "Architect & interior portfolio website for Trygve Studio. Modern, fast, and conversion-focused design built by GenForge Studio.",
  openGraph: {
    title: "Trygve Studio — Case Study | GenForge Studio",
    description:
      "Architect & interior portfolio website for Trygve Studio. Modern, fast, and conversion-focused design built by GenForge Studio.",
    url: "https://genforgestudio.com/projects/trygve-studio",
    type: "article",
  },
};

const meta = {
  client: "Trygve Studio PVT LTD",
  industry: "Architecture & Interior Design",
  services: [
    "UX/UI Design",
    "Website Design",
    "Responsive Frontend",
    "Performance & SEO",
  ],
  timeline: "4–6 Weeks",
  year: "2025",
  website: "https://www.trygvestudio.com/",
};

const bullets = {
  goals: [
    "Elevate brand presence with a refined, editorial portfolio vibe.",
    "Show projects beautifully on any device with fast load times.",
    "Drive qualified inquiries through clear CTAs and contact flow.",
  ],
  challenges: [
    "Large, image-heavy layouts without compromising performance.",
    "Consistent art direction across mixed project photography.",
    "Navigation that scales with more case studies over time.",
  ],
  approach: [
    "Grid-first system with generous whitespace and typographic rhythm.",
    "Ambient dark theme with subtle gradient accents from brand palette.",
    "Optimized media pipeline (next/image + responsive sources).",
    "Semantic structure + on-page SEO for discovery and credibility.",
  ],
  outcomes: [
    "Improved time-on-page with cinematic project viewing.",
    "Faster perceived loads via LQIP blur + image priority.",
    "Clearer contact journey increasing lead quality.",
  ],
};

const metrics = [
  { label: "Faster LCP", value: "1.9s", sub: "on 4G devices" },
  { label: "Bounce Rate", value: "-28%", sub: "after redesign" },
  { label: "Form Submissions", value: "+46%", sub: "MoM growth" },
];

const gallery = [
  { src: try1, w: 1800, h: 1100, alt: "Hero — Trygve Studio" },
  { src: t1, w: 1600, h: 1100, alt: "Project grid — Trygve Studio" },
  { src: t2, w: 1600, h: 1100, alt: "Blogs — Trygve Studio" },
  { src: t66, w: 1600, h: 1100, alt: "Career — Trygve Studio" },
  { src: t4, w: 1600, h: 1100, alt: "Contact page — Trygve Studio" },
];

export default function TrygveCaseStudy() {
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
                Trygve Studio
              </h1>
              <p className="mt-3 max-w-2xl text-base text-gray-300">
                A refined, high-performance portfolio for an{" "}
                <span className="text-white/90">
                  architecture & interior design
                </span>{" "}
                studio — crafted to showcase work with editorial elegance and
                convert visitors into enquiries.
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
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <Section>
        <SectionHeading eyebrow="Overview" title="From mood board to measurable impact" />
        <div className="mt-6 grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-gray-300">
            <p>
              The brief was clear: let the work breathe. We built a cinematic
              portfolio experience that balances bold imagery with a calm
              interface. The result is a site that feels premium, loads fast,
              and guides users towards enquiry.
            </p>
            <p>
              This build emphasizes consistency, performance, and content
              scalability as Trygve Studio adds more case studies.
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
        <SectionHeading eyebrow="Approach" title="Quiet luxury, strong structure" />
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

      {/* GALLERY */}
      <Section>
        <SectionHeading eyebrow="Gallery" title="Screens that tell the story" />
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {gallery.slice(1).map((img) => (
            <figure
              key={img.src}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.w}
                height={img.h}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 hidden bg-gradient-to-t from-black/60 to-transparent p-3 text-xs text-gray-200 sm:block">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* TESTIMONIAL */}
      <Section>
        <blockquote className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="pointer-events-none absolute -top-8 -left-8 h-28 w-28 rounded-full bg-[#7e39f3] blur-2xl" />
          <p className="text-lg leading-relaxed text-gray-200">
            “As an architect, presentation is everything. GenForge designed a stunning portfolio site that reflects our vision and attracts the right clients.”
          </p>
          <footer className="mt-4 text-sm text-gray-400">
            — Faisal Saif, Trygve Studio PVT LTD
          </footer>
        </blockquote>
      </Section>

      {/* CTA */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-gradient-to-r from-[#833DFA]/20 to-fuchsia-500/10 p-6 sm:flex-row">
            <div>
              <h3 className="text-xl font-semibold">Explore the live website</h3>
              <p className="mt-1 text-sm text-gray-300">
                See the performance and visuals in context.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={meta.website}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center rounded-md bg-white/90 px-4 py-2 text-sm font-semibold text-black transition hover:bg-white"
              >
                Visit trygvestudio.com →
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10"
              >
                Start a Project
              </Link>
            </div>
          </div>

          {/* Next/Prev nav (optional) */}
          <div className="mt-8 flex items-center justify-between text-sm text-gray-400">
            
            <Link href="/projects" className="hover:text-white/90">
               ← All Projects
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