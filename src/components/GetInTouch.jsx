import React, { useState } from "react";
import ModelForm from "@/components/ModelForm";
import { FaTimes } from "react-icons/fa";

const GetInTouch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gradient-to-tr from-[#833DFA] 500 rounded-[30px] w-full max-w-7xl mx-auto my-10 relative overflow-hidden text-white p-10 flex flex-col md:flex-row justify-between items-center">
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center px-4 animate-fade-in-fast">
          <div className="relative bg-black max-w-4xl w-full rounded-2xl overflow-auto shadow-lg border border-white/10">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white text-2xl z-50"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
            <ModelForm />
          </div>
        </div>
      )}
      {/* Left Content */}
      <div className="z-10 max-w-md">
        <h1 className="text-5xl font-semibold mb-4">Let’s Get In Touch.</h1>
        <p className="mb-6 text-sm text-white/80">
          Your laboratory instruments should serve you, not the other way
          around. We’re happy to help you.
        </p>
        <div className="flex gap-4">
          <button             onClick={handleOpenModal}
 className="bg-black hover:main-p-bg hover:scale-105 transition-all ease-in-out capitalize text-white rounded-full px-6 py-3 font-semibold flex items-center gap-2">
            Contact Us 
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
