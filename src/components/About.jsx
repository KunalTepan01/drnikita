"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
    Clock,
    Stethoscope,
    Wallet,
    Heart,
    Thermometer,
    MonitorSmartphone,
} from "lucide-react";

const AboutUsSection = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-center px-4 py-12">
                <h1 className="text-4xl font-bold text-black mb-2">About Us</h1>
                <div className="flex items-center space-x-2 text-gray-600 text-base mb-6">
                    <span className="text-black">Home</span>
                    <span>/</span>
                    <span className="text-gray-500">About Us</span>
                </div>
            </div>

            {/* Section 1: Image + Heading */}
            <div className="bg-[#caf4ef] px-6 py-16 rounded-tl-[120px] rounded-tr-[30px] rounded-bl-[120px] rounded-br-[120px] max-w-7xl mx-auto mb-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Text Content */}
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-playfair text-gray-900 mb-6">
                            We are experienced<br />
                            and internationally<br />
                            certified dentist
                        </h1>
                        <p className="text-gray-700 text-lg leading-relaxed font-poppins">
                            This team includes dentists, dental hygienists, dental assistants, and administrative staff who work together to deliver personalized care and ensure that patients receive high-quality treatment in a safe and comfortable environment.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="rounded-3xl overflow-hidden">
                            <Image
                                src="/images/experience.avif"
                                alt="Team of Dentists"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover rounded-[20px]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2: Feature Cards */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-gray-700">
                    {/* Feature 1 */}
                    {/* <div className="flex items-start gap-4">
                        <Clock color="#00BCD4" size={180} />
                        <div>
                            <h3 className="font-bold text-xl md:text-2xl text-black">24 Hours Ready</h3>
                            <p className="text-base md:text-lg leading-relaxed mt-2 text-gray-500">
                                Emergency dental care services are available around the clock, including weekends and holidays, to address urgent dental issues such as severe pain or infection.
                            </p>
                        </div>
                    </div> */}

                    <div className="flex items-start gap-4">
                        <div className="mt-1 md:mt-0">
                            <Clock color="#2EC4B6" size={60} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl md:text-2xl text-black">24 Hours Ready</h3>
                            <p className="text-base md:text-lg leading-relaxed mt-2 text-gray-500">
                                Emergency dental care services are available around the clock, including weekends and holidays, to address urgent dental issues such as severe pain or infection.
                            </p>
                        </div>
                    </div>



                    {/* Feature 2 */}
                    <div className="flex items-start gap-4">
                        <div className="mt-1 md:mt-2">
                            <Stethoscope color="#2EC4B6" size={60} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl md:text-2xl text-black">Accurate Diagnostics</h3>
                            <p className="text-base md:text-lg leading-relaxed mt-2 text-gray-500">
                                The dental team's ability to correctly identify and diagnose dental problems using advanced diagnostic tools and techniques to develop an effective treatment plan for the patient's needs.
                            </p>
                        </div>
                    </div>


                    {/* Feature 3 */}
                    <div className="flex items-start gap-4">
                        <div className="mt-1 md:mt-2">
                            <Wallet color="#2EC4B6" size={60} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl md:text-2xl text-black">Pay In Installment</h3>
                            <p className="text-base md:text-lg leading-relaxed mt-2 text-gray-500">
                                Clinic allows patients to break down the cost of their treatment into smaller payments over time, making dental care more accessible and manageable.
                            </p>
                        </div>
                    </div>

                    {/* Feature 4 */}

                    <div className="flex items-start gap-4">
                        <div className="mt-1 md:mt-2">
                            <Heart color="#2EC4B6" size={60} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl md:text-2xl text-black">Work from Heart</h3>
                            <p className="text-base md:text-lg leading-relaxed mt-2 text-gray-500">
                                Approaching the profession with empathy and compassion, prioritizing the patient's comfort and satisfaction for a positive dental experience.
                            </p>
                        </div>
                    </div>

                    {/* Feature 5 */}

                    <div className="flex items-start gap-4">
                        <div className="mt-1 md:mt-2">
                            <Thermometer color="#2EC4B6" size={60} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl md:text-2xl text-black">Regular Checkup</h3>
                            <p className="text-base md:text-lg leading-relaxed mt-2 text-gray-500">
                                Comprehensive examination of teeth, gums, and mouth, crucial for maintaining oral health and preventing dental problems.
                            </p>
                        </div>
                    </div>

                    {/* Feature 6 */}

                    <div className="flex items-start gap-4">
                        <div className="mt-1 md:mt-2">
                            <MonitorSmartphone color="#2EC4B6" size={60} />
                        </div>
                        <div>

                            <h3 className="font-bold text-xl md:text-2xl text-black">Online Booking</h3>

                            <p className="text-base md:text-lg leading-relaxed mt-2 text-gray-500">
                                Allows patients to schedule appointments online with flexibility and convenience, streamlining the process for the clinic.
                            </p>


                        </div>
                    </div>
                </div>
            </div>
            {/* Section 3: Stats Section */}
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left Image */}
                <div className="w-full lg:w-1/2 relative">
                    <Image
                        src="/images/1111.avif" // Replace with your actual image path
                        alt="Smiling Patient"
                        width={300}
                        height={200}
                        // className="rounded-[40px] object-cover w-full h-auto"
                        className="rounded-[40px] object-cover w-[500px] h-auto"
                    />
                </div>

                {/* Right Stats */}
                <div className="w-full lg:w-1/2 grid grid-cols-2 gap-8 text-center">
                    <div>
                        <svg
                            className="mx-auto mb-2"
                            width="100"
                            height="100"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#7B506F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 2C9.243 2 7 4.243 7 7c0 3.866 5 13 5 13s5-9.134 5-13c0-2.757-2.243-5-5-5z" />
                            <circle cx="12" cy="7" r="2" />
                        </svg>
                        <h3 className="text-3xl font-bold text-black">15</h3>
                        <p className="text-gray-600 text-sm mt-1">Dedicated Dentist</p>
                    </div>

                    <div>
                        <svg
                            className="mx-auto mb-2"
                            width="100"
                            height="100"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#7B506F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 7h18v13H3z" />
                            <path d="M8 7V4h8v3" />
                        </svg>
                        <h3 className="text-3xl font-bold text-black">125</h3>
                        <p className="text-gray-600 text-sm mt-1">Clinic Rooms</p>
                    </div>

                    <div>
                        <svg
                            className="mx-auto mb-2"
                            width="100"
                            height="100"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#7B506F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M10 14l2-2 2 2" />
                            <path d="M12 12v6" />
                            <circle cx="12" cy="6" r="4" />
                        </svg>
                        <h3 className="text-3xl font-bold text-black">548</h3>
                        <p className="text-gray-600 text-sm mt-1">Happy Clients</p>
                    </div>

                    <div>
                        <svg
                            className="mx-auto mb-2"
                            width="100"
                            height="100"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#7B506F"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M4 4h16v16H4z" />
                            <path d="M8 2v4" />
                            <path d="M16 2v4" />
                            <path d="M4 10h16" />
                        </svg>
                        <h3 className="text-3xl font-bold text-black">480</h3>
                        <p className="text-gray-600 text-sm mt-1">Online Appointment</p>
                    </div>
                </div>
            </div>

            {/* Section 4: Contact Cards */}
            <div className="bg-[#6f4a63] rounded-3xl py-10 px-4 lg:px-20 max-w-7xl mx-auto my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                    {/* Card 1 */}
                    <div className="bg-[#e3eaec] rounded-xl flex items-center gap-6 px-6 py-6">
                        <div className="bg-white rounded-full p-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
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
                            <p className="text-sm text-gray-500 font-poppins">EMERGENCY CALL</p>
                            <h3 className="text-xl font-bold text-black">331–870–6671</h3>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#e3eaec] rounded-xl flex items-center gap-6 px-6 py-6">
                        <div className="bg-white rounded-full p-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
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
                            <p className="text-sm text-gray-500 font-poppins">MAKE AN APPOINTMENT</p>
                            <h3 className="text-xl font-bold text-black">331–870–6672</h3>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#e3eaec] rounded-xl flex items-center gap-6 px-6 py-6">
                        <div className="bg-white rounded-full p-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
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
                            <p className="text-sm text-gray-500 font-poppins">SERVICE AREA</p>
                            <h3 className="text-xl font-bold text-black">331–870–6673</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 5: Our Expert Team */}
            <section className="py-16 bg-white text-center max-w-7xl mx-auto px-8">
                <h2 className="text-7xl font-playfair font-medium text-gray-900 mb-4">Our Expert Team</h2>
                <p className="text-gray-500 text-xl tracking-wide max-w-10xl mx-auto mb-12">
                    {/* className="text-gray-500 text-xl tracking-wide max-w-10xl mx-auto */}
                    Our experienced team at Dentica is dedicated to providing high-quality service and personalized care to each of our clients.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Team Member 1 */}
                    {/* <div className="bg-[#caf4ef] rounded-3xl p-16 flex flex-col items-center">
                        <img src="/images/expert1.avif" alt="Reza Mahendra" className="w-24 h-24 rounded-full mb-4" />
                        <h3 className="text-lg font-semibold text-black">Reza Mahendra</h3>
                        <p className="text-gray-600">Dentist</p>
                    </div> */}
                    <button
                        onClick={() => handleMemberClick('/team/reza-mahendra')}
                        className="bg-[#caf4ef] rounded-3xl p-16 flex flex-col items-center w-full text-left hover:opacity-90 transition-opacity duration-150 ease-in-out" // Added w-full and text-left for button styling
                    >
                        <img src="/images/expert1.avif" alt="Reza Mahendra" className="w-24 h-24 rounded-full mb-4 self-center" /> {/* Added self-center for img */}
                        <h3 className="text-lg font-semibold text-black">Reza Mahendra</h3>
                        <p className="text-gray-600">Dentist</p>
                    </button>

                    {/* Team Member 2 */}
                    <button
                        onClick={() => handleMemberClick('/team/Merliana-Sari')}
                        className="bg-[#caf4ef] rounded-3xl p-16 flex flex-col items-center w-full text-left hover:opacity-90 transition-opacity duration-150 ease-in-out" // Added w-full and text-left for button styling
                    >
                        <img src="/images/expert1.avif" alt="Merliana Sari" className="w-24 h-24 rounded-full mb-4 self-center" /> {/* Added self-center for img */}
                        <h3 className="text-lg font-semibold text-black">Merliana Sari</h3>
                        <p className="text-gray-600">Dentist</p>
                    </button>

                    {/* <div className="bg-[#caf4ef] rounded-3xl p-16 flex flex-col items-center">
                        <img src="/images/expert1.avif" alt="Merliana Sari" className="w-24 h-24 rounded-full mb-4" />
                        <h3 className="text-lg font-semibold text-black">Merliana Sari</h3>
                        <p className="text-gray-600">Dentist</p>
                    </div> */}

                    {/* Team Member 3 */}
                    <button
                        onClick={() => handleMemberClick('/team/Daniel-Thompson')}
                        className="bg-[#caf4ef] rounded-3xl p-16 flex flex-col items-center w-full text-left hover:opacity-90 transition-opacity duration-150 ease-in-out" // Added w-full and text-left for button styling
                    >
                        <img src="/images/expert1.avif" alt="Daniel Thompson" className="w-24 h-24 rounded-full mb-4 self-center" /> {/* Added self-center for img */}
                        <h3 className="text-lg font-semibold text-black">Daniel Thompson</h3>
                        <p className="text-gray-600">Dentist</p>
                    </button>

                    {/* <div className="bg-[#caf4ef] rounded-3xl p-16 flex flex-col items-center">
                        <img src="/images/expert1.avif" alt="Daniel Thompson" className="w-24 h-24 rounded-full mb-4" />
                        <h3 className="text-lg font-semibold text-black">Daniel Thompson</h3>
                        <p className="text-gray-600">Dentist</p>
                    </div> */}

                    {/* Team Member 4 */}
                    <button
                        onClick={() => handleMemberClick('/team/James-Brown')}
                        className="bg-[#caf4ef] rounded-3xl p-16 flex flex-col items-center w-full text-left hover:opacity-90 transition-opacity duration-150 ease-in-out" // Added w-full and text-left for button styling
                    >
                        <img src="/images/expert1.avif" alt="James Brown" className="w-24 h-24 rounded-full mb-4 self-center" /> {/* Added self-center for img */}
                        <h3 className="text-lg font-semibold text-black">James Brown</h3>
                        <p className="text-gray-600">Dentist</p>
                    </button>

                    {/* <div className="bg-[#caf4ef] rounded-3xl p-16 flex flex-col items-center">
                        <img src="/images/expert1.avif" alt="James Brown" className="w-24 h-24 rounded-full mb-4" />
                        <h3 className="text-lg font-semibold text-black">James Brown</h3>
                        <p className="text-gray-600">Dentist</p>
                    </div> */}
                </div>
            </section>

            {/* Section 6: General Info & Background */}


            <section className="py-20 bg-white px-6 md:px-20 max-w-screen-xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-7xl font-playfair font-medium text-gray-900 mb-4">
                        What They Say About Us
                    </h2>

                    <p className="text-gray-500 text-xl tracking-wide max-w-10xl mx-auto">
                        Our experienced team at Dentica is dedicated to providing high-quality service and personalized care to each of our clients.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    {/* Testimonial 1 */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm">
                        <p className="text-gray-500 text-4xl leading-relaxed mb-6">
                            Great experience at Dentica. Professional staff, modern equipment, and clean facilities. Highly recommend!
                        </p>
                        <div className="flex items-center gap-4">
                            <img src="/images/review1.avif" alt="Sarah Taylor" className="w-24 h-24 rounded-full object-cover" />
                            <div>
                                <p className="text-black font-semibold text-lg md:text-2xl">Sarah Taylor</p>
                                <p className="text-gray-400 text-sm">Startup Founder</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                        <p className="text-gray-500 text-4xl leading-relaxed mb-6">
                            Dentica provides top-notch care with knowledgeable dentists and friendly staff. Highly recommend!
                        </p>
                        <div className="flex items-center gap-4">
                            <img src="/images/review2.avif" alt="Matthew Thompson" className="w-24 h-24 rounded-full object-cover" />
                            <div>
                                <p className="text-black font-semibold text-lg md:text-2xl">Matthew Thompson</p>
                                <p className="text-gray-400 text-sm">Creative Director</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
};

export default AboutUsSection;

