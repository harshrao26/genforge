"use client";

import { useEffect, useState } from "react";
import heroimg from "@/assets/heroimg4.png";
import heroimg2 from "@/assets/heroimg3.jpg";
import Image from "next/image";
import dynamic from "next/dynamic";
const ModelForm = dynamic(() => import("@/components/ModelForm"), {
  ssr: false,
  loading: () => null,
});
import { FaTimes } from "react-icons/fa";
import AnimatedBackground from "./AnimatedBackground";

export default function Hero({ onViewPricingClick }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowFloatingButton(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
  const timer = setTimeout(() => {
    setIsModalOpen(true);
  }, 4000); // 2 seconds

  return () => clearTimeout(timer); // cleanup if component unmounts
}, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {showFloatingButton && (
        <button
          onClick={handleOpenModal}
          className="bg-[#833dfa] z-[100000000] fixed bottom-6 right-6 text-white font-semibold px-6 py-3 rounded-full hover:bg-[#ab7aff] transition z-50"
        >
          Book Free Call
        </button>
      )}
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        {/* <Image
          src={heroimg}
          alt="Hero Background"
          fill
          priority // ✅ critical!
          quality={75} 
          sizes="100vw"
          className="object-cover md:opacity-80 opacity-50 md:block hidden"
          style={{ filter: "saturate(1)" }}
        /> */}
        <Image
          src={heroimg2}
          alt="Hero Background"
          fill
          priority // ✅ critical!
          quality={75}
          sizes="100vw"
          className="object-cover md:opacity-50  "
          style={{ filter: "saturate(1)" }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden h-screen px-4 text-center">
        <h1 className="text-5xl text-gradient max-w-6xl sm:text-6xl lg:text-7xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white">
          Your Partner in Digital Growth, <br /> Not Just a Website Builder
        </h1>

        <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-200">
          We help local businesses get online, fast — complete with design,
          hosting, automation, and growth tools.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex sm:flex-row items-center gap-4 pointer-events-auto">
          <button
            onClick={handleOpenModal}
            className="bg-[#833dfa] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#ab7aff] transition"
          >
            Book Free Call
          </button>
          {/* <button
          onClick={onViewPricingClick}
          className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
        >
          View Pricing
        </button> */}
          <a
            href="#pricing"
            className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            View Pricing
          </a>
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center px-4 animate-fade-in-fast">
          <div className="relative bg-black max-w-4xl w-full rounded-2xl overflow-auto shadow-lg border border-white/10">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white font-extralight text-xl z-50"
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

      {/* <AnimatedBackground /> */}
    </div>
  );
}
