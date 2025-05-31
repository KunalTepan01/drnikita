"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
// Removed motion from here as the parent slider will handle section animation

const ServiceCard = ({ clinic }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-5 flex flex-col space-y-4 h-full transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="relative w-full h-56"> {/* Use relative for fill to work */}
        <Image
          src={clinic.imageSrc}
          alt={clinic.name}
          fill // Use fill for responsive images within a sized container
          className="object-cover rounded-2xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 39vw" // Add sizes prop
        />
      </div>
      <div className="flex flex-col space-y-3 flex-grow">
        <h3 className="text-2xl font-bold text-black">{clinic.name}</h3>
        <p className="text-sm text-gray-600 flex-grow">{clinic.discription}</p>
        <Link href={`/services/${clinic.slug}`} className="mt-auto block"> {/* Added block for button to take full width if needed */}
          <button className="w-full mt-4 px-4 py-2 bg-[#007B8A] text-white rounded-xl hover:bg-[#005f69] transition duration-300">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;