"use client";

import React from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion

const DentalCareSection = () => {
  // Variants for container to stagger children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time delay between each child animation
      },
    },
  };

  // Variants for individual items (slide up and fade in)
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

  // Variants for the image (e.g., slide in from right and fade in)
  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        // delay: 0.4 // Optional: if you want text to animate first
      },
    },
  };

  // Variants for the contact card (e.g., scale up and fade in)
  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "circOut", // A slightly bouncier ease
        // delay: 0.6 // Optional: if you want image to animate first
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-16 overflow-hidden"> {/* Added overflow-hidden to parent if children slide from outside */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Left Content */}
        <motion.div
          className="w-full lg:w-1/2 max-w-xl"
          variants={containerVariants} // Apply container variants for staggering
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger when 10% is in view
        >
          <motion.h3
            variants={itemVariants} // Apply item variants
            className="text-teal-500 text-xl font-medium mb-4"
          >
            Why Choose Us
          </motion.h3>
          
          <motion.h1
            variants={itemVariants} // Apply item variants
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair "
          >
            Leading the Way in<br />
            Advanced Dental Care
          </motion.h1>
          
          <motion.p
            variants={itemVariants} // Apply item variants
            className="text-gray-600 mb-8"
          >
            At our dental practice, we are committed to providing exceptional dental care using the latest technology and techniques. Our team of experienced professionals ensures that every patient receives personalized treatment in a comfortable and welcoming environment.
          </motion.p>
          
          {/* Feature Items - Staggered within the left content's stagger */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <div className="p-2 bg-teal-500 rounded-lg flex-shrink-0 flex items-center justify-center">
                <Image 
                  src="/images/teeth.png" 
                  alt="Teeth Icon" 
                  width={40} 
                  height={40} 
                  className="w-10 h-10" // This className will likely determine the displayed size
                />
              </div>
              <div>
                <h3 className="text-xl text-black font-bold mb-2">Comprehensive Dental Services</h3>
                <p className="text-gray-600">
                  From routine check-ups to advanced cosmetic and restorative treatments, we offer a wide range of dental services to meet all your oral health needs.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <div className="p-2 bg-teal-500 rounded-lg flex-shrink-0 flex items-center justify-center">
                <Image 
                  src="/images/stethoscope-icon.png" 
                  alt="Stethoscope Icon" 
                  width={50} // Original prop
                  height={50} // Original prop
                  className="w-10 h-10" // This className will likely determine the displayed size
                />
              </div>
              <div>
                <h3 className="text-xl text-black font-bold mb-2">State-of-the-Art Technology</h3>
                <p className="text-gray-600">
                  We utilize cutting-edge dental technology to ensure precise diagnoses and effective treatments, providing you with the best possible care.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <div className="bg-teal-500 rounded-lg flex-shrink-0 flex items-center justify-center p-1"> {/* Added padding for consistency if needed */}
                <Image 
                  src="/images/doctor.png"  
                  alt="Doctor Icon" 
                  width={56} // Adjusted to match className more closely if that's the intent
                  height={56} // Adjusted
                  className="w-14 h-14" // This is 56px x 56px
                />
              </div>
              <div>
                <h3 className="text-xl text-black font-bold mb-2">Expert Dental Professionals</h3>
                <p className="text-gray-600">
                  Our team of highly skilled and compassionate dentists is dedicated to helping you achieve a healthy, beautiful smile with personalized care.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Right Content - Image and Contact */}
        <div className="w-full lg:w-1/2 max-w-xl relative">
          <motion.div
            className="relative h-96 lg:h-[500px] mx-auto"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of image is in view
          >
            <Image 
              src="/images/whychooseus.jpg"
              alt="Dental professional with child patient" 
              fill
              className="object-cover rounded-lg"
              priority
            />
            
            {/* Contact Card - Positioned differently for mobile vs desktop */}
            <motion.div
              className="absolute lg:-bottom-16 lg:left-[-40px] hidden lg:block bg-teal-500 text-white p-8 rounded-lg w-64"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible" // This card will animate when it (or its trigger point) comes into view
              viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of card is in view, or adjust
            >
              <div className="flex justify-center mb-4">
                <div className="bg-white p-4 rounded-full">
                  <Phone className="w-8 h-8 text-teal-500" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-3">
                Have Any Questions?
              </h3>
              
              <p className="text-xl font-bold text-center">
                +91 82097 88869
              </p>
            </motion.div>
          </motion.div>
          
          {/* Mobile Contact Card - Below image on mobile only */}
          <motion.div
            className="lg:hidden bg-teal-500 text-white p-8 rounded-lg w-full mt-8 mx-auto max-w-xs"
            variants={cardVariants} // Re-use cardVariants
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="flex justify-center mb-4">
              <div className="bg-white p-4 rounded-full">
                <Phone className="w-8 h-8 text-teal-500" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-3">
              Have Any Questions?
            </h3>
            
            <p className="text-xl font-bold text-center">
              +91 82097 88869
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DentalCareSection;

