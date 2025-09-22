import React from "react";
import {
  FaMapMarkerAlt,
  FaTools,        
  FaHeadset,      
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black text-center text-white py-10 relative">
      {/* Top Links */}
      <div className="flex justify-center gap-12 mb-8">
        {["Colors", "Highlights", "Gallery", "Reviews", "FAQ's"].map((link, i) => (
          <span
            key={i}
            className={`uppercase text-sm font-semibold cursor-pointer hover:text-orange-500 ${
              link === "Gallery" ? "text-orange-500 border-b-2 border-orange-500 pb-1" : "text-white"
            }`}
          >
            {link}
          </span>
        ))}
      </div>

      {/* Middle Section: Icons + Labels */}
      <div className="flex justify-center gap-20 mb-8">
        {/* Find a Store */}
        <div className="flex flex-col items-center">
          <FaMapMarkerAlt className="text-6xl text-gray-400 mb-2" />
          <span className="text-orange-500 font-bold uppercase text-sm">Find a Store</span>
        </div>
        
        {/* Book a Service */}
        <div className="flex flex-col items-center">
          <FaTools className="text-6xl text-gray-400 mb-2" />
          <span className="text-orange-500 font-bold uppercase text-sm">Book a Service</span>
        </div>

        {/* Customer Support */}
        <div className="flex flex-col items-center">
          <FaHeadset className="text-6xl text-gray-400 mb-2" />
          <span className="text-orange-500 font-bold uppercase text-sm">Customer Support</span>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-600 mx-auto max-w-[70%]" />

      {/* Bottom Right Logo Container */}
    
      <div className="absolute bottom-6 right-6">
        <img
          src="/Rectangle 21.svg" 
          alt="Royal Enfield Logo"
        />
      </div>
    </footer>
  );
}