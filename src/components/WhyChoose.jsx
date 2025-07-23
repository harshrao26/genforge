import React from "react";
import {
  FaRocket,
  FaMobileAlt,
  FaTools,
  FaChartLine,
  FaGoogle,
  FaClipboardList,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRocket />,
    title: "Fast 1-Day Delivery",
    description: "Get your website delivered lightning fast in just one day.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile & SEO Optimized",
    description: "Responsive design with powerful SEO enhancements.",
  },
  {
    icon: <FaTools />,
    title: "Monthly Hosting & Maintenance",
    description: "Reliable hosting and ongoing technical maintenance.",
  },
  {
    icon: <FaGoogle />,
    title: "Google & WhatsApp Tools",
    description: "Integrated tools for customer interaction and visibility.",
  },
  {
    icon: <FaClipboardList />,
    title: "Growth-Ready Templates",
    description: "Professional templates designed to scale with your business.",
  },
  {
    icon: <FaChartLine />,
    title: "Analytics & Support",
    description: "Track performance and get expert help when needed.",
  },
];

const WhyBusinessOwnersLoveThis = () => {
  return (
   <div className="relative  overflow-x-clip">
 <div className="absolute h-full w-80 right-0 rotate-60  bg-gradient-to-bl from-[#833DFA] to-transparent blur-3xl"></div>
 <div className="absolute h-full w-80 left-0 top-60 -rotate-60  bg-gradient-to-bl from-[#833DFA] to-transparent blur-3xl"></div>

     <div className="bg-gradient-to-bl from-[#823dfa20] backdrop-blur-8xl  to-transparent py-40 borde r-t-1 border-[#B88AFF]  px-4 md:px-10 lg:px-20 ">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1   md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-300">
        {/* Intro card - spans 2 columns */}
        <div className="bg-black p-6 lg:col-span-2 flex flex-col justify-center">
          <h2 className="text-5xl font-semibold text-[#833DFA] mb-2">
            Why Business Owners Love This
          </h2>
          <p className="text-gray-400 text-xl">
            We don’t just deliver websites—we provide end-to-end solutions that
            ensure your business thrives online.
          </p>
        </div>

        {/* First 2 features */}
        {features.slice(0, 2).map((feature, index) => (
          <div
            key={index}
            className="bg-black transition-all relative ease-in-out duration-1000 bg-gradient-to-tl from-[#833DFA] to-[#000000] p-10  "
          >
            {/* <div className="text-[#833DFA] mb-3 text-3xl">{feature.icon}</div> */}
            <div className="text-[#833DFA] mb-3 text-8xl font-light opacity-20 absolute right-0 bottom-0">
              {feature.icon}
            </div>
            <h3 className="text-3xl font-semibold text-gray-100 mb-1">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-md mt-4 mt-6">
              {feature.description}
            </p>
          </div>
        ))}

        {/* Remaining 4 features (2nd row) */}
        {features.slice(2).map((feature, index) => (
          <div
            key={index + 2}
            className="bg-black relative transition-all ease-in-out duration-1000 hover:bg-gradient-to-bl from-[#833DFA] to-[#000000] p-10  p-10  "
          >
            {/* <div className="text-[#833DFA] mb-3 text-3xl">{feature.icon}</div> */}
            <div className="text-[#833DFA] mb-3 text-8xl font-light opacity-20 absolute right-0 bottom-0">
              {feature.icon}
            </div>
            <h3 className="text-3xl font-semibold text-gray-100 mb-1">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-md mt-4">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default WhyBusinessOwnersLoveThis;
