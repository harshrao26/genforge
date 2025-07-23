import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
 });
import React from "react";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      {/* <Spline scene="https://prod.spline.design/S2MUYNx5ZbqSYDFc/scene.splinecode" className="absolute inset-0 z-0" /> */}
      
    </main>
  );
}
