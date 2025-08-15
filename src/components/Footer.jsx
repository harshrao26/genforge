import React from "react";
import { FaXTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import logo from "@/assets/logo.png";
import heroimg from "@/assets/heroimg2.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-black relative text-white py-4 text-center pt-10 md:px-0 px-4">
      {/* <div className="absolute inset-0 z-0">
        <Image
          src={heroimg}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="object-cover opacity-10"
          style={{ filter: "saturate(1)" }}
        />
      </div> */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto justify-between gap-10">
        {/* Left section */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            {/* Replace this div with your logo if available */}
            <div className="bg-w hite text-black w-8 h-8 flex items-center justify-center rounded">
              <Image src={logo} alt="GenForge Studio Logo"/>{" "}
            </div>
            <span className="font-semibold text-lg text-white">
              GenForge Studio
            </span>
          </div>
          <p className="text-gray-400 mt-4 max-w-sm  text-left">
            GenForge Studio empowers teams to transform raw data into clear,
            compelling visuals — making insights easier to share, understand,
            and act on.
          </p>
          <div className="flex items-center gap-4 text-gray-300 text-xl mt-6">
             <a href="https://www.instagram.com/genforgestudio/">
              <FaInstagram className="hover:text-white cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/company/genforge-studio">
            
            <FaLinkedin className="hover:text-white cursor-pointer" />
            </a>
           </div>
        </div>

        {/* Right section */}
        {/* <div className="flex flex-col sm:flex-row gap-10">
          <div>
            <h4 className="text-white font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Integrations</li>
              <li className="hover:text-white cursor-pointer">Changelog</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Documentation</li>
              <li className="hover:text-white cursor-pointer">Tutorials</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Support</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">Partners</li>
            </ul>
          </div>
        </div> */}

        <div className="flex max-w-7xl mx-auto flex-col sm:flex-col justify-between items-center   pt-6 text-sm text-gray-500">
          <div className="flex md:flex-col gap-4 mt-4 sm:mt-0">
            <Link href="/projects" className="hover:text-white">
            Projects
            </Link>
            <Link href="/blogs" className="hover:text-white">
             Read Blogs
            </Link>
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/cookies-settings" className="hover:text-white">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[2px] mt-12 ">
        <div className="absolute inset-0 mx-auto w-[100%] h-[1px] bg-gradient-to-r from-transparent via-gray-00 to-transparent opacity-70 blur-sm"></div>
        <div className="absolute inset-0 mx-auto w-[100%] h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>

      {/* Bottom section */}
      <div className="flex max-w-7xl mx-auto   pt-6 text-sm text-gray-500">
        <p>© 2025 GenForge Studio . All rights reserved.</p>
      </div>

      <div>
        <p className="opacity-40 md:text-9xl text-4xl font-medium mt-8 text-center bg-gradient-to-b from-[#833DFA]  to-black bg-clip-text text-transparent">
          GenForge Studio
        </p>
      </div>
      <div className="bg-black h-10">

      </div>
    </div>
  );
};

export default Footer;
