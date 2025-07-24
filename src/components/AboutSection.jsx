import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Happy clients", value: 30 },
  { label: "Referrals", value: 67, suffix: "%" },
  { label: "Conversion Metrics", value: 3.4, suffix: "%" },
  { label: "Customer Insight", value: 100, suffix: "" },
  { label: "Revenue Growth", value: 128, suffix: "%" },
  { label: "Design Sprints Completed", value: 30 },
];

function StatItem({ label, value, suffix = "" }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 1500;
      const increment = Math.ceil(end / 60); // Controls speed
      const stepTime = duration / (end / increment);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(parseFloat(start.toFixed(1)));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div
      ref={ref}
      className="bg-gradient-to-br from-white/5 to-[#833DFA] rounded-2xl px-6 py-8 text-left border border-white/10 backdrop-blur-sm"
    >
      <p className="text-white/60 text-sm mb-2">{label}</p>
      <p className="text-3xl md:text-4xl font-semibold">
        {displayValue.toLocaleString()}
        {suffix}
      </p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="text-white py-24 px-6 relative overflow-x-clip">
      <div className="absolute h-full w-40 bottom-0 right-0 rotate-60 bg-gradient-to-bl from-[#833DFA] to-transparent blur-3xl"></div>
      <div className="absolute h-full w-80 bottom-0 left-0 -top-20 -rotate-80 bg-gradient-to-bl from-[#833DFA] to-transparent blur-3xl"></div>

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-medium tracking-wide mb-6 relative inline-block">
          <span className="text-white">About Us</span>
        </h2>

        <p className="text-white text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-20">
          We’re not a web design agency. We’re a growth partner for local
          businesses who want to get online quickly, professionally, and
          without technical headaches.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 z-20">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix || ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
