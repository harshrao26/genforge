import React from "react";

const stats = [
  { label: "Happy clients", value: "30+" },
  { label: "Referrals", value: "67%" },
  { label: "Conversion Metrics", value: "3.4%" },
  { label: "Customer Insight", value: "75K" },
  { label: "Revenue Growth", value: "128%" },
  { label: "Design Sprints Completed", value: "30+" },
];

export default function AboutSection() {
  return (
    <section className="  text-white py-24 px-6  relative overflow-x-clip">
          <div className="absolute h-full w-40 bottom-0  right-0 rotate-60  bg-gradient-to-bl from-[#833DFA] to-transparent blur-3xl"></div>
      {/* <div className="absolute h-full w-40 bottom-0 right-1/2 rotate-90  bg-gradient-to-bl from-[#833DFA] to-transparent blur-3xl"></div> */}
      <div className="absolute h-full w-80 bottom-0 left-0 -top-20 -rotate-80  bg-gradient-to-bl from-[#833DFA] to-transparent blur-3xl"></div>
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-5xl md:text-5xl z-10 font-medium tracking-wide mb-6 relative inline-block">
          <span className=" text-white">About Us</span>
        </h2>

        {/* Description */}
        <p className="text-white text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-20">
We’re not a web design agency. We’re a growth partner for local businesses who want to get online quickly, professionally, and without technical headaches.


        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 z-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 to-[#833DFA] rounded-2xl px-6 py-8 text-left border border-white/10 backdrop-blur-sm"
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
