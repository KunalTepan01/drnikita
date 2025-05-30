"use client";

import React from "react";

const AboutUsSection = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-center px-4 py-12">
                <h1 className="text-5xl font-bold text-black mb-0">Blog</h1>
                <div className="flex items-center space-x-2 text-gray-600 text-base mb-6">
                    <span className="text-black">Home</span>
                    <span>/</span>
                    <span className="text-gray-500">Blog</span>
                </div>
            </div>

            {/* Section 2: Our Dentists */}
            <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-white max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 justify-items-center">
                    {[
                        {
                            name: "Reza Mahendra",
                            specialty: "Dentist",
                            image: "/images/expert1.avif",
                        },
                        {
                            name: "Merliana Sari",
                            specialty: "Dentist",
                            image: "/images/expert1.avif",
                        },
                        {
                            name: "Daniel Thompson",
                            specialty: "Dentist",
                            image: "/images/expert1.avif",
                        },
                        {
                            name: "James Brown",
                            specialty: "Dentist",
                            image: "/images/expert1.avif",
                        },
                        {
                            name: "David Anderson",
                            specialty: "Dentist",
                            image: "/images/expert1.avif",
                        },
                    ].map((doctor, index) => (
                        <div
                            key={index}
                            className="bg-[#caf4ef] rounded-3xl px-6 py-10 w-full max-w-xs sm:max-w-sm flex flex-col items-center text-center shadow-md"
                        >
                            <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover mb-6"
                            />
                            <h3 className="font-bold text-xl sm:text-2xl text-black">{doctor.name}</h3>
                            <p className="text-gray-600 text-base sm:text-lg">{doctor.specialty}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 4: Contact Cards */}
            {/* <div className="bg-[#6f4a63] rounded-3xl py-10 px-4 sm:px-6 md:px-10 lg:px-20 max-w-7xl mx-auto my-10"> */}
            <div className="bg-[#6f4a63] rounded-3xl py-8 px-5 sm:px-6 md:px-10 lg:px-20 max-w-7xl mx-5 sm:mx-auto my-12">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                    {[
                        {
                            title: "EMERGENCY CALL",
                            number: "331–870–6671",
                        },
                        {
                            title: "MAKE AN APPOINTMENT",
                            number: "331–870–6672",
                        },
                        {
                            title: "SERVICE AREA",
                            number: "331–870–6673",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#e3eaec] w-full rounded-xl flex items-center gap-4 sm:gap-6 px-4 sm:px-6 py-6"
                        >
                            <div className="bg-white rounded-full p-3 sm:p-4 shrink-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="26"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#00BCD4"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.07 8.63 19.79 19.79 0 0 1 6.08 2.18 2 2 0 0 1 9 3.24l2 2a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45l2 2a2 2 0 0 1 1.06 1.73z" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-gray-500 font-poppins">{item.title}</p>
                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-black">{item.number}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AboutUsSection;

