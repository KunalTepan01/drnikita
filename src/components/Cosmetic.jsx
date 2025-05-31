"use client";
import Image from "next/image";
import React from "react";


const CosmeticUsSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-10 gap-8 bg-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/images/service2.jpeg"
          alt="18.5 French Prostate Surgery Diagram"
          className="rounded-xl shadow-lg w-full max-w-md"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
          Cosmetic Dentistry
        </h2>
        <p className="text-gray-700 mb-4">
          Cosmetic dentistry is a specialized branch of dentistry focused on improving the appearance of a person's teeth, gums, and smile. While traditional dentistry emphasizes oral hygiene and the prevention, diagnosis, and treatment of oral diseases, cosmetic dentistry primarily enhances the aesthetics of the smile.


        </p>
        {/* <p className="text-gray-700 mb-4">
          <strong>Dr. Nikita Agrawal</strong> is the only doctor in Ajmer who offers this advanced treatment.
        </p> */}

        <ul className="text-gray-800 space-y-2">
          <li className="flex items-start">
            <span className="text-green-600 text-xl mr-2">✔</span>
            Teeth whitening
          </li>
          <li className="flex items-start">
            <span className="text-green-600 text-xl mr-2">✔</span>
            Dental veneers
          </li>
          <li className="flex items-start">
            <span className="text-green-600 text-xl mr-2">✔</span>
            Smile makeover
          </li>
          <li className="flex items-start">
            <span className="text-green-600 text-xl mr-2">✔</span>
            Tooth bonding
          </li>
    
        </ul>
      </div>
    </div>
  );
};

export default CosmeticUsSection;
