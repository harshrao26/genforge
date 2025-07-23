// components/ServiceSection.jsx
import React from "react";
import Image from "next/image";
import groovy from "@/assets/projects/groovy.png";
import af from "@/assets/projects/ff.png";
export default function ServiceSection() {
  return (
    <section className="bg-gradient-to-b  relative from-[#892be200] via-0% min-h-screen text-white   px-6 py-16">
  

      {/* Service Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-5xl text-center font-semibold mb-16">
          Remarkable Projects
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10 bg-gradient-to-tl  from-[#823dfa6b] p-10  rounded-xl shadow-2xl hover:-rotate-3 transition duration-700 ease-out">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h3 className="text-4xl md:text-5xl font-semibold">UI/UX DESIGN</h3>
            <p className="text-white/70 text-sm uppercase">
              We are Genesis Creative
            </p>
            <button className="mt-4 border border-white rounded-full px-6 py-2 text-sm tracking-wider hover:bg-white hover:text-black transition duration-300">
              LET SEE ↗
            </button>
          </div>
          {/* Right Image */}
          <div className="flex-1">
            <Image
              src={groovy}
              height={400}
              alt="UI Des ign"
              className="rounded-md shadow-lg object-cover w-full"
            />
          </div>
        </div>
      </div>

      {/* Remarkable Project */}
      <div className="max-w-7xl mx-auto mt-32">
        <div className="relative transform -rotate-3 hover:rotate-0 transition duration-700 ease-out">
          <div className="bg-gradient-to-tl  from-[#823dfa6b]  rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 shadow-2xl">
            {/* Project Info */}
            <div className="flex-1 space-y-4">
              <p className="text-2xl md:text-6xl font-semibold">UI/UX DESIGN</p>
              <div className="">
                <p className="text-xl text-white/60">(01/04)</p>
                <p className="uppercase text-2xl mt-2 text-violet-300 tracking-wide">
                  Service Mobile App
                </p>
              </div>
            </div>

            {/* Phone Image */}
            <div className="flex-1 ">
              <Image
                src={af} // replace with your hand+phone image
                height={600}
                alt="Mobile App"
                className="mx-auto h-[50%]"
              />
            </div>

            {/* Tags & Button */}
            <div className="flex-1 flex flex-col items-end space-y-2">
              <div className="flex gap-3 text-white/60 text-xs uppercase">
                <span>Customs Website</span>
                <span>2022</span>
              </div>
              <button className="mt-4 border border-white rounded-full px-6 py-2 text-sm tracking-wider hover:bg-white hover:text-black transition duration-300">
                LET VIEW ↗
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <AboutSection /> */}
    </section>
  );
}

const stats = [
  { label: "Happy clients", value: "30+" },
  { label: "Referrals", value: "67%" },
  { label: "Conversion Metrics", value: "3.4%" },
  { label: "Customer Insight", value: "75K" },
  { label: "Revenue Growth", value: "128%" },
  { label: "Design Sprints Completed", value: "30+" },
];

function AboutSection() {
  return (
    <section className="  text-white py-24 px-6  ">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-5xl md:text-5xl font-medium tracking-wide mb-6 relative inline-block">
          <span className=" text-white/70">About Us</span>
        </h2>

        {/* Description */}
        <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-20">
          We’re not a web design agency. We’re a growth partner for local
          businesses who want to get online quickly, professionally, and without
          technical headaches.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl px-6 py-8 text-left border border-white/10 backdrop-blur-sm"
            >
              <p className="text-white/60 text-sm mb-2">{stat.label}</p>
              <p className="text-3xl md:text-4xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
