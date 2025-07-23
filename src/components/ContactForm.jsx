import React from "react";

export default function ProjectInquiryForm() {
  return (
    <section className="relative bg-[#000000] min-h-screen  px-6 py-16 text-white overflow-hidden">
      {/* Left radial green gradient */}
      
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 bg-gradient-to-tr from-[#833DFA] via-black to-[#000000] p-20 rounded-2xl shadow-lg backdrop-blur-md">
        {/* Left Panel */}
        <div className="space-y-8">
          <h2 className="text-4xl font-medium capitalize mb-4">
            Tell us about your project 
          </h2>

          <ul className="space-y-4 text-white/80 text-sm">
            <li className="flex items-center gap-3">
              <span className="text-[#833DFA]">✅</span> We will respond to you within 12 hours
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#833DFA]">✅</span> We’ll sign an NDA if requested
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#833DFA]">✅</span> Access to dedicated consultant specialists
            </li>
          </ul>

          <div className="mt-10">
            <p className="text-[#833DFA] font-medium text-lg">
              hello@genforgestudio@gmail.com
            </p>
            <p className="text-white/70 mt-2 text-sm">
              Always busy and want to book an exact time to call?
            </p>
            <button className="mt-4 bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-sm font-medium transition">
              Book a free call
            </button>
          </div>
        </div>

        {/* Right Form */}
        <form className="space-y-8">
          {/* Service Tags */}
          <div>
            <label className="block mb-2 text-sm text-white/70">Service</label>
            <div className="flex flex-wrap gap-2">
              {["Consulting", "Consulting", "Consulting", "Consulting"].map((item, index) => (
                <span
                  key={index}
                  className="bg-black/30 border border-white/10 px-4 py-1 rounded-full text-sm cursor-pointer hover:bg-white hover:text-black transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Budget Tags */}
          <div>
            <label className="block mb-2 text-sm text-white/70">Budget</label>
            <div className="flex flex-wrap gap-2">
              {["Less than $10K", "$10K - $50K", "More than $50K"].map((item, index) => (
                <span
                  key={index}
                  className="bg-black/30 border border-white/10 px-4 py-1 rounded-full text-sm cursor-pointer hover:bg-white hover:text-black transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Full Name + Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full name*"
              required
              className="bg-transparent border-b border-white/20 py-2 w-full placeholder-white/40 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email*"
              required
              className="bg-transparent border-b border-white/20 py-2 w-full placeholder-white/40 focus:outline-none"
            />
          </div>

          {/* Project Details */}
          <textarea
            placeholder="Project details*"
            rows={4}
            required
            className="w-full bg-transparent border-b border-white/20 py-2 placeholder-white/40 focus:outline-none"
          />

          {/* File Upload */}
          <div>
            <label className="block mb-2 text-sm text-white/70">Attach a file (optional)</label>
            <div className="w-full border border-dashed border-white/20 rounded-lg px-4 py-6 text-center text-white/60">
              Choose a file or drag and drop here
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
