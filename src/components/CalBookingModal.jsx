"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

export default function CalBookingModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    (async () => {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-[#171717] rounded-lg shadow-lg overflow-hidden h-[60vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl text-gray-700 bg-white rounded-full hover:text-black z-10"
        >
          <IoClose />
        </button>
        {/* Cal Embed */}
        <Cal
          namespace="30min"
          calLink="genforge-studio/30min"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
        ;
      </div>
    </div>
  );
}
