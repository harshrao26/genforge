"use client";
import React, { useState, useEffect, useRef } from "react";
import { MdArrowOutward } from "react-icons/md";

const services = [
  {
    id: 1,
    number: "01",
    title: "Product Design",
    description: "SaaS Platform • Web Platform • Mobile App",
    bgColor: "bg-purple-50",
    hoverColor: "group-hover:bg-[#c3dee3]",
    paragraph:
      "By working hand in hand, we’ll turn your ideas into real, market-ready products. With a focus on your unique needs, we’ll blend aesthetics and usability. Let’s chat about how we can bring your ideas to life.",
  },
  {
    id: 2,
    number: "02",
    title: "UX Design",
    description: "UX Audit • Analysis • Research",
    bgColor: "bg-purple-100",
    hoverColor: "group-hover:bg-gray-100",
    paragraph:
      "We evaluate and optimize user experience through research-driven audits.",
  },
  {
    id: 3,
    number: "03",
    title: "Development",
    description: "Next.js • Webflow • React • Node.js • React Native • Angular",
    bgColor: "bg-purple-200",
    hoverColor: "group-hover:bg-gray-100",
    paragraph:
      "Our development process ensures scalable and high-performance solutions.",
  },
  {
    id: 4,
    number: "04",
    title: "Quality Assurance",
    description: "Testing • Planning, creating following KPI's • Documentation",
    bgColor: "bg-purple-300",
    hoverColor: "group-hover:bg-gray-100",
    paragraph:
      "QA is integral — we test, measure, and document everything thoroughly.",
  },
];

export default function Feature3() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (el) {
        el.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Cursor circle */}
      {hovered && (
        <div
          className="pointer-events-none  absolute w-24 h-24 bg-[#ffffff] rounded-full blur-2xl\ transition-transform duration-100 ease-out"
          style={{
            top: mousePosition.y - 48,
            left: mousePosition.x - 48,
            transform: `translate3d(0, 0, 0)`,
            zIndex: 10,
          }}
          
        >
         </div>
      )}

      {/* Service List */}
      <div className="z-20 relative">
        {services.map((service) => (
          <div
            key={service.id}
            className={`group hover:bg-gradient-to-t from-[#833DFA] to-transparent`}
          >
            <div
              className={`max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-20 transition-all duration-500 ease-in-out hover:${service.bgColor}`}
            >
              {/* Section number */}
              <div className="text-5xl font-semibold text-gray-100/50 w-full md:w-1/6 mb-4 md:mb-0">
                {service.number}
              </div>

              {/* Content */}
              <div className="w-full md:w-5/6">
                <h2 className="md:text-5xl text-4xl hover:text-white font-medium text-purple-300">
                  <span className="text-white">{service.title}</span>
                </h2>
                <p className="md:text-2xl text-xl mt-1 hover:text-white text-purple-300">
                  {service.description}
                </p>

                {/* Reveal paragraph on hover */}
                {service.paragraph && (
                  <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    <p className="mt-4 md:text-xl text-base text-gray-100">
                      {service.paragraph}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
