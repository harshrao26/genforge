"use client";

import React from "react";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Steps from "@/components/Steps";
import { CardCarousel } from "@/components/ui/card-carousel";
import { TextScroll } from "@/components/ui/text-scroll"
import { TextScrollF } from "@/components/ui/text-scroll-f"
import { MarqueeDemo } from '@/components/Test.jsx'
import ClientMarquee from "@/components/ClientMarquee"
import GetInTouch from "@/components/GetInTouch";
import PricingSection from "@/components/PricingSection";
import Projects from "@/components/Projects";
import AboutSection from "@/components/AboutSection";
import CallToAction from "@/components/CallToAction";
import ContactForm from "@/components/ContactForm";
import Test from "@/components/Test";
import FaqSection from "@/components/FaqSection";

import logo from '@/assets/logo.png'

import WhyBusinessOwners from "@/components/WhyBusinessOwners";

const Home = () => {
  const images = [
    { src: logo, alt: "Image 1" },
   
  ];

  return (
    <div className="bg-black ">
      <Hero />
      {/* <TextScroll
      className="font-display mt- 8 bg-[#833DFA] py-2 text-center text-4xl font-semibold tracking-tighter  text- dark:text-white md:text-7xl md:leading-[5rem]"
      text="BrandCraft Studios
  "
      default_velocity={5}
    /> */}
      <TextScrollF
      className="font-display ro mt- 8 bg-[#833DFA] py-2 text-center text-4xl font-semibold tracking-tighter  text- dark:text-white md:text-7xl md:leading-[5rem]"
      text="GenForge Studio
  "
      default_velocity={5}
    />


      <WhyBusinessOwners />

      {/* <CardCarousel
      className="bg-white"
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      /> */}

      <WhyChoose />
      <Steps />
      {/* <MarqueeDemo /> */}
      <ClientMarquee />
      <GetInTouch />
      <PricingSection />
      <Projects />
      <AboutSection />
      <ContactForm />


      {/* <CallToAction /> */}
      <FaqSection />
      {/* <Test /> */}

       
    </div>
  );
};

export default Home;
