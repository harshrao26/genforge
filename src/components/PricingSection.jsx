import React from "react";
import Addons from "./Addons";
 const plans = [
  {
    name: "Basic Plan",
    price: "₹9,999",
    billing: "One-time",
    monthlyHosting: "₹999/month",
    color: "purple",
    features: [
      "2 Page Business Website",
      "Mobile Responsive",
      "1st month free hosting",
      "Lead Form",
      "Domain Setup",
      "WhatsApp Integration",
      "Basic SEO",
    ],
    bestFor: [
      "Small businesses",
      "Local shops",
      "Freelancers",
      "Service providers",
      "Event organizers",
    ],
  },
  {
    name: "Growth Plan",
    price: "₹24,999",
    billing: "One-time",
    monthlyHosting: "₹1,499/month",
    color: "purple",
    features: [
      "7 Page Business Website",
      "Blog CMS",
      "Lead Form + Email Integration",
      "Technical SEO",
      "45 Days Free Hosting",
      "15 days support",
      "Google Map Embed",
    ],
    bestFor: [
      "Clinics",
      "Startups",
      "E-commerce",
      "Online stores",
      "Educational institutions",
      "Restaurants",
      "Real estate",
    ],
  },
  {
    name: "Custom Software/Systems Plan",
    price: "₹X",
    billing: "One-time + Monthly",
    monthlyHosting: "₹4,999/month",

    color: "purple",
    features: [
      "Everything in Growth +",
      "SEO Starter Pack",
      "Payment Gateway, Google Sheet sync",
      "90 Days Free Hosting",
      "Admin panel & Analytics Dashboard",

      "Social Media Link Buttons",
      "1 Monthly Update",
    ],
  },
];

const PricingSection = () => {
  return (
    <div id="pricing" className="min-h-screen overflow-x-clip relative bg-gradient-to-t mt-20 from-[#833DFA] via-black to-black text-white py-20 px-4">
      {/* Header */}
       <div className="absolute -top-[800px] right-0 h-full w-80   rotate-60  bg-gradient-to-bl from-[#833DFA] to-transparent blur-3xl"></div>
 <div className="absolute -top-96 h-full w-80 left-0  -rotate-60  bg-gradient-to-bl from-[#833DFA] to-transparent blur-3xl"></div>

      <div className="text-center mb-10">
        <p className="text-5xl font-semibold mb-4">Pricing</p>
        <p className="text-gray-300 max-w-xl mx-auto">
          Choose the plan that suits your business best.
        </p>
      </div>
      

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div key={index} className="relative group">
            {/* Glow Background */}
            <div
              className={`absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-80 transition duration-00 z-0
              ${
                plan.color === "purple"
                  ? "bg-purple-500/40"
                  : plan.color === "purple"
                  ? "bg-purple-500/40"
                  : "bg-purple-500/40"
              }`}
            ></div>

            {/* Card */}
            <div className="relative hover:bg-[#111111]  backdrop-blur-2xl  rounded-2xl p-6 z-10">
              <h3 className="text-xl font-medium mb-1">{plan.name}</h3>
              <p className="text-gray-400 text-sm m">Starting at</p>
              <p className="text-3xl font-semibold mb-1">{plan.price}</p>
              {/* <p className="text-gray-400 text-base ">

             
                
                
                {plan.billing}</p> */}

              <p className="text-gray-400  mb-4">
                <span className="text-gray-400 text-sm">Monthly Hosting:</span>{" "}
                {plan.monthlyHosting}
              </p>

              <div className="relative w-full h-[2px] mb-8 ">
                <div className="absolute inset-0 mx-auto w-[100%] h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-70 blur-sm"></div>
                <div className="absolute inset-0 mx-auto w-[100%] h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              </div>

              <ul className="space-y-3 text-sm mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-purple-400">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-2 rounded-full text-sm font-semibold transition-all duration-300 b order main-p-bg hover:border-violet-500">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add-on Note */}
      <div className="mt-10 text-center z-20 relative text-gray-300 text-sm">
        <span className="text-white  ">We charge a small hosting fee to keep your website live, fast, secure, and stress-free. <br />So you can focus on your business, not tech headaches.
</span> {" "}
         ✅
      </div>

 
      <Addons />
    </div>
  );
};

export default PricingSection;
