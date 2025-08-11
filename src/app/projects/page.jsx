"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import sns from '@/assets/case-study/sns.png'
import ih from '@/assets/case-study/ih.png'
import Image from "next/image";

// ------------------------------------------------------------------
// Projects Page — GenForge Studio
// Eye-soothing, awards-inspired case study grid that matches the
// dark, gradient-forward aesthetic of your landing page.
// ------------------------------------------------------------------

const CASE_STUDIES = [
  {
    slug: "spark-and-stitch",
    title: "Spark & Stitch — UPI‑first E‑commerce.",
    summary:
      "E‑commerce build with Cashfree (UPI‑first), Cloudinary media pipeline, fast dev reloads, and a realtime admin for orders & payments.",
    meta: { location: "Ahmedabad / Surat", year: "2025", role: "Full‑stack" },
    tags: ["E‑commerce", "UPI", "Cashfree", "Cloudinary"],
    cover:
      sns,
    category: "E‑commerce",
  },
 {
  slug: "irvine-hospitality",
  title: "Irvine Hospitality — FF&E E-commerce & Admin",
  summary:
    "Modern hospitality-grade storefront with admin panel for FF&E procurement — product catalog management, order tracking, and workflows aligned to global hospitality standards.",
  meta: { location: "Newport Beach / Global", year: "2025", role: "Full-stack" },
  tags: ["Hospitality", "FF&E", "Admin Panel"],
  cover: ih, // Replace with Irvine cover image when available
  category: "Hospitality",
},
  
];

const CATEGORIES = ["All", "E‑commerce", "SaaS", "Branding"];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const items = useMemo(() => {
    if (active === "All") return CASE_STUDIES;
    return CASE_STUDIES.filter((c) => c.category === active);
  }, [active]);

  return (
    <div className="relative min-h-screen bg-black text-gray-100 overflow-hidden">
      {/* Background gradients / orbs */}
      <div className="pointer-events-none absolute -top-40 -left-24 h-[36rem] w-[36rem] rotate-12 bg-gradient-to-br from-[#833DFA]/30 via-purple-500/10 to-transparent blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-40 -right-24 h-[36rem] w-[36rem] -rotate-12 bg-gradient-to-tr from-cyan-400/20 via-blue-500/10 to-transparent blur-3xl"></div>

      {/* Container */}
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* Header / Hero */}
        <header className="mb-12  mx-auto text-center">
          <div className="inline-flex items-center mx-auto text-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide backdrop-blur-sm">
            <span className="mr-2 inline-block mx-auto text-center h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
            Now showcasing selected work
          </div>

          <h1 className="mt-6 text-center text-4xl font-semibold leading-tight sm:text-5xl">
            Projects & Case Studies
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-300">
            A curated selection of builds and redesigns — crafted for speed,
            conversion and maintainability.
          </p>

          {/* Quick stats */}
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { k: "Avg LCP", v: "≤ 2.0s" },
              { k: "Checkout success", v: "+7–12%" },
              { k: "Image size", v: "−45–60%" },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm"
              >
                <div className="text-gray-400">{s.k}</div>
                <div className="text-lg font-semibold">{s.v}</div>
              </div>
            ))}
          </div>
        </header>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`group rounded-full border px-4 py-1.5 text-sm transition-all duration-300 ${
                active === c
                  ? "border-purple-400/40 bg-purple-500/10 text-white"
                  : "border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10"
              }`}
            >
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-purple-400 to-cyan-400"></span>
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <article
              key={p.slug}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
              </div>

              <div className="p-5">
                <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-gray-400">
                  <span className="rounded-full bg-white/5 px-2 py-0.5">{p.meta.year}</span>
                  <span className="rounded-full bg-white/5 px-2 py-0.5">{p.meta.location}</span>
                  <span className="rounded-full bg-white/5 px-2 py-0.5">{p.meta.role}</span>
                </div>

                <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-gray-300">{p.summary}</p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-gradient-to-tr from-purple-500/15 to-cyan-400/15 px-2 py-0.5 text-xs text-gray-300"
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
                    <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-purple-400 to-purple-400 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </Link>

                  <div className="opacity-60 transition-opacity group-hover:opacity-100" aria-hidden>
                    →
                  </div>
                </div>
              </div>

              {/* Glow on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
                background:
                  "radial-gradient(800px 200px at var(--x,50%) var(--y,50%), rgba(131,61,250,0.12), transparent 40%)",
              }}></div>
            </article>
          ))}
        </section>

        {/* CTA */}
        <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-white/10 bg-gradient-to-tr from-white/5 to-white/[0.03] p-6 text-center">
          <h2 className="text-2xl font-semibold">Have a project in mind?</h2>
          <p className="mt-2 text-gray-300">
            Let’s design for outcomes — faster pages, higher conversion, lower operational cost.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center justify-center rounded-full main-p-bg px-5 py-2 text-sm font-medium text-white hover:opacity-95"
          >
            Start a project
          </Link>
        </div>
      </div>

      {/* Small script: animate card glow toward cursor without external libs */}
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
    </div>
  );
}
