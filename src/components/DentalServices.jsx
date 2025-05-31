"use client";

import { useState, useEffect, useRef, useCallback } from 'react'; // Added useCallback
import { motion } from 'framer-motion'; // Import motion

// Animation Variants
const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {}, // No initial opacity/transform needed for container itself if children handle it
  visible: {
    transition: {
      staggerChildren: staggerChildren || 0.2,
      delayChildren: delayChildren || 0,
    },
  },
});

const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeInRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const zoomIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};


const DentalServices = () => {
  // State for counter values
  const [yearsCount, setYearsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [teamCount, setTeamCount] = useState(0);
  const [awardsCount, setAwardsCount] = useState(0);
  
  // State to trigger counter start
  const [hasCountersStarted, setHasCountersStarted] = useState(false);

  // Effect to run counters when hasCountersStarted becomes true
  useEffect(() => {
    let yearsInterval, clientsInterval, teamInterval, awardsInterval;

    if (hasCountersStarted) {
      yearsInterval = setInterval(() => {
        setYearsCount(prev => {
          if (prev < 10) return prev + 1;
          clearInterval(yearsInterval);
          return 10;
        });
      }, 200);
      
      clientsInterval = setInterval(() => {
        setClientsCount(prev => {
          // Adjusted increment for smoother animation towards 99
          if (prev < 99) return prev + 1; // Increment by 1
          clearInterval(clientsInterval);
          return 99;
        });
      }, 20); // Faster interval for smoother count to 99
      
      teamInterval = setInterval(() => {
        setTeamCount(prev => {
          if (prev < 20) return prev + 1;
          clearInterval(teamInterval);
          return 20;
        });
      }, 100);
      
      awardsInterval = setInterval(() => {
        setAwardsCount(prev => {
          if (prev < 10) return prev + 1;
          clearInterval(awardsInterval);
          return 10;
        });
      }, 200);
    }
    
    // Cleanup intervals when component unmounts or hasCountersStarted changes
    return () => {
      clearInterval(yearsInterval);
      clearInterval(clientsInterval);
      clearInterval(teamInterval);
      clearInterval(awardsInterval);
    };
  }, [hasCountersStarted]); // Re-run effect if hasCountersStarted changes

  const services = [
    // Your services array...
    {
      title: "General Dentistry",
      iconPath: "/images/teeth.png",
      description: "We bring the right people together to challenge established thinking"
    },
    {
      title: "Dental Surgery",
      iconPath: "/images/dental-surgery-icon.png",
      description: "We bring the right people together to challenge established thinking"
    },
    {
      title: "Implants",
      iconPath: "/images/implants-icon.png",
      description: "We bring the right people together to challenge established thinking"
    },
    {
      title: "Teeth Braces",
      iconPath: "/images/braces-icon.png",
      description: "We bring the right people together to challenge established thinking"
    },
    {
      title: "Prosthesis",
      iconPath: "/images/prosthesis-icon.png",
      description: "We bring the right people together to challenge established thinking"
    },
    {
      title: "Whitening",
      iconPath: "/images/whitening-icon.png",
      description: "We bring the right people together to challenge established thinking"
    }
  ];

  return (
    // Added overflow-x-hidden to prevent horizontal scrollbars during animations
    <div className="min-h-screen bg-gray-50 flex flex-col items-center overflow-x-hidden">
      {/* Hero Section */}
      <motion.div 
        className="bg-gradient-to-b from-white to-gray-50 py-8 md:py-16 text-center w-full px-4"
        variants={staggerContainer(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1 
          variants={fadeInUp}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-playfair"
        >
          A Perfect Smile Guaranteed
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="text-gray-600 max-w-3xl mx-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur, enim bibendum volutpat dictum.
        </motion.p>
      </motion.div>

      {/* Services Grid - Mobile First Layout */}
      <motion.div 
        className="w-full block md:hidden px-4 py-8"
        variants={staggerContainer(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm"
            >
              <div className="bg-teal-500 p-3 rounded-lg text-white flex-shrink-0">
                <img src={service.iconPath} alt={service.title} className="w-9 h-9" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Services Grid - Desktop Layout */}
      <div className="max-w-6xl mx-auto w-full hidden md:block py-10 md:py-16"> {/* Added padding */}
        <motion.div 
          className="grid grid-cols-3 gap-8 items-center"
          variants={staggerContainer(0.3, 0.2)} // Stagger children, slight delay for the whole group
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left Services */}
          <motion.div 
            className="space-y-16"
            variants={staggerContainer(0.2)} // Stagger items within this column
          >
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInLeft} // Slide in from left
                className="flex items-center space-x-0 justify-end"
              >
                <div className="mr-4">
                  <h3 className="text-xl font-semibold text-gray-800 text-right">{service.title}</h3>
                  <p className="text-gray-600 text-sm text-right max-w-xs">{service.description}</p>
                </div>
                <div className="bg-teal-500 p-3 rounded-lg text-white flex-shrink-0">
                  <img src={service.iconPath} alt={service.title} className="w-9 h-9" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Center Image - Desktop only */}
          <motion.div 
            className="flex justify-center pb-0 mb-0"
            variants={zoomIn} // Zoom in effect
          >
            <img src="/images/dentist.png" alt="Dentist" className="w-full h-full object-cover" />
          </motion.div>

          {/* Right Services */}
          <motion.div 
            className="space-y-16"
            variants={staggerContainer(0.2)} // Stagger items within this column
          >
            {services.slice(3).map((service, index) => (
              <motion.div
                key={index + 3}
                variants={fadeInRight} // Slide in from right
                className="flex items-center space-x-4"
              >
                <div className="bg-teal-500 p-3 rounded-lg text-white flex-shrink-0">
                  <img src={service.iconPath} alt={service.title} className="w-9 h-9" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 text-sm max-w-xs">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Dentist Image for Mobile - Repositioned below services, above stats */}
      <motion.div 
        className="w-full md:hidden flex justify-center px-4 py-8" // Added py-8 for spacing
        variants={zoomIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <img src="/images/dentist.png" alt="Dentist" className="w-3/4 max-w-xs object-contain" />
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="w-full bg-teal-500 text-white py-8 md:py-12 mt-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onViewportEnter={() => {
          if (!hasCountersStarted) {
            setHasCountersStarted(true);
          }
        }}
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of section is visible
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            {/* Each stat can also have a subtle animation if desired, but counter already animates */}
            <div className="flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 md:mb-2">{yearsCount}+</h2>
              <p className="text-teal-100 text-sm md:text-base">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 md:mb-2">{clientsCount}%</h2>
              <p className="text-teal-100 text-sm md:text-base">Happy Client</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 md:mb-2">{teamCount}+</h2>
              <p className="text-teal-100 text-sm md:text-base">Professional Team</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 md:mb-2">{awardsCount}+</h2>
              <p className="text-teal-100 text-sm md:text-base">Award Winning</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DentalServices;