"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import ih from '@/assets/case-study/ih.png'
import ih2 from '@/assets/case-study/ih2.png'
import ih3 from '@/assets/case-study/ih3.png'
import ih4 from '@/assets/case-study/ih4.png'
import ih5 from '@/assets/case-study/ih5.png'
import ih6 from '@/assets/case-study/ih6.png'
import ih7 from '@/assets/case-study/ih7.png'
export default function IrvineHospitalityCaseStudy() {
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
    <div className="relative min-h-screen overflow-hidden pt-20 bg-black text-gray-100">
      {/* soft gradients */}
      <div className="pointer-events-none absolute -top-64 -left-40 h-[42rem] w-[42rem] rotate-12 bg-gradient-to-br from-[#833DFA]/25 via-purple-500/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-64 -right-40 h-[42rem] w-[42rem] -rotate-12 bg-gradient-to-tr from-cyan-400/20 via-blue-500/10 to-transparent blur-3xl" />

      {/* sticky progress */}
      
      {/* header / breadcrumb */}
      <div className="relative mx-auto max-w-7xl px-6 py-10">
        <nav className="mb-4 text-sm text-gray-400">
          <Link href="/" className="hover:text-white/90">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/projects" className="hover:text-white/90">Projects</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Irvine Hospitality</span>
        </nav>
      </div>

      {/* hero */}
      <header className="relative mx-auto max-w-7xl px-6 pb-10">
        <div className="inline-flex items-center rounded-full  border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide backdrop-blur-sm">
          <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Case Study
        </div>

        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
          Irvine Hospitality 🏨✨
        </h1>
        <p className="mt-3 max-w-2xl text-gray-300">
          A hospitality-grade storefront and admin for FF&E procurement — modern UI,
          catalog management, and order visibility aligned with industry standards.
        </p>

        {/* meta chips */}
        <div className="mt-6 flex flex-wrap gap-2 text-xs text-gray-300">
          {[
            "Role: Full-stack",
            "Industry: Hospitality (FF&E / OS&E)",
            "Location: Newport Beach / Global",
            "Year: 2025",
            "Stack: Next.js, Node, Admin Panel",
          ].map((m) => (
            <span key={m} className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
              {m}
            </span>
          ))}
        </div>

        {/* hero image slot */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <div className="aspect-[16/8] w-full">
          <Image src={ih} />
           </div>
        </div>
      </header>

      {/* quick outcomes */}
      <section className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { k: "Catalog Ops", v: "−80% manual edits", e: "🗂️" },
            { k: "Engagement", v: "↑ time on site", e: "📈" },
            { k: "SEO", v: "FF&E keyword clusters", e: "🔍" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-gray-400">{s.e} {s.k}</div>
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
             <TOCItem href="#catalog" title="Catalog & Taxonomy" />
            <TOCItem href="#orders" title="Orders & Admin" />
            <TOCItem href="#performance" title="Performance" />
            <TOCItem href="#results" title="Results" />
          </div>
        </aside>

        {/* body */}
        <section className="order-1 space-y-12 lg:order-2">
          <Block id="overview" title="Overview ✍️">
            <p>
              We transformed a legacy brochure site into a modern hospitality e-commerce
              experience with SSR product pages, a clean cart, and a role-based admin for
              daily operations. Terminology and UI follow hospitality standards:
              <b> FF&E</b>, <b>OS&E</b>, brand submittals, value engineering, prototype approval,
              and post-occupancy support.
            </p>
          </Block>

          <Block id="goals" title="Goals 🎯">
            <ul className="list-disc space-y-2 pl-5 text-gray-300">
              <li>Enable streamlined FF&E catalog authoring and categorization.</li>
              <li>Give sales/logistics teams real-time order visibility.</li>
              <li>Reflect premium B2B hospitality branding in UI.</li>
              <li>Improve SEO for hospitality procurement queries.</li>
            </ul>
          </Block>

        

          <Block id="catalog" title="Website UI Sections 🧭">
            <p className="mb-4">Core website sections designed and delivered.</p>
            <div className="grid gap-4 sm:grid-cols-2">
                <Image src={ih2}/>
                <Image src={ih3}/>
                <Image src={ih4}/>
                <Image src={ih5}/>

               
             </div>
          </Block>

          <Block id="orders" title="Orders & Admin 📦">
            <p className="mb-4">
              Admin users can add products, upload imagery, manage specs/lead time, and
              track orders across statuses (Pending → Confirmed → In Production → Shipped →
              Delivered). Exports support logistics and accounting.
            </p>
            
          </Block>

          <Block id="performance" title="Performance 📊">
            <ul className="list-disc space-y-2 pl-5 text-gray-300">
              <li>Cloudinary <code>f_auto</code>/<code>q_auto</code>, responsive widths (WebP/AVIF).</li>
              <li>CDN caching for product/category; cache-bust on updates.</li>
              <li>Critical CSS for hero/product; defer non-critical JS.</li>
              <li>Accessible motion & focus states; mobile-first layouts.</li>
            </ul>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <ImageSlot label="Lighthouse report (after)" />
              <ImageSlot label="Catalog authoring time — before/after" />
            </div>
          </Block>

          <Block id="results" title="Results ✅">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { k: "Catalog Ops", v: "−80% manual edits", e: "🗂️" },
                { k: "Engagement", v: "↑ time on site", e: "📈" },
                { k: "Prospecting", v: "↑ qualified inquiries", e: "🧭" },
              ].map((s) => (
                <div key={s.k} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <div className="text-gray-400">{s.e} {s.k}</div>
                  <div className="text-xl font-semibold">{s.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-gradient-to-tr from-white/5 to-white/[0.03] p-5">
              <p className="text-gray-200">
                “The new platform aligns perfectly with our FF&E process and brand standards.”
                — <b>Irvine Hospitality</b>
              </p>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-5 py-2 text-sm font-medium text-black hover:opacity-95"
              >
                Start a project
              </Link>
            </div>
          </Block>
        </section>
      </main>

      <section className="relative mx-auto mt-12 max-w-7xl px-6">
        <h2 className="text-2xl font-semibold">Previous Website UI 🕰️</h2>
        <p className="mt-2 text-gray-300">
          Here's how the old Irvine Hospitality site looked before our redesign:
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 overflow-hidden">
            
            <Image src={ih6}/>
          </div>
          <div className="rounded-xl border border-white/10 overflow-hidden">
<Image src={ih7}/>          </div>
        </div>
      </section>

     

      <Spacer />

      {/* cursor glow infra for future image components */}
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

/* ---------- tiny helpers ---------- */

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

function SlotBox({ children }) {
  return (
    <div className="aspect-[4/3] overflow-hidden rounded-xl border border-dashed border-white/20 bg-white/[0.03] p-4 text-center text-sm text-gray-400">
      <div className="flex h-full items-center justify-center">
        <span className="rounded-md bg-white/5 px-3 py-1 ring-1 ring-white/10">{children}</span>
      </div>
    </div>
  );
}

function Spacer() {
  return <div className="h-24" />;
}