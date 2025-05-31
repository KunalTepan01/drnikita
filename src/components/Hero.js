"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  // Variants for container to stagger children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // 0.2s delay between each child animation
      },
    },
  };

  // Variants for individual text items (slide up and fade in)
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Image animation (already good, but making it scroll-triggered if needed)
  const imageVariants = {
    hidden: { y: 100, opacity: 0 }, // Or any initial state you prefer for scroll
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="bg-[#bcf7f1] py-12 px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center justify-between rounded-bl-[64px] rounded-br-[64px] min-h-[650px] md:min-h-[600px] relative overflow-hidden">
      {/* Left content area - wrapped in a motion.div for staggering */}
      <motion.div
        className="lg:max-w-[50%] z-10 mb-12 lg:mb-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view
      >
        <motion.h1
          variants={itemVariants} // Uses the itemVariants defined above
          className="text-4xl font-playfair md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
        >
          Keep your smile clean & shine
        </motion.h1>
        <motion.p
          variants={itemVariants} // Uses the itemVariants
          className="text-gray-700 max-w-lg mb-10"
        >
          Dentica provides comprehensive dental care services for the whole family. Our experienced team uses the latest technology to deliver high-quality.
        </motion.p>
        <motion.button
          variants={itemVariants} // Uses the itemVariants
          // You can also add whileHover effects if you like
          // whileHover={{ scale: 1.05 }}
          // whileTap={{ scale: 0.95 }}
          className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold shadow-sm hover:shadow-md transition-all duration-300"
        >
          BOOK AN APPOINTMENT
        </motion.button>
      </motion.div>

      {/* Right image area */}
      <motion.div
        className="w-full lg:w-[45%] h-64 md:h-96 lg:h-[500px] flex items-center justify-center absolute bottom-0 right-0"
        // Option 1: Keep your existing on-load animation (good for hero)
        // initial={{ y: 100, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ duration: 1, ease: "easeOut" }}

        // Option 2: Make the image animation scroll-triggered
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of image is in view
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }} // Optional delay if text animates first
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/hero.avif"
            alt="Dental care products and clear aligners"
            fill
            className="object-contain object-bottom"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          />
        </div>
      </motion.div>
    </section>
  );
}