// "use client";

// import React from 'react';
// import Image from 'next/image';
// import { Phone } from 'lucide-react';

// const DentalCareSection = () => {
//   return (
//     <div className="container mx-auto px-4 py-16">
//       <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
//         {/* Left Content */}
//         <div className="w-full lg:w-1/2 max-w-xl">
//           <h3 className="text-teal-500 text-xl font-medium mb-4">Why Choose Us</h3>
          
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair ">
//             Leading the Way in<br />
//             Advanced Dental Care
//           </h1>
          
//           <p className="text-gray-600 mb-8">
//             At our dental practice, we are committed to providing exceptional dental care using the latest technology and techniques. Our team of experienced professionals ensures that every patient receives personalized treatment in a comfortable and welcoming environment.
//           </p>
          
//           {/* Feature Items */}
//           <div className="space-y-6">
//             <div className="flex items-start gap-4">
//               <div className="p-2 bg-teal-500 rounded-lg flex-shrink-0 flex items-center justify-center">
//                 {/* Teeth Icon */}
//                 <Image 
//                   src="/images/teeth.png" 
//                   alt="Teeth Icon" 
//                   width={40} 
//                   height={40} 
//                   className="w-10 h-10"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-xl text-black font-bold mb-2">Comprehensive Dental Services</h3>
//                 <p className="text-gray-600">
//                   From routine check-ups to advanced cosmetic and restorative treatments, we offer a wide range of dental services to meet all your oral health needs.
//                 </p>
//               </div>
//             </div>
            
//             <div className="flex items-start gap-4">
//               <div className="p-2 bg-teal-500 rounded-lg flex-shrink-0 flex items-center justify-center">
//                 {/* Stethoscope Icon */}
//                 <Image 
//                   src="/images/stethoscope-icon.png" 
//                   alt="Stethoscope Icon" 
//                   width={50} 
//                   height={50} 
//                   className="w-10 h-10"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-xl text-black font-bold mb-2">State-of-the-Art Technology</h3>
//                 <p className="text-gray-600">
//                   We utilize cutting-edge dental technology to ensure precise diagnoses and effective treatments, providing you with the best possible care.
//                 </p>
//               </div>
//             </div>
            
//             <div className="flex items-start gap-4">
//               <div className=" bg-teal-500 rounded-lg flex-shrink-0 flex items-center justify-center">
//                 {/* Doctor Icon */}
//                 <Image 
//                   src="/images/doctor.png"  
//                   alt="Doctor Icon" 
//                   width={100} 
//                   height={100} 
//                   className="w-14 h-14"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-xl text-black font-bold mb-2">Expert Dental Professionals</h3>
//                 <p className="text-gray-600">
//                   Our team of highly skilled and compassionate dentists is dedicated to helping you achieve a healthy, beautiful smile with personalized care.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Right Content - Image and Contact */}
//         <div className="w-full lg:w-1/2 max-w-xl relative">
//           <div className="relative h-96 lg:h-[500px] mx-auto">
//             <Image 
//               src="/images/whychooseus.jpg"
//               alt="Dental professional with child patient" 
//               fill
//               className="object-cover rounded-lg"
//               priority
//             />
            
//             {/* Contact Card - Positioned differently for mobile vs desktop */}
//             <div className="absolute lg:-bottom-16 lg:left-[-40px] hidden lg:block bg-teal-500 text-white p-8 rounded-lg w-64">
//               <div className="flex justify-center mb-4">
//                 <div className="bg-white p-4 rounded-full">
//                   <Phone className="w-8 h-8 text-teal-500" />
//                 </div>
//               </div>
              
//               <h3 className="text-2xl font-bold text-center mb-3">
//                 Have Any Questions?
//               </h3>
              
//               <p className="text-xl font-bold text-center">
//                 +91 82097 88869
//               </p>
//             </div>
//           </div>
          
//           {/* Mobile Contact Card - Below image on mobile only */}
//           <div className="lg:hidden bg-teal-500 text-white p-8 rounded-lg w-full mt-8 mx-auto max-w-xs">
//             <div className="flex justify-center mb-4">
//               <div className="bg-white p-4 rounded-full">
//                 <Phone className="w-8 h-8 text-teal-500" />
//               </div>
//             </div>
            
//             <h3 className="text-2xl font-bold text-center mb-3">
//               Have Any Questions?
//             </h3>
            
//             <p className="text-xl font-bold text-center">
//               +91 82097 88869
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DentalCareSection;