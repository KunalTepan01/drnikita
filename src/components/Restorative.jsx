"use client";
import Image from "next/image";
import React from "react";


const RestorativeUsSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-10 gap-8 bg-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/images/service3.jpeg"
          alt="18.5 French Prostate Surgery Diagram"
          className="rounded-xl shadow-lg w-full max-w-md"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
          Restorative Dentistry
        </h2>
        <p className="text-gray-700 mb-4">
         Restorative dentistry is the branch of dentistry focused on diagnosing, preventing, and treating oral diseases and restoring the function and appearance of damaged or missing teeth. Its primary goal is to bring back the natural look, feel, and function of your teeth, allowing for proper chewing, speaking, and overall oral health.


        </p>
        {/* <p className="text-gray-700 mb-4">
          <strong>Dr. Nikita Agrawal</strong> is the only doctor in Ajmer who offers this advanced treatment.
        </p> */}

        <ul className="text-gray-800 space-y-2">
          <li className="flex items-start">
            <span className="text-green-600 text-xl mr-2">✔</span>
            Dental crowns and bridges
          </li>
          <li className="flex items-start">
            <span className="text-green-600 text-xl mr-2">✔</span>
            Dentures (partial and full)
          </li>
          <li className="flex items-start">
            <span className="text-green-600 text-xl mr-2">✔</span>
            Dental implants
          </li>
          <li className="flex items-start">
            <span className="text-green-600 text-xl mr-2">✔</span>
            Inlays and onlays
          </li>
    
        </ul>
      </div>
    </div>
  );
};

export default RestorativeUsSection;
