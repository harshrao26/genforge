import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
  {
    question: 'How fast will my website be delivered?',
    answer: 'We offer 1-day delivery for most websites once content and design are finalized.',
  },
  {
    question: 'Is SEO included in all plans?',
    answer: 'Basic and Growth plans don’t include SEO, but the Business Plan comes with an SEO Starter Pack.',
  },
  {
    question: 'Do you offer custom domains and email?',
    answer: 'Yes! You can add a custom domain and email as optional add-ons.',
  },
  {
    question: 'Can I request updates after the website goes live?',
    answer: 'Yes, our Business Plan includes 1 free monthly update and support.',
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 relative">
     
      <h2 className="text-5xl font-medium main-p mb-18 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4 mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 mt-10">
            <button
              className="flex justify-between items-center w-full text-left py-4 group"
              onClick={() => toggleFaq(index)}
            >
              <span className="text-xl font-  text-gray-50 group-hover:text-[#833DFA] transition-all duration-300">
                {faq.question}
              </span>
              {activeIndex === index ? (
                <FiChevronUp className="text-xl text-gray-50" />
              ) : (
                <FiChevronDown className="text-xl text-gray-50" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-100 pb-4 pr-2">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
