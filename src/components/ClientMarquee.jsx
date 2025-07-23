import React from "react";
import Image from "next/image";

import evz from "@/assets/clients/evz.png";
import fila from "@/assets/clients/fila.webp";
import groovy from "@/assets/clients/groovy.png";
import spark from "@/assets/clients/spark.webp";
import trygve from "@/assets/clients/trygve.png";
import unigold from "@/assets/clients/unigold.jpeg";
import zivora from "@/assets/clients/zivora.png";
import af from "@/assets/clients/af.png";
import image from "@/assets/clients/image.png";

import './clientMarquee.css'
 

const logos = [ evz, fila, groovy, spark, trygve, af,  zivora,];

export default function ClientMarquee() {
  return (
    <div className="marquee-container bg-black py-20">
        <div className="bg-gradient-to-r from-[#000000]   z-20 to-transparent md:w-[40rem] w-[5rem] h-full absolute" ></div>
        <div className="bg-gradient-to-l from-[#000] to right-0  z-20 to-transparent md:w-[40rem] w-[5rem] h-full absolute" ></div>
      <div className="marquee-track">
        {logos.concat(logos).map((img, index) => (
          <div className="marquee-item" key={index}>
            <Image src={img} alt={`client-${index}`} height={60} />
          </div>
        ))}
      </div>
    </div>
  );
}
