"use client";

import { useRouter } from "next/navigation";
import React from "react";

const TeamSection = () => {
    const router = useRouter();

    const handleMemberClick = (slug) => {
        router.push("/team/reza-mahendra"); // e.g., '/team/reza-mahendra'
    };

    return (
        <button
            onClick={() => handleMemberClick("/team/reza-mahendra")}
            className="bg-[#caf4ef] rounded-3xl p-16 flex flex-col items-center w-full text-left hover:opacity-90 transition-opacity duration-150 ease-in-out"
        >
            <img
                src="/images/expert1.avif"
                alt="Reza Mahendra"
                className="w-24 h-24 rounded-full mb-4 self-center"
            />
            <h3 className="text-lg font-semibold text-black">Reza Mahendra</h3>
            <p className="text-gray-600">Dentist</p>
        </button>
    );
};

export default TeamSection;
