"use client";
import Image from "next/image";
import React from "react";


const GeneralUsSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-10 gap-8 bg-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/images/service1.jpeg"
          alt="18.5 French Prostate Surgery Diagram"
          className="rounded-xl shadow-lg w-full max-w-md"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
          General Dentistry
        </h2>
        <p className="text-gray-700 mb-4">
          General dentistry is the branch of dentistry that focuses on the prevention, diagnosis, and treatment of a wide variety of conditions and diseases affecting the teeth, gums, and mouth. A general dentist is usually the primary dental care provider who manages your overall oral health.


        </p>
        {/* <p className="text-gray-700 mb-4">
          <strong>Dr. Nikita Agrawal</strong> is the only doctor in Ajmer who offers this advanced treatment.
        </p> */}

        <ul className="text-gray-800 space-y-2">
          <li className="flex items-start">
            <span className="text-green-600 text-xl mr-2">✔</span>
            Dental check-ups and consultations
          </li>
          <li className="flex items-start">
            <span className="text-green-600 text-xl mr-2">✔</span>
            Teeth cleaning (scaling and polishing)
          </li>
          <li className="flex items-start">
            <span className="text-green-600 text-xl mr-2">✔</span>
            Cavity fillings (tooth-colored restorations)
          </li>
          <li className="flex items-start">
            <span className="text-green-600 text-xl mr-2">✔</span>
            Tooth extractions
          </li>
          <li className="flex items-start">
            <span className="text-green-600 text-xl mr-2">✔</span>
            Root canal treatment (RCT)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GeneralUsSection;
