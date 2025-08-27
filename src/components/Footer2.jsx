
import React from 'react'
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa6';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-bl from-[#823dfa] via-[#823dfa] to-[#823dfa00] text-white py-4 text- center   px-4 md:px-0">


      {/* Ambient gradients for awwwards/dribbble vibe */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#6d28d9]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#]/20 blur-3xl" />
 
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-md bg-white/5 ring-1 ring-white/10">
                <Image src={logo} alt="GenForge Studio Logo" className="h-6 w-6 object-contain" />
              </div>
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-lg font-semibold text-t ransparent">
                GenForge Studio
              </span>
            </div>
            <p className="mt-4 max-w-sm text-left  text-sm leading-6 ">
              GenForge Studio empowers teams to transform raw data into clear, compelling visuals —
              making insights easier to share, understand, and act on.
            </p>
            <div className="mt-6 flex items-center gap-3">
            
              <a
                href="https://www.instagram.com/genforgestudio/"
                aria-label="GenForge on Instagram"
                className="group inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FaInstagram className="transition group-hover:scale-105" />
              </a>
              <a
                href="https://www.linkedin.com/company/genforge-studio"
                aria-label="GenForge on LinkedIn"
                className="group inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FaLinkedin className="transition group-hover:scale-105" />
              </a>
             </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white">Product</h4>
            <ul className="mt-4 space-y-3 text-sm ">
              <li>
                <Link href="/projects" className="hover:text-white/90 transition">Projects</Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-white/90 transition">Read Blogs</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white/90 transition">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-white/90 transition">Terms of Service</Link>
              </li>
              <li>
                <Link href="/cookies-settings" className="hover:text-white/90 transition">Cookies Settings</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          {/* <div>
            <h4 className="text-sm font-semibold tracking-wider text-white">Resources</h4>
            <ul className="mt-4 space-y-3 text-sm ">
              <li>
                <Link href="/about" className="hover:text-white/90 transition">About</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white/90 transition">Contact</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white/90 transition">Careers</Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white/90 transition">Partners</Link>
              </li>
            </ul>
          </div> */}

          {/* Contact / CTA */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white">Get in touch</h4>
            <p className="mt-4 text-sm ">
              Have a project in mind? Let’s build something remarkable together.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href="mailto:hello@genforgestudio.com"
                className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/100 shadow-sm transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
              >
                hello@genforgestudio.com
              </a>
              <a
                href="tel:+917390803067"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/100 shadow-sm transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
              >
                <FaPhoneAlt className="h-4 w-4" />
                +91 73908 03067
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-[#ffffff]   px-4 py-2 text-sm font-semibold text-[#833DFA] shadow-lg shadow-fuchsia-500/20 transition hover:-translate-y-0.5 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40"
              >
                Schedule a call
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative mt-14 h-px w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60 blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#833DFA] to-transparent" />
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs   sm:flex-row">
          <p>© {new Date().getFullYear()} GenForge Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white/80 transition">Privacy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white/80 transition">Terms</Link>
            <Link href="/cookies-settings" className="hover:text-white/80 transition">Cookies</Link>
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div className="pointer-events-none select-none py-6 text-center">
        <p className="bg-gradient-to-b from-[#AB7AFF] to-transparent bg-clip-text text-5xl font-medium leading-none text-transparent opacity-30 md:text-[10vw]">
          GenForge Studio
        </p>
      </div>
      
    </div>
  )
}

export default Footer
