'use client';
import React from 'react';
import { RiDoubleQuotesL } from "react-icons/ri";

const testimonials = [
  {
    name: 'Vinay Yadav',
    company: 'Unigold Agro Biotech Pvt. Ltd',
    type: 'Fertilizer ecommerce website',
    quote:
      'GenForge Studio transformed our fertilizer business with a seamless ecommerce solution. The site is fast, reliable, and has helped us reach farmers across regions.',
  },
  {
    name: 'Prianshu Bhaduariya',
    company: 'Fila Fratello',
    type: 'Medicine manufacturing company',
    quote:
      'We needed a trustworthy digital presence for our pharmaceutical brand. The website GenForge built gave us credibility and easy client communication.',
  },
  {
    name: 'Henil Chaudhary',
    company: 'Spark n Stitch',
    type: 'E-commerce',
    quote:
      'Our e-commerce platform is sleek, modern, and user-friendly. It has significantly boosted our sales and brand identity.',
  },
  {
    name: 'Abid Khan',
    company: 'Advert Furos',
    type: 'Agency website',
    quote:
      'They crafted a stylish agency website that communicates our services perfectly. Excellent attention to detail.',
  },
  {
    name: 'Faisal Saif',
    company: 'Trygve Studio Pvt Ltd',
    type: 'Architect & interior designer website',
    quote:
      'As an architect, presentation is everything. GenForge designed a stunning portfolio site that reflects our vision and attracts the right clients.',
  },
];

function Card({ t }) {
  return (
    <div className="shrink-0 relative w-[320px] sm:w-[380px] md:w-[420px] rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-transform hover:-translate-y-0.5">
      <span className='  text-5xl text-[#ab7aff] to'>
        <RiDoubleQuotesL />

      </span>
      <p className="text-sm leading-6 text-gray-300">{t.quote}</p>
      <div className="mt-5">
        <div className="text-sm font-semibold text-white">{t.name}</div>
        <div className="text-xs text-gray-400">{t.company}</div>
        {/* <div className="text-[11px] text-gray-500">{t.type}</div> */}
      </div>
    </div>
  );
}

export default function TestimonialsMarquee() {
  const dup = [...testimonials, ...testimonials]; // duplicate for seamless loop

  return (
    <section className="relative w-full overflow-hidden bg-[#000000] py-12">
         <h2 className="text-5xl text-center text-white font-semibold mb-4">
      What Our Clients Say
    </h2>
    <p className="text-gray-300 max-w-xl mx-auto text-center mb-10">
      Stories of trust, collaboration, and success.
    </p>
      {/* subtle glow + edge fade (Dribbble vibe) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_15%_10%,rgba(131,61,250,0.10),transparent_50%),radial-gradient(50%_40%_at_85%_80%,rgba(236,72,153,0.08),transparent_45%)]" />
      <div className="pointer-events-none b ackdrop-blur-xs z-100 absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#823dfa] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#833DFA] to-transparent" />

      <div className="relative ">
        <div className="marquee group select-none">
          <div className="marquee__track">
            {/* pass 1 */}
            <div className="flex items-stretch gap-6 pr-6">
              {dup.slice(0, testimonials.length).map((t, i) => (
                <Card key={`a-${i}`} t={t} />
              ))}
            </div>
            {/* pass 2 (aria-hidden for a11y) */}
            <div className="flex items-stretch gap-6" aria-hidden="true">
              {dup.slice(testimonials.length).map((t, i) => (
                <Card key={`b-${i}`} t={t} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* marquee styles (scoped globally so Tailwind cfg not needed) */}
      <style jsx global>{`
        .marquee {
          overflow: hidden;
        }
        .marquee__track {
          display: flex;
          width: max-content;
          gap: 1.5rem;
          /* 200% width effect because we render two passes */
          animation: marquee var(--marquee-speed, 35s) linear infinite;
        }
        /* Pause on hover for nice UX (Dribbble style) */
        .marquee:hover .marquee__track {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee__track {
            animation-duration: 0.001ms;
            animation-iteration-count: 1;
          }
        }
      `}</style>
    </section>
  );
}