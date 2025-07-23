"use client"
import SplineHero from '@/components/SplineHero'
export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidd en bg-black text-white">
      {/* Spline Background */}
     
{/* <SplineHero /> */}
      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden h-screen px-4 text-center pointer-events-none">
        <h1 className="text-5xl text-gradient max-w-6xl sm:text-6xl lg:text-7xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white">
          {/* Get Your Business Website in Just 1 Day */}
          Your Partner in Digital Growth <br /> Not Just a Website Builder


        </h1>

        <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-200">
          We help local businesses get online, fast — complete with design, hosting, automation, and growth tools.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex   sm:flex-row items-center gap-4 pointer-events-auto">
          <button className="bg-[#833dfa] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#ab7aff] transition">
             Book Free Call
          </button>
          <button className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition">
             View Pricing
          </button>
        </div>
      </div> 
      
    </div>
  );
}
