"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const clinicsData = [
    {
        name: "Orthodontic Services",
        slug: "orthodontic",
        imageSrc: "/images/service1.jpeg",
        discription: "Correcting misaligned teeth and jaws using braces, aligners, and other devices for a healthier, straighter smile."
    },
    {
        name: "General Dentistry",
        slug: "general",
        imageSrc: "/images/service1.jpeg",
        discription: "Routine dental care including cleanings, exams, fillings, and preventive treatments to keep your smile healthy and strong."
    },
    
    {
        name: "Cosmetic Dentistry",
        slug: "cosmetic",
        imageSrc: "/images/service2.jpeg",
        discription: "Enhancing the appearance of your smile through teeth whitening, veneers, bonding, and other aesthetic treatments."
    },
    {
        name: "Restorative Dentistry",
        slug: "restorative",
        imageSrc: "/images/service3.jpeg",
        discription: "Restoring damaged or missing teeth to improve function, appearance, and oral health using fillings, crowns, bridges, and implants."
    },
    
    {
        name: "Preventive Care",
        slug: "preventive",
        imageSrc: "/images/Preventive Care.jpeg",
        discription: "Routine checkups, cleanings, and early treatments to maintain oral health and prevent dental issues."
    },
    {
        name: "Gum & Periodontal Treatment",
        slug: "gum",
        imageSrc: "/images/Gum.jpeg",
        discription: "Deep cleaning (scaling and root planing), Gum infection treatment, Periodontal maintenance"
    }
];

