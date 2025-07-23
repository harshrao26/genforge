import React from "react";

const TransformDataSection = () => {
  return (
    <div className="relative flex items-center justify-center h-[400px] bg-gradient-to-tr from-[#833DFA] to-black overflow-hidden rounded-b-3xl">
      {/* Circular Gradient Background */}
      <div className="absolute top-[-60%] left-1/2 transform -translate-x-1/2 w-[150%] h-[150%] bg-white opacity-20 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to transform your data?</h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Join thousands of data-driven professionals who are creating beautiful visualizations in minutes.
        </p>
        <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">
          Start for free
        </button>
      </div>
    </div>
  );
};

export default TransformDataSection;
