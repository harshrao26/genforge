// app/contact/page.jsx
"use client";

import Link from "next/link";
import ContactForm from "@/components/ContactForm"; // keep your file path

export default function ContactPage() {
  const jsonLd = [
    // Breadcrumbs
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://genforgestudio.com/" },
        { "@type": "ListItem", position: 2, name: "Contact", item: "https://genforgestudio.com/contact" }
      ]
    },
    // Organization + contact
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "GenForge Studio",
      url: "https://genforgestudio.com",
      logo: "https://genforgestudio.com/logo.png",
      sameAs: [
        "https://instagram.com/genforgestudio",
        "https://linkedin.com/company/genforge-studio",
        "https://facebook.com/genforgestudio",
        "https://youtube.com/@genforgestudio"
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "hello@genforgestudio.com",
          areaServed: "IN",
          availableLanguage: ["en", "hi"],
        }
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressLocality: "Ahmedabad / Surat"
      }
    },
    // FAQ for rich results
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How soon will you respond?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We aim to respond within 12 hours on business days (IST)."
          }
        },
        {
          "@type": "Question",
          name: "Do you sign NDAs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes—happy to sign an NDA before sharing sensitive details."
          }
        },
        {
          "@type": "Question",
          name: "What services do you provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Websites, web apps, e-commerce, SEO, performance optimization, hosting, and business automation across India."
          }
        }
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="px-4 sm:px-6 bg-black lg:px-8 py-12 sm:py-16 ">
        <div className="max-w-7xl mt-20 mx-auto text-center">
          <p className="text-sm text-white/70 mb-2">Home / Contact</p>
          <h1 className="text-3xl sm:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#833DFA] via-white to-white/70">
            Contact GenForge Studio
          </h1>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Let’s design for outcomes—faster pages, higher conversion, lower ops cost.
            We serve clients across gloab
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4  sm:px-6 lg:px-8 bg-black pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 lg:gap-12">
          
          {/* Right: Exact form component (kept minimalistic) */}
          <ContactForm />

 
        </div>

        
      </section>
    </>
  );
}