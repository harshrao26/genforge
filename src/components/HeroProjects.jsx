"use client";

import Link from "next/link";
import Image from "next/image";

// Replace these with your own images or Cloudinary URLs
import sparkCover from "@/assets/case-study/sns.png";
import irvineCover from "@/assets/case-study/ih.png";
 
const projects = [
  {
    slug: "spark-and-stitch",
    title: "Spark & Stitch — UPI-first E-commerce",
    summary:
      "E-commerce with Cashfree (UPI-first), Cloudinary media pipeline, and realtime admin.",
    tags: ["E-commerce", "UPI", "Cloudinary"],
    cover: sparkCover,
  },
  {
    slug: "irvine-hospitality",
    title: "Irvine Hospitality — FF&E Storefront & Admin",
    summary:
      "Hospitality-grade catalog, order tracking, and procurement workflows (FF&E).",
    tags: ["Hospitality", "FF&E", "Admin Panel"],
    cover: irvineCover,
  },
  
];

export default function FeaturedProjects() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px -6 overflow-hidden py-16 text-gray-100">
      {/* soft gradient orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rotate-12 bg-gra dient-to-br from-[#833DFA]/30 via-purple-500/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 -rotate-12 bg-gradient-to-tr from-purple-400/20 via-blue-500/10 to-transparent blur-3xl" />

      {/* header */}
      <div className="relative mb-8 flex items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide backdrop-blur-sm">
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Selected Work
          </div>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-2 max-w-2xl text-gray-300">
            A quick look at recent builds — optimized for speed, conversion, and maintainability.
          </p>
        </div>

        <Link
          href="/projects"
          className="group relative hidden shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur-sm transition hover:text-white sm:inline-flex"
        >
          View all projects
          <span className="absolute -bottom-0.5 left-4 h-px w-[calc(100%-2rem)] origin-left scale-x-0 bg-gradient-to-r from-purple-400 to-purple-400 transition-transform duration-300 group-hover:scale-x-100" />
        </Link>
      </div>

      {/* grid: 1 big + 2 small on desktop, 1-col on mobile */}
      <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <article
            key={p.slug}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 ${
              i === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div className="relative aspect-[16/9] md:aspect-[16/8] overflow-hidden">
              <Image
                src={p.cover}
                alt={p.title}
                fill
                sizes="(min-width: 1024px) 66vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                priority={i === 0}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-gray-300">{p.summary}</p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-gradient-to-tr from-purple-500/15 to-purple-400/15 px-2 py-0.5 text-xs text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <Link
                  href={`/projects/${p.slug}`}
                  className="relative text-sm font-medium text-white/90 transition-colors hover:text-white"
                >
                  View case study
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-purple-400 to-purple-400 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
                <span className="opacity-60 transition-opacity group-hover:opacity-100" aria-hidden>
                  →
                </span>
              </div>
            </div>

            {/* hover glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(800px 200px at var(--x,50%) var(--y,50%), rgba(131,61,250,0.12), transparent 40%)",
              }}
            />
          </article>
        ))}
      </div>

      {/* mobile CTA */}
      <div className="relative mt-8 text-center sm:hidden">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur-sm transition hover:text-white"
        >
          View all projects
        </Link>
      </div>

      {/* tiny script for glow tracking */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('mousemove', (e) => {
              document.querySelectorAll('article.group').forEach((el) => {
                const r = el.getBoundingClientRect();
                const x = ((e.clientX - r.left) / r.width) * 100;
                const y = ((e.clientY - r.top) / r.height) * 100;
                el.style.setProperty('--x', x + '%');
                el.style.setProperty('--y', y + '%');
              });
            });
          `,
        }}
      />
    </section>
  );
}