"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ProjectInquiryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    projectDetails: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ NEW

  const router = useRouter();

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+\-\s()]{7,15}$/;

    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }

    if (!formData.contactNo.trim()) {
      newErrors.contactNo = "Contact number is required.";
    } else if (!phoneRegex.test(formData.contactNo)) {
      newErrors.contactNo = "Enter a valid contact number.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // prevent multiple clicks

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true); // ✅ Disable the button

      const formBody = new URLSearchParams();
      formBody.append("fullName", formData.fullName);
      formBody.append("email", formData.email);
      formBody.append("contactNo", formData.contactNo);
      formBody.append("projectDetails", formData.projectDetails);

      const res = await fetch("/api/submit-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Unknown error");

      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        contactNo: "",
        projectDetails: "",
      });
      router.push(`/thank-you?name=${encodeURIComponent(formData.fullName)}`);
    } catch (err) {
      alert(`Error submitting form: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative text-white">
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 bg-gradient-to-tr from-[#833DFA] via-black to-black p-6 sm:p-10 lg:p-20 rounded-2xl shadow-lg backdrop-blur-md">
        {/* Left Panel */}
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-medium capitalize mb-4">
            Tell us about your project
          </h2>

          <ul className="space-y-3 sm:space-y-4 text-white/80 text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <span className="text-[#833DFA] text-lg">✅</span> We will respond
              to you within 12 hours
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#833DFA] text-lg">✅</span> We’ll sign an
              NDA if requested
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#833DFA] text-lg">✅</span> Access to
              dedicated consultant specialists
            </li>
          </ul>

          <div className="pt-6 sm:pt-8">
            <p className="text-[#ffffff] font-medium text-base sm:text-lg break-all">
              hello@genforgestudio.com
            </p>
            {/* <p className="text-white/70 mt-2 text-sm">
              Always busy and want to book an exact time to call?
            </p>
            <button className="mt-4 bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full text-sm font-medium transition">
              Book a free call
            </button> */}
          </div>
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full name*"
                value={formData.fullName}
                onChange={handleChange}
                className="bg-transparent border-b border-white/20 py-2 w-full placeholder-white/40 focus:outline-none"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border-b border-white/20 py-2 w-full placeholder-white/40 focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="contactNo"
                placeholder="Contact No*"
                value={formData.contactNo}
                onChange={handleChange}
                className="bg-transparent border-b border-white/20 py-2 w-full placeholder-white/40 focus:outline-none"
              />
              {errors.contactNo && (
                <p className="text-red-500 text-sm mt-1">{errors.contactNo}</p>
              )}
            </div>
          </div>

          <div>
            <textarea
              name="projectDetails"
              placeholder="Project details"
              rows={4}
              value={formData.projectDetails}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/20 py-2 placeholder-white/40 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-full font-semibold transition ${
              loading
                ? "bg-white/20 text-white/60 cursor-not-allowed"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            {loading ? "Submitting..." : "Submit Inquiry"}
          </button>

          {/* {submitted && (
            <p className="text-green-400 text-sm mt-2">Your inquiry was submitted successfully!</p>
          )} */}
        </form>
      </div>
    </section>
  );
}
