import React from "react";

const addons = [
  // {
  //   icon: "🔧",
  //   title: "WhatsApp API Setup (WATI/Twilio)",
  //   price: "₹3,000 – ₹5,000",
  //   desc: "Integrate WhatsApp API for seamless messaging with CRM readiness.",
  //   benefits: [
  //     "API configuration (WATI or Twilio)",
  //     "Webhook & automation setup",
  //     "CRM-compatible integration",
  //     "Testing & sandbox validation",
  //   ],
  // },
  {
    icon: "📥",
    title: "Meta Lead Form → Google Sheet → Email",
    price: "₹5,000",
    desc: "Automatically sync leads from Meta Ads to Google Sheets in real time",
    benefits: [
      "Meta form connection setup",
      "Google Sheet mapping",
      "Lead funnel automation",
      "Testing & validation",
    ],
  },
 

  {
    icon: "🖼️",
    title: "Custom Landing Page",
    price: "₹4,000",
    desc: "Standalone high-conversion landing page, separate from main site.",
    benefits: [
      "Custom page layout",
      "Call-to-action optimization",
      "Lead form/CTA integration",
      "1 additional page",
    ],
  },
  {
    icon: "🔍",
    title: "Advance SEO Setup",
    price: "₹4,000",
    desc: "Improve site SEO with basic tagging and sitemap setup.",
    benefits: [
      "Meta tag setup",
      "Sitemap submission",
      "Basic keyword placement",
    ],
  },
  {
    icon: "📧",
    title: "Newsletter / Email Setup",
    price: "₹2,500",
    desc: "Configure email campaigns with optional automation.",
    benefits: [
      "Send neweletter",
      "Email list import",
      "Promotional email ",
      "New offering announcement",
    ],
  },
  
  {
    icon: "📦",
    title: "Code Ownership Handover",
    price: "₹8,000",
    desc: "Final delivery of codebase in zip format or repository.",
    benefits: [
      "Code ZIP/Repo transfer",
      "Final walkthrough session",
      "Usage documentation (if any)",
    ],
  },
    
  {
    icon: "💳",
    title: "Payment Gateway Integration",
    price: "₹2,500",
    desc: "Enable payments via Stripe or Razorpay.",
    benefits: [
      "Gateway account setup",
      "Checkout form integration",
      "Payment success/fail handling",
    ],
  },
   
  
];


const AddOnServices = () => {
  return (
    <div className="  text-white rounded-3xl   max-w-7xl mx-auto    mt-20  ">
      {/* Heading & Description */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-3">Add-On Services</h2>
        <p className="text-gray-400 text-sm max-w-2xl">
          Enhance your digital setup with tailored solutions for growth, visibility, and lead capture.
        </p>
      </div>

      {/* Cards List */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {addons.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-rw justify-between items-start md:items-center border bg-black/20 border-gray-500 rounded-xl p-6   shadow-lg gap-6"
          >
            {/* Left Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="text-xl max-w-xl font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-3">{item.desc}</p>
              <ul className="list-disc  list-inside text-gray-300 text-sm ">
                {item.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>

            {/* Pricing Card */}
            {/* <div className="w-full md:w-60  bg-opacity-80 rounded-2xl px-6 py-4 text-center border border-gray-100 shrink-0">
              
              <p className="text-2xl font-semibold text-white">{item.price}/-</p>
  
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddOnServices;
