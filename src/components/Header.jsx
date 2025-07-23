"use client";

import { useState } from "react";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import WrapButton from "@/components/ui/wrap-button.jsx";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full px-6 lg:px-12 py-4  bg-gradient-to-b from-black to-transparent fixed z-50 text-white flex items-center justify-between">
        {/* Left: Logo */}
        <Link
          href="/"
          className="text-xl text-gradient font-semibold flex items-center gap-3"
        >
          <Image src={logo} alt="Logo" height={40} className="animate-in" />
          GenForge Studio
        </Link>

        {/* Desktop Nav (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-4">
          <MdTranslate className="text-lg cursor-pointer" />
          <FaGlobe className="text-lg cursor-pointer" />
          <div className="h-5 w-px bg-white mx-2" />

          <button className="px-4 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition">
            Get started
          </button>
          <WrapButton>Contact Us</WrapButton>
        </div>

        {/* Hamburger Menu (Mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-xl focus:outline-none"
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 text-white flex flex-col items-center justify-center space-y-8 px-6 animate-fade-in">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-2xl"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>

          <Link
            href="/"
            className="text-2xl font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/pricing"
            className="text-2xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/features"
            className="text-2xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/support"
            className="text-2xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            Support
          </Link>

          <div className="pt-6 flex flex-col gap-4 w-full max-w-xs">
            <button className="w-full px-4 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition">
              Get started
            </button>
            <WrapButton className="w-full justify-center">Contact Us</WrapButton>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out forwards;
        }
      `}</style>
    </>
  );
}
