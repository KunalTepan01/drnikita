"use client";
import Image from "next/image";
import React from "react";


const GumUsSection = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-10 gap-8 bg-white">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src="/images/gum.jpeg"
                    alt="18.5 French Prostate Surgery Diagram"
                    className="rounded-xl shadow-lg w-full max-w-md"
                />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                    Gum & Periodontal Treatment
                </h2>
                <p className="text-gray-700 mb-4">
                   Gum and periodontal treatment focuses on diagnosing, preventing, and treating diseases that affect the gums, bone, and supporting structures of the teeth. The term “periodontal” refers to the area “around the tooth,” which includes the gums, periodontal ligament, and jawbone.

                </p>
                {/* <p className="text-gray-700 mb-4">
          <strong>Dr. Nikita Agrawal</strong> is the only doctor in Ajmer who offers this advanced treatment.
        </p> */}

                <ul className="text-gray-800 space-y-2">
                    <li className="flex items-start">
                        <span className="text-green-600 text-xl mr-2">✔</span>
                       Deep cleaning (scaling and root planing)
                    </li>
                    <li className="flex items-start">
                        <span className="text-green-600 text-xl mr-2">✔</span>
                        Gum infection treatment
                    </li>
                     <li className="flex items-start">
                        <span className="text-green-600 text-xl mr-2">✔</span>
                       Periodontal maintenance
                    </li>
                     {/* <li className="flex items-start">
                        <span className="text-green-600 text-xl mr-2">✔</span>
                        Gum disease prevention
                    </li> */}

                </ul>
            </div>
        </div>
    );
};

export default GumUsSection;
