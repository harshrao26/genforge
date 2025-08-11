"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import sns from "@/assets/case-study/sns.png";
import sns2 from "@/assets/case-study/sns2.png";
import sns3 from "@/assets/case-study/sns3.png";
import sns4 from "@/assets/case-study/sns4.png";
import sns5 from "@/assets/case-study/sns5.png";
import sns6 from "@/assets/case-study/sns6.png";
import sns7 from "@/assets/case-study/sns7.png";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

export default function SparkAndStitchCaseStudy() {
  // simple scroll progress for the header bar
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const s = window.scrollY;
      const h = document.body.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (s / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative pt-20  min-h-screen overflow-hidden bg-black text-gray-100">
      {/* soft background gradients that match the home page */}
      <div className="pointer-events-none absolute -top-64 -left-40 h-[42rem] w-[42rem] rotate-12 bg-gradient-to-br from-[#833DFA]/25 via-purple-500/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-64 -right-40 h-[42rem] w-[42rem] -rotate-12 bg-gradient-to-tr from-purple-400/20 via-blue-500/10 to-transparent blur-3xl" />

      {/* sticky progress bar */}

      {/* header / breadcrumb */}
      <div className="relative mx-auto max-w-7xl px-6 pt-10">
        <nav className="mb-4 text-sm text-gray-400">
          <Link href="/" className="hover:text-white/90">
            Home
          </Link>{" "}
          <span className="mx-2">/</span>
          <Link href="/projects" className="hover:text-white/90">
            Projects
          </Link>{" "}
          <span className="mx-2">/</span>
          <span className="text-white">Spark & Stitch</span>
        </nav>
      </div>

      {/* hero */}
      <header className="relative  mx-auto max-w-7xl px-6 space-x-4 flex flex-col gap-4 py-10">
        <div className="  rounded-full   bord er-white/10 bg-whi te/5 px-3 py-1 text-xs  ">
          <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Case Study
        </div>

        <Link
          href="https://www.sparknstitch.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Spark & Stitch website in a new tab"
          className=" md:flex flex-col items-center gap-2 text-3xl font-semibold text-white sm:text-4xl"
        >
          <span className="text-3xl font-semibold sm:text-4xl">
            Spark & Stitch
          </span>

          {/* divider */}
 
          {/* “Visit” pill */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-purple-500/10 to-purple-400/10 px-3 py-1 text-sm text-gray-200">
            Visit website
            <MdArrowOutward
              className="translate-x-0 transition-transform duration-200 group-hover:translate-x-0.5"
              size={18}
              aria-hidden
            />
          </span>

          {/* animated underline on the whole chip */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -bottom-0.5 mx-5 h-px origin-left scale-x-0 bg-gradient-to-r from-purple-400 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100"
          />
        </Link>
        <p className="mt-3 max-w-2xl text-gray-300">
          A fast, UPI-first 🛍️ e-commerce experience built with Cashfree 💳,
          Cloudinary 🖼️, and a real-time admin for orders & payments — tuned for
          conversion and developer velocity ⚡.
        </p>

        {/* meta chips */}
        <div className="mt-6 flex flex-wrap gap-2 text-xs text-gray-300">
          {[
            "Role: Full-stack",
            "Affiliates: Enabled",
            "Location: Ahmedabad ",
            "Year: 2025",
            "Stack: Node, Express, Cashfree, Cloudinary",
          ].map((m) => (
            <span
              key={m}
              className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10"
            >
              {m}
            </span>
          ))}
        </div>

        {/* hero image slot */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <div className="overflow-hidden rounded-xl border border-dashed border-white/20 bg-white/[0.03] p-4 text-center text-sm text-gray-400">
            <Image src={sns} />
          </div>
        </div>
      </header>

      {/* quick outcomes */}
      <section className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { k: "LCP", v: "≤ 2.0s", e: "🚀" },
            { k: "Checkout Success", v: "+7–12%", e: "📈" },
            { k: "Image Weight", v: "−45–60%", e: "🖼️" },
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
            >
              <div className="text-gray-400">
                {s.e} {s.k}
              </div>
              <div className="text-xl font-semibold">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* content grid */}
      <main className="relative mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-[16rem_1fr]">
        {/* sticky toc */}
        <aside className="order-2 lg:order-1">
          <div className="sticky top-16 space-y-3">
            <TOCItem href="#overview" title="Overview" />
            <TOCItem href="#goals" title="Goals" />
            <TOCItem href="#experience" title="Experience & UI" />
            <TOCItem href="#payments" title="Payments & Webhooks" />
            <TOCItem href="#affiliate" title="Affiliate Program" />
            <TOCItem href="#performance" title="Performance" />
            <TOCItem href="#results" title="Results" />
          </div>
        </aside>

        {/* body */}
        <section className="order-1 space-y-12 lg:order-2">
          {/* Overview */}
          <Block id="overview" title="Overview ✍️">
            <p>
              Spark & Stitch sells apparel online. We built a modern storefront
              with server-rendered product pages for SEO, a snappy cart, and an
              admin that centralizes orders, payments, refunds, and inventory.
              Payments run through <b>Cashfree</b> with a UPI-first flow to
              reduce MDR where eligible, and media is optimized via{" "}
              <b>Cloudinary</b>. We also launched an affiliate partner program
              with low-cost onboarding, tracked links, and automated payouts.
            </p>
          </Block>

          {/* Goals */}
          <Block id="goals" title="Goals 🎯">
            <ul className="list-disc space-y-2 pl-5 text-gray-300">
              <li>Launch a quick, stable checkout that favors UPI.</li>
              <li>
                Give the owner a clean view of orders, payments, and refunds.
              </li>
              <li>
                Make content ops painless: drag-drop uploads,
                auto-optimizations.
              </li>
              <li>Keep DX fast: hot reloads and simple deployments.</li>
            </ul>
          </Block>

          {/* Experience */}
          <Block id="experience" title="Experience & UI 🧪">
            <p className="mb-4">
              The interface follows your home page: dark canvas, soft gradients,
              and subtle micro-interactions. We keep motion accessible and
              purposeful — hover glows, focus rings, and reduced motion support.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className=" overflow-hidden rounded-xl border border-dashed border-white/20 bg-white/[0.03] p-4 text-center text-sm text-gray-400">
                <Image src={sns} className="object-cover" />
              </div>
              <div className=" overflow-hidden rounded-xl border border-dashed border-white/20 bg-white/[0.03] p-4 text-center text-sm text-gray-400">
                <Image src={sns2} className="object-cover" />
              </div>
              <div className=" overflow-hidden rounded-xl border border-dashed border-white/20 bg-white/[0.03] p-4 text-center text-sm text-gray-400">
                <Image src={sns3} className="object-cover" />
              </div>
              <div className=" overflow-hidden rounded-xl border border-dashed border-white/20 bg-white/[0.03] p-4 text-center text-sm text-gray-400">
                <Image src={sns4} className="object-cover" />
              </div>
            </div>
          </Block>

          {/* Payments */}
          <Block id="payments" title="Payments & Webhooks 💳">
            <ol className="list-decimal space-y-2 pl-5 text-gray-300">
              <li>Create order on server with idempotency key.</li>
              <li>Start Cashfree session; prefer UPI intent/collect.</li>
              <li>
                Cashfree → webhook → verify signature → mark as paid/refunded.
              </li>
              <li>Sync settlement IDs for accounting.</li>
            </ol>

            {/* flow image slot */}
            <div className="mt-4 overflow-hidden rounded-xl border border-dashed border-white/20 bg-white/[0.03] p-4 text-center text-sm text-gray-400">
              <div className="  w-full">
                <Image src={sns6} className="object-cover" />
              </div>
            </div>
          </Block>

          {/* Affiliate Program */}
          <Block id="affiliate" title="Affiliate Program 🤝">
            <p className="mb-4">
              Spark & Stitch runs an affiliate partner program to drive
              creator-led growth. We built a friction-light onboarding with a
              very small one-time fee, unique referral links, UTM attribution,
              and automated monthly payouts. Admins can monitor partner
              performance, approve payouts, and audit webhooks.
            </p>

            <div className="grid gap-4 sm:grid-cols-1">
              <div className="  overflow-hidden rounded-xl border border-dashed border-white/20 bg-white/[0.03] p-4 text-center text-sm text-gray-400">
                <Image src={sns5} className="object-cover" />
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-gray-400">Onboarding</div>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-gray-300">
                  <li>Apply → pay small fee → instant partner ID</li>
                  <li>KYC + UPI for payouts</li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-gray-400">Tracking</div>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-gray-300">
                  <li>Unique links & coupon codes</li>
                  <li>UTM + server events for accuracy</li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-gray-400">Payouts</div>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-gray-300">
                  <li>Cashfree payouts via webhook approval</li>
                  <li>Ledger + invoice export</li>
                </ul>
              </div>
            </div>
          </Block>

          {/* Performance */}
          <Block id="performance" title="Performance 📊">
            <ul className="list-disc space-y-2 pl-5 text-gray-300">
              <li>
                Cloudinary transforms: <code>f_auto</code>, <code>q_auto</code>,
                responsive widths (WebP/AVIF).
              </li>
              <li>
                Server & CDN caching on catalog; cache-bust on inventory
                updates.
              </li>
              <li>
                Critical CSS for hero/product; defer non-critical JS; preconnect
                to PG/CDN.
              </li>
              <li>Bundle trimming (dynamic imports) + Brotli at the edge.</li>
            </ul>

            <div className="mt-4 grid gap-4 sm:grid-cols-1">
              <div className="overflow-hidden rounded-xl border border-dashed border-white/20 bg-white/[0.03] p-4 text-center text-sm text-gray-400">
                <Image src={sns7} className="object-cover" />
              </div>
            </div>
          </Block>

          {/* Results */}
          <Block id="results" title="Results ✅">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { k: "TTFB", v: "↓ 35%", e: "⏱️" },
                { k: "LCP", v: "≤ 2.0s", e: "⚡" },
                { k: "Checkout Success", v: "+7–12%", e: "🛒" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <div className="text-gray-400">
                    {s.e} {s.k}
                  </div>
                  <div className="text-xl font-semibold">{s.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-gradient-to-tr from-white/5 to-white/[0.03] p-5">
              <p className="text-gray-200">
                “Working with GenForge was a breeze — we launched fast and
                finally have clear visibility into orders and payments.” —{" "}
                <b>Henil Patel</b>
              </p>
            </div>
          </Block>

          {/* CTA */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-purple-500/10 to-purple-400/10 p-6 text-center">
            <h3 className="text-2xl font-semibold">
              Have a project in mind? ✉️
            </h3>
            <p className="mt-2 text-gray-300">
              Let’s design for outcomes — faster pages, higher conversion, lower
              ops cost.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r main-p-bg px-5 py-2 text-sm font-medium text-white hover:opacity-95"
            >
              Start a project
            </Link>
          </div>
        </section>
      </main>

      <Spacer />

      {/* subtle cursor glow across the article cards (for future image blocks) */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('mousemove', (e) => {
              document.querySelectorAll('[data-glow]').forEach((el) => {
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

/* ---------- tiny presentational helpers ---------- */

function Block({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-3 text-gray-300">{children}</div>
    </section>
  );
}

function TOCItem({ href, title }) {
  return (
    <a
      href={href}
      className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-gray-300 hover:border-white/20 hover:bg-white/[0.07]"
    >
      <span>{title}</span>
      <span className="translate-x-0 text-gray-400 transition-transform group-hover:translate-x-0.5">
        →
      </span>
    </a>
  );
}

function ImageSlot({ label }) {
  return (
    <div
      data-glow
      className="flex h-full w-full items-center justify-center border border-dashed border-white/20 bg-[radial-gradient(800px_200px_at_var(--x,50%)_var(--y,50%),rgba(131,61,250,0.10),transparent_40%)]"
    >
      <div className="rounded-md bg-white/5 px-3 py-1 text-xs text-gray-300 ring-1 ring-white/10">
        {label}
      </div>
    </div>
  );
}

function SlotLabel({ children }) {
  return (
    <div className="flex h-full items-center justify-center">
      <span className="rounded-md bg-white/5 px-3 py-1 ring-1 ring-white/10">
        {children}
      </span>
    </div>
  );
}

function Spacer() {
  return <div className="h-24" />;
}
