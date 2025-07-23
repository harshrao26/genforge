import React from 'react';

const GetInTouch = () => {
  return (
    <div className="bg-gradient-to-tr from-[#833DFA] 500 rounded-[30px] w-full max-w-7xl mx-auto my-10 relative overflow-hidden text-white p-10 flex flex-col md:flex-row justify-between items-center">
      
      {/* Left Content */}
      <div className="z-10 max-w-md">
        <h1 className="text-5xl font-semibold mb-4">Let’s Get In Touch.</h1>
        <p className="mb-6 text-sm text-white/80">
          Your laboratory instruments should serve you, not the other way around. We’re happy to help you.
        </p>
        <div className="flex gap-4">
          <button className="bg-black capitalize text-white rounded-full px-6 py-3 font-semibold flex items-center gap-2">
            Book a discovery call
           </button>
          <button className="bg-black capitalize text-white rounded-full px-6 py-3 font-semibold flex items-center gap-2">
            Test Your Samples
           </button>
        </div>
      </div>

      {/* Right Gradient Circles */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2">
        <div className="absolute right-[-100px] top-1/2 transform -translate-y-1/2">
          <div className="relative w-[300px] h-[300px] scale-150">
            <div className="absolute inset-0 rounded-full bg-[] main-p-bg hover:scale-150 transition-all ease-in-out duration-300 opacity-10"></div>
            <div className="absolute inset-6 rounded-full bg-[] main-p-bg hover:scale-150 transition-all ease-in-out duration-300 opacity-20"></div>
            <div className="absolute inset-12 rounded-full bg-[] main-p-bg hover:scale-150 transition-all ease-in-out duration-300 opacity-30"></div>
            <div className="absolute inset-18 rounded-full bg-[] main-p-bg hover:scale-150 transition-all ease-in-out duration-300 opacity-40"></div>
            <div className="absolute inset-25 rounded-full bg-[] main-p-bg hover:scale-150 transition-all ease-in-out duration-300 opacity-60"></div>
            <div className="absolute inset-30 rounded-full bg-[] main-p-bg hover:scale-150 transition-all ease-in-out duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
