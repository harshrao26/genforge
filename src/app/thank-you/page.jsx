"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  return (
    <section className="relative h-screen bg-black text-white flex items-center justify-center overflow-hidden px-6">
      {/* Background Blurs */}
      <div className="absolute h-full w-80 right-0 top-0 rotate-60 bg-gradient-to-bl from-[#833DFA] to-transparent blur-3xl"></div>
      <div className="absolute h-full w-80 left-0 top-60 -rotate-45 bg-gradient-to-bl from-[#833DFA] to-transparent blur-3xl"></div>

      <div className="relative z-10 text-center max-w-2xl">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-white/10 border border-white/10 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-[#833DFA] animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold mb-4 tracking-tight">
            Thank you{ name ? `, ${name.split(" ")[0]}` : "" }!
          </h1>
          <p className="text-white/70 text-base sm:text-lg">
            Your inquiry has been received. Our team will get back to you shortly.
          </p>
        </div>

        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition text-white backdrop-blur-md"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
