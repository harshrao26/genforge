
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
 });
import React from 'react'
 


 
export default function SplineFooter() {
  return (
    <main>
      
       <Spline
        scene="https://prod.spline.design/r9iVnqxIrQYXXDlk/scene.splinecode" 
                className="absolute inset-0 z-0"

      />
    </main>
  );
}



 