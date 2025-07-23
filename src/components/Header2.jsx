import { FaGlobe } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";
import logo from "@/assets/logo.png";
import Image from "next/image";
import button from "@/components/ui/button";
import { Globe } from "lucide-react";
import WrapButton from "@/components/ui/wrap-button.jsx";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 lg:px-12 py-4   fixed z-20 text-black flex items-center justify-between">
      {/* Left: Logo + Menu */}
      <div className="flex items-center gap-10">
        {/* Logo */}
        <Link href='/' className="text-xl text-[#1f1f1f] font-semibold flex items-center gap-4">
          <Image src={logo} alt="" height={40} />
          GenForge Studio
        </Link>

        {/* Nav Items */}
        {/* <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li className="cursor-pointer hover:text-gray-300 flex items-center gap-1">
            Features <span className="text-xs"></span>
          </li>
          <li className="cursor-pointer hover:text-gray-300">Pricing</li>
          <li className="cursor-pointer hover:text-gray-300 flex items-center gap-1">
            Resources <span className="text-xs"></span>
          </li>
          <li className="cursor-pointer hover:text-gray-300">Support</li>
        </ul> */}
      </div>

      {/* Right: Language + Icons + Buttons */}
      <div className="flex items-center gap-4">
        {/* Language / Globe Icons */}
        <MdTranslate className="text-lg cursor-pointer" />
        <FaGlobe className="text-lg cursor-pointer" />

        <div className="h-5 w-px bg-black mx-2" />

        {/* Buttons */}

        <button className="px-4 py-2 border border-black rounded-full text-sm hover:bg-black hover:text-black transition">
          Get started
        </button>
        <WrapButton className="">Contact Us</WrapButton>
      </div>
    </nav>
  );
}