const ServiceUsSection = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-center px-4 py-12">
                <h1 className="text-5xl font-bold text-black mb-0">Our Service</h1>
                <div className="flex items-center space-x-2 text-gray-600 text-base mb-6">
                    <span className="text-black">Home</span>
                    <span>/</span>
                    <span className="text-gray-500">Our Service</span>
                </div>
            </div>

            <div className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {clinicsData.map((clinic, index) => (
                            <div key={index} className="bg-white rounded-3xl shadow-xl p-5 flex flex-col space-y-4 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                                <Image
                                    src={clinic.imageSrc}
                                    alt={clinic.name}
                                    width={400}
                                    height={300}
                                    className="w-full h-56 object-cover rounded-2xl"
                                />
                                <div className="flex flex-col space-y-3 flex-grow">
                                    <h3 className="text-2xl font-bold text-black">{clinic.name}</h3>
                                    <p className="text-sm text-gray-600">{clinic.discription}</p>
                                    <Link href={`/services/${clinic.slug}`}>
                                        <button className="mt-4 px-4 py-2 bg-[#007B8A] text-white rounded-xl hover:bg-[#005f69] transition duration-300">
                                            Read More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceUsSection;



// "use client";

// import React from "react";
// import Image from "next/image"; // Import next/image (currently unused, but kept if you plan to use it)

// // Data for clinic cards - define it outside if it's for a section within ServiceUsSection,
// // or inside if ServiceUsSection will directly map over it.
// // For now, let's assume you might want to add a "Visit Our Clinics" section to this page later.
// const clinicsData = [
//     {
//         name: "General Dentistry",
//         imageSrc: "/images/service1.jpeg", // IMPORTANT: Use unique images for each clinic
//         discription: "Routine dental care including cleanings, exams, fillings, and preventive treatments to keep your smile healthy and strong.",
//         // phone1: "4733378901 (Call Center)",
//         // phone2: "4733378902 (Customer Support)",
//         // email: "staff@dentica.id"
//     },
//     {
//         name: "Cosmetic Dentistry",
//         imageSrc: "/images/service2.jpeg", // IMPORTANT: Use unique images for each clinic
//         discription: "Enhancing the appearance of your smile through teeth whitening, veneers, bonding, and other aesthetic treatments.",
//         // phone1: "4733378901 (Call Center)",
//         // phone2: "4733378902 (Customer Support)",
//         // email: "staff@dentica.id"
//     },
//     {
//         name: "Restorative Dentistry",
//         imageSrc: "/images/service3.jpeg", // IMPORTANT: Use unique images for each clinic
//         discription: "Restoring damaged or missing teeth to improve function, appearance, and oral health using fillings, crowns, bridges, and implants.",
//         // phone1: "4733378901 (Call Center)",
//         // phone2: "4733378902 (Customer Support)",
//         // email: "staff@dentica.id"
//     },
//     {
//         name: "Orthodontic Services",
//         imageSrc: "/images/Orthodontic1.jpeg", // IMPORTANT: Use unique images for each clinic
//         discription: "Correcting misaligned teeth and jaws using braces, aligners, and other devices for a healthier, straighter smile.",
//         // phone1: "4733378901 (Call Center)",
//         // phone2: "4733378902 (Customer Support)",
//         // email: "staff@dentica.id"
//     },
//     {
//         name: "Preventive Care",
//         imageSrc: "/images/Preventive Care.jpeg", // IMPORTANT: Use unique images for each clinic
//         discription: "Routine checkups, cleanings, and early treatments to maintain oral health and prevent dental issues.",
//         // phone1: "4733378901 (Call Center)",
//         // phone2: "4733378902 (Customer Support)",
//         // email: "staff@dentica.id"
//     },
//     {
//         name: "Gum & Periodontal Treatment",
//         imageSrc: "/images/Gum.jpeg", // IMPORTANT: Use unique images for each clinic
//         discription: "Deep cleaning (scaling and root planing) ,Gum infection treatment ,Periodontal maintenance"
//         // phone1: "4733378901 (Call Center)",
//         // phone2: "4733378902 (Customer Support)",
//         // email: "staff@dentica.id"
//     }
// ];

// const ServiceUsSection = () => {
//     return (
//         <>
//             {/* Header Section for "Our Service" */}
//             <div className="flex flex-col items-center justify-center text-center px-4 py-12">
//                 <h1 className="text-5xl font-bold text-black mb-0">Our Service</h1>
//                 <div className="flex items-center space-x-2 text-gray-600 text-base mb-6">
//                     <span className="text-black">Home</span>
//                     <span>/</span>
//                     <span className="text-gray-500">Our Service</span>
//                 </div>
//             </div>

//             {/* Placeholder for where you might add actual service content 
//                 or the "Visit Our Clinics" section if it belongs here.
//                 Example of adding the "Visit Our Clinics" section:
//             */}

//             {/* "Visit Our Clinics" Section (Example Integration) */}
//             <div className="py-16 px-4 sm:px-6 lg:px-8">
//                 <div className="max-w-6xl mx-auto">
                    
                    
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
//                         {clinicsData.map((clinic, index) => (
//                             <div key={index} className="bg-white rounded-3xl shadow-xl p-5 flex flex-col space-y-4 transform hover:scale-105 transition-transform duration-300 ease-in-out">
//                                 <Image // Using Next.js Image component
//                                     src={clinic.imageSrc}
//                                     alt={clinic.name}
//                                     width={400} // Provide appropriate width for aspect ratio
//                                     height={300} // Provide appropriate height for aspect ratio
//                                     className="w-full h-56 object-cover rounded-2xl"
//                                 />
//                                 <div className="flex flex-col space-y-3 flex-grow">
//                                     <h3 className="text-2xl font-bold text-black">{clinic.name}</h3>
//                                     <div className="flex items-start space-x-3">
//                                         {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-[#2EC4B6] w-7 h-7 flex-shrink-0 mt-0.5">
//                                             <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
//                                         </svg> */}
//                                         <p className="text-sm text-gray-600">{clinic.discription}</p>
//                                     </div>
//                                     <div className="flex items-start space-x-3">
//                                         {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-[#2EC4B6] w-6 h-6 flex-shrink-0 mt-0.5">
//                                             <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
//                                         </svg> */}
//                                         <div className="text-sm text-gray-600">
//                                             <p>{clinic.phone1}</p>
//                                             <p>{clinic.phone2}</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-start space-x-3">
//                                         {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-[#2EC4B6] w-6 h-6 flex-shrink-0 mt-0.5">
//                                             <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
//                                         </svg> */}
//                                         <a href={`mailto:${clinic.email}`} className="text-sm text-[#007B8A] hover:text-[#005f69] hover:underline">
//                                             {clinic.email}
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>




//                 </div>
//             </div>

//         </>
//     );
// };

// export default ServiceUsSection;