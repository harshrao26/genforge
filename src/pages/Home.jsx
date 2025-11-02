"use client";

import React, { useRef } from "react";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Steps from "@/components/Steps";
import { CardCarousel } from "@/components/ui/card-carousel";
import { TextScroll } from "@/components/ui/text-scroll";
import { TextScrollF } from "@/components/ui/text-scroll-f";
import { MarqueeDemo } from "@/components/Test.jsx";
import ClientMarquee from "@/components/ClientMarquee";
import GetInTouch from "@/components/GetInTouch";
import PricingSection from "@/components/PricingSection";
import Projects from "@/components/Projects";
import AboutSection from "@/components/AboutSection";
import CallToAction from "@/components/CallToAction";
import ContactForm from "@/components/ContactForm";
import Test from "@/components/Test";
import FaqSection from "@/components/FaqSection";
import HeroProjects from "@/components/HeroProjects";

import logo from "@/assets/logo.png";

import WhyBusinessOwners from "@/components/WhyBusinessOwners";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";

const Home = () => {
  const images = [{ src: logo, alt: "Image 1" }];

  const pricingRef = useRef(null);

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black ">
      <Hero onViewPricingClick={scrollToPricing} />
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
      {/* <PricingSection ref={pricingRef} /> */}
      {/* <Projects /> */}
      <AboutSection />
      <HeroProjects />
      <TestimonialsMarquee speed="28s" />
      <ContactForm />

      {/* <CallToAction /> */}
      <FaqSection />
      {/* <Test /> */}
    </div>
  );
};

export default Home;
