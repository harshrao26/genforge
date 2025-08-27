"use client";

const PrivacyPolicy = () => {
  return (
    <div className="bg-black overflow-hidden w-[100vw] relativ">
       {/* <div className="absolute h-full w-90 bottom-0 animate-[pulse_5s_linear_infinite_] overflow-hidden  right-0 rotate-90  bg-gradient-to-bl from-[#833DFA] to-transparent blur-3xl"></div> */}
      {/* <div className="absolute h-full w-40 bottom-0 right-1/2 rotate-90  bg-gradient-to-bl from-[#833DFA] to-transparent blur-3xl"></div> */}
      {/* <div className="absolute h-full w-80 bottom-0 left-0 -top-20 -rotate-80   bg-gradient-to-bl from-[#833DFA] to-transparent blur-3xl"></div> */}
        <div>
        </div>
        <div className="max-w-7xl z-20  mx-auto px-6 py-20 text-gray-50 bg-black">
            {/* <TermsHero /> */}
      <h1 className="text-4xl font-semibold  text-center">Privacy Policy</h1>
      <div className="relative w-full h-[2px] my-10 ">
        <div className="absolute inset-0 mx-auto w-[100%] h-[1px] bg-gradient-to-r from-transparent via-gray-00 to-transparent opacity-70 blur-sm"></div>
        <div className="absolute inset-0 mx-auto w-[100%] h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>


      <p className="mb-6 ">
        This Privacy Policy describes how GenForge Studio ("we", "our", "us") collects, uses, and protects the personal information you provide when using our website and services.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-medium mai n-p mb-3">1. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><>Personal Information:</> Full name, email address, phone number, and billing details.</li>
          <li><>Business Information:</> Company name, industry, website content, and preferences.</li>
          <li><>Technical Data:</> IP address, browser type, device information, and pages visited.</li>
          <li><>Cookies & Analytics:</> We use cookies and third-party tools (like Google Analytics) to track usage patterns.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-medium mai n-p mb-3">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>To provide and improve our services, including website design and hosting.</li>
          <li>To communicate with you about projects, updates, promotions, or support.</li>
          <li>To personalize your experience based on your preferences.</li>
          <li>To comply with legal obligations and protect our rights.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-medium mai n-p mb-3">3. Data Sharing & Disclosure</h2>
        <p>
          We do not sell your personal information. We may share your data with trusted third-party partners only for the following reasons:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>To facilitate payment processing.</li>
          <li>To host and maintain your website.</li>
          <li>To provide customer support, analytics, and marketing tools.</li>
          <li>If required by law or to protect our legal rights.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-medium mai n-p mb-3">4. Cookies</h2>
        <p>
          Cookies are small text files stored on your device. We use cookies to enhance user experience, analyze traffic, and personalize content. You can control or disable cookies through your browser settings.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-medium mai n-p mb-3">5. Data Security</h2>
        <p>
          We implement security measures such as encryption, firewalls, and secure servers to protect your personal information. However, no digital system is 100% secure, and we cannot guarantee absolute protection.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-medium mai n-p mb-3">6. Data Retention</h2>
        <p>
          We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy or as required by law. You may request deletion of your data at any time.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-medium mai n-p mb-3">7. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Access the data we hold about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Withdraw consent or object to data processing</li>
          <li>Request data portability (where applicable)</li>
        </ul>
        <p className="mt-2">
          To exercise your rights, please contact us at:{" "}
          <a
            href="mailto:hello@genforgestudio.com"
            className="text-blue-600 underline"
          >
            hello@genforgestudio.com
          </a>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-medium mai n-p mb-3">8. Third-Party Services</h2>
        <p>
          Our website may contain links to third-party websites or use third-party tools (e.g., WhatsApp API, Google Maps). We are not responsible for the privacy practices or content of these external services.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-medium mai n-p mb-3">9. Children's Privacy</h2>
        <p>
          Our services are not intended for individuals under the age of 13. We do not knowingly collect data from children. If you believe we have inadvertently collected such data, please contact us for removal.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-medium mai n-p mb-3">10. Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date. Your continued use of our services after changes implies acceptance.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-medium mai n-p mb-3">11. Contact Us</h2>
        <p>
          For any questions or concerns regarding this Privacy Policy, you may contact us at:
        </p>
        <p className="mt-2">
          📧{" "}
          <a
            href="mailto:hello@genforgestudio.com"
            className="text-blue-600 underline"
          >
            hello@genforgestudio.com
          </a>
        </p>
      </section>
    </div>
    </div>
  );
};

export default PrivacyPolicy;



 
const TermsHero = () => {
  return (
    <section className=" text-white min-h-[250px] flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-2xl sm:text-3xl font-medium mb-2">
          Hello <span className="inline-block animate-waving-hand">👋</span>
        </h1>
        <p className="text-lg sm:text-xl font-normal max-w-xl mx-auto">
          Before you create an account, please read and accept our{" "}
          <span className="font-semibold underline">Terms & Conditions</span>
        </p>
      </div>
      

      {/* Inline waving animation */}
      <style jsx>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(14deg); }
          30% { transform: rotate(-8deg); }
          45% { transform: rotate(14deg); }
          60% { transform: rotate(-4deg); }
          75% { transform: rotate(10deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-waving-hand {
          display: inline-block;
          animation: wave 2s infinite;
          transform-origin: 70% 70%;
        }
      `}</style>
    </section>
  );
};

 