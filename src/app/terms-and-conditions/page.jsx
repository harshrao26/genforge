"use client";

const TermsAndConditions = () => {
  return (
    <div className="bg-black relative overflow-hidden">
      <div className="absolute h-full w-40 bottom-0 animate-[pulse_5s_linear_infinite_]   right-0 rotate-60  bg-gradient-to-bl from-[#833DFA] to-transparent blur-3xl"></div>
      {/* <div className="absolute h-full w-40 bottom-0 right-1/2 rotate-90  bg-gradient-to-bl from-[#833DFA] to-transparent blur-3xl"></div> */}
      <div className="absolute h-full w-80 bottom-0 left-0 -top-80 -rotate-80   bg-gradient-to-bl from-[#833DFA] to-transparent blur-3xl"></div>
      <div className="max-w-7xl relative mx-auto px-6 py-20 text-gray-50 bg-b lack ">
        <h1 className="text-4xl font-semibold mb-8 text-center relative">
          Terms & Conditions
        </h1>

        <p className="mb-6">
          Welcome to GenForge Studio. These Terms & Conditions ("Terms")
          govern your use of our website, services, and tools. By using our
          platform, you agree to abide by these terms. If you do not agree,
          please refrain from using our services.
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">1. Services</h2>
          <p>
            GenForge Studio provides web design, hosting, marketing
            automation, and business growth solutions. These may be offered as
            one-time packages or recurring subscriptions depending on your
            selected plan.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">2. Account Creation</h2>
          <p>
            To access certain services, you may be required to create an
            account. You agree to provide accurate, current, and complete
            information and to keep your login credentials secure.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">3. Payments & Billing</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>One-time services must be paid upfront before delivery.</li>
            <li>
              Subscription-based plans are billed monthly or annually in
              advance.
            </li>
            <li>
              Failure to pay may result in suspension or termination of
              services.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">4. Refund Policy</h2>
          <p>
            We do not offer refunds on services that have been delivered or
            initiated. For subscriptions, you may cancel at any time to stop the
            next billing cycle, but we do not issue partial refunds.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            5. Intellectual Property
          </h2>
          <p>
            All content, templates, code, and branding assets provided by
            GenForge Studio remain our intellectual property unless
            explicitly stated otherwise. You are granted a non-exclusive license
            to use these materials for your business.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">6. User Conduct</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              You agree not to misuse our platform, engage in unlawful activity,
              or infringe on others' rights.
            </li>
            <li>
              We reserve the right to suspend accounts that violate our policies
              or applicable laws.
            </li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">7. Third-Party Tools</h2>
          <p>
            We may integrate with tools like Google Analytics, WhatsApp API,
            payment gateways, or social media. Use of these tools is subject to
            their respective terms and privacy policies.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            8. Limitation of Liability
          </h2>
          <p>
            We are not liable for any indirect, incidental, or consequential
            damages arising from the use or inability to use our services. Our
            total liability is limited to the fees you paid us in the previous 3
            months.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">9. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account for any
            reason, including violations of these Terms, non-payment, or abuse
            of service.
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">10. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. All changes will be
            effective immediately upon posting. Continued use of the services
            implies acceptance of the revised Terms.
          </p>
        </section>

        {/* Section 11 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">11. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of India. Any disputes shall be subject to the jurisdiction of
            the courts located in New Delhi, India.
          </p>
        </section>

        {/* Section 12 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">12. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a
              href="mailto:hello@genforgestudio.com"
              className="text-blue-600 underline"
            >
              hello@genforgestudio.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
