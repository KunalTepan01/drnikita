"use client";
import Image from "next/image";
import React from "react";


const OrthodonticUsSection = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-10 gap-8 bg-white">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src="/images/orthodontic1.jpeg"
                    alt="18.5 French Prostate Surgery Diagram"
                    className="rounded-xl shadow-lg w-full max-w-md"
                />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                    Orthodontic Services
                </h2>
                <p className="text-gray-700 mb-4">
                    Orthodontic services are specialized dental treatments focused on correcting the alignment of teeth and jaws. These services aim to improve both the function and appearance of the teeth, creating a healthier bite and a more attractive smile.

                </p>
                {/* <p className="text-gray-700 mb-4">
          <strong>Dr. Nikita Agrawal</strong> is the only doctor in Ajmer who offers this advanced treatment.
        </p> */}

                <ul className="text-gray-800 space-y-2">
                    <li className="flex items-start">
                        <span className="text-green-600 text-xl mr-2">✔</span>
                        Braces (metal or ceramic)
                    </li>
                    <li className="flex items-start">
                        <span className="text-green-600 text-xl mr-2">✔</span>
                        Clear aligners (e.g., Invisalign)
                    </li>
                

                </ul>
            </div>
        </div>
    );
};

export default OrthodonticUsSection;
