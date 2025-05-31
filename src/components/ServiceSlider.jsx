"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ServiceCard from "./ServiceCard"; // Adjust path if necessary
import { motion } from "framer-motion";

// Swiper styles - Make sure these are correctly resolved
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Data from your ServiceUsSection
const clinicsData = [
  {
    name: "Orthodontic Services",
    slug: "orthodontic", // Updated slug
    imageSrc: "/images/Orthodontic.jpeg",
    discription: "Correcting misaligned teeth and jaws using braces, aligners, and other devices for a healthier, straighter smile."
  },
  {
    name: "General Dentistry",
    slug: "general", // Updated slug
    imageSrc: "/images/service1.jpeg",
    discription: "Routine dental care including cleanings, exams, fillings, and preventive treatments to keep your smile healthy and strong."
  },

  {
    name: "Cosmetic Dentistry",
    slug: "cosmetic", // Updated slug
    imageSrc: "/images/service2.jpeg",
    discription: "Enhancing the appearance of your smile through teeth whitening, veneers, bonding, and other aesthetic treatments."
  },
  {
    name: "Restorative Dentistry",
    slug: "restorative", // Updated slug
    imageSrc: "/images/service3.jpeg",
    discription: "Restoring damaged or missing teeth to improve function, appearance, and oral health using fillings, crowns, bridges, and implants."
  },
  {
    name: "Preventive Care",
    slug: "preventive", // Updated slug
    imageSrc: "/images/Preventive Care.jpeg",
    discription: "Routine checkups, cleanings, and early treatments to maintain oral health and prevent dental issues."
  },
  {
    name: "Gum & Periodontal Treatment",
    slug: "gum", // Updated slug
    imageSrc: "/images/Gum.jpeg",
    discription: "Deep cleaning (scaling and root planing), Gum infection treatment, Periodontal maintenance"
  }
];

// Animation variants for the entire slider section
const sliderSectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1, // Stagger title and paragraph if they are motion components
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ServiceSlider = () => {
  return (
    <motion.section
      className="py-12 md:py-20 bg-gray-50" // Added a light background for better visual separation
      variants={sliderSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }} // Trigger when 15% of the section is in view
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12 md:mb-16" variants={fadeInUp}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 font-playfair">
            Explore Our Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of dental services to meet all your oral health needs, delivered by our experienced and caring team.
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30} // Space between slides
          slidesPerView={1} // Default for mobile
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 4000, // Time in ms
            disableOnInteraction: false,
          }}
          breakpoints={{
            // when window width is >= 640px (sm)
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 1024px (lg)
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="pb-12" // Padding at the bottom for pagination dots
        >
          {clinicsData.map((clinic, index) => (
            <SwiperSlide key={index} className="h-auto"> {/* Ensure slide height adjusts */}
              <div className="p-1 h-full"> {/* Optional: small padding around the card within the slide */}
                <ServiceCard clinic={clinic} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default ServiceSlider;