"use client";

import { useState } from "react";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";
import { ArrowRight, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo2.png";
import ModelForm from "@/components/ModelForm.jsx";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import CalBookingModal from "@/components/CalBookingModal.jsx";


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);


  const handleOpenModal = () => {
    setIsModalOpen(true);
    setMobileMenuOpen(false); // Close mobile menu if open
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const WrapButton = ({ className, children, onClick }) => {
    return (
      <div className="flex items-center justify-center">
        <div
          onClick={onClick}
          className={`group cursor-pointer gap-2   flex items-center  rounded-full    ${className}`}
        >
          <div className="border border-[#3B3A3A] bg-[#833DFA] h-[43px] rounded-full flex items-center justify-center text-white px-2">
            <Globe className="mx-2 animate-spin" />
            <p className="font-medium tracking-tight mr-2">
              {children ? children : "Contact Us"}
            </p>
            <div className="ease-in-out transition-all size-[26px] flex items-center justify-center rounded-full border-2 border-[#ffffff] mr-2">
              <ArrowRight
                size={18}
                className="group-hover:rotate-45 ease-in-out transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <nav className="w-full  bg-gradient-to-b from-white to-transparent px-6 lg:px-12 py-4 bg-gradient-to-b   fixed z-50 text-white flex items-center justify-between">
        <CalBookingModal isOpen={openModal} onClose={() => setOpenModal(false)} />

        {/* Left: Logo */}
        <Link
          href="/"
          className="text-xl font-semibold text-black flex items-center gap-3"
        >
          <Image src={logo} alt="GenForge Studio Logo" height={40} className="animate-in" />
          <p>GenForge Studio</p>
        </Link>

        {/* Desktop Nav (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-4">
          <MdTranslate className="text-lg text-black cursor-pointer" />
          <FaGlobe className="text-lg text-black cursor-pointer" />
          <div className="h-5 w-px bg-black mx-2" />

          <button
  onClick={() => setOpenModal(true)}
            className="px-4 py-2 border border-black text-black rounded-full text-sm  hover:text-black transition"
          >
            Book An Appointment
          </button>
          <WrapButton onClick={handleOpenModal}>Contact Us</WrapButton>
        </div>

        {/* Hamburger Menu (Mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-xl text-black focus:outline-none"
            aria-label="Open menu"
          >
            <HiOutlineMenuAlt3 />
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
          {/* <Link
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
          </Link> */}

          <div className="pt-6 flex flex-col gap-4 w-full max-w-xs">
            {/* <button className="w-full px-4 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition">
              Book An Appointment
            </button> */}
            <WrapButton
              onClick={handleOpenModal}
              className="w-full justify-center"
            >
              Contact Us
            </WrapButton>
          </div>
        </div>
      )}

      {/* Modal Popup with Animation */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center px-4 animate-fade-in-fast">
          <div className="relative bg-black max-w-4xl w-full rounded-2xl overflow-auto shadow-lg border border-white/10">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white text-2xl z-50"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
            <ModelForm />
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

        @keyframes fadeInFast {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-fast {
          animation: fadeInFast 0.2s ease-out forwards;
        }
      `}</style>
    </>
  );
}
