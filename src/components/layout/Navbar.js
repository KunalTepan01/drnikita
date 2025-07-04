"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Make sure this is imported
import { Menu, X, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Top Bar - Hidden on Mobile */}
      <div className="hidden md:block bg-[#2EC4B6] text-white py-3">
        {/* ... (top bar content remains the same) ... */}
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
            {/* Left Section */}
            <div className="flex space-x-8 items-center">
              <div className="flex items-center">
                <Phone size={18} className="mr-2" />
                <div>
                  <span className="font-medium">Call us now</span>
                  <p className="text-sm">+91 82097 88869</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <div>
                  <span className="font-medium">B-455 PANCHSHEEL</span>
                  <p className="text-sm">B BLOCK, AJMER</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <div>
                  <span className="font-medium">Monday - Saturday</span>
                  <p className="text-sm">09:00 AM - 06:00 PM</p>
                </div>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Youtube size={20} />
              </Link>
            </div>
          </div>
      </div>
      
      {/* Main Navbar */}
      <div className="bg-white shadow-md py-0">
        <div className="container mx-auto px-1 ml-1  md:px-6 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center"> {/* Use flex for alignment if needed */}
              <Image
                src="/images/final logo.png" // <<--- YOUR LOGO IMAGE PATH
                alt="Dr. Nikita Sharma Logo"
                width={140} // <<--- ADJUST WIDTH AS NEEDED
                height={40} // <<--- ADJUST HEIGHT AS NEEDED
                priority // Optional: if logo is critical for LCP
              />
              {/* You can remove the text or keep it next to the logo if desired */}
              {/* <span className="text-2xl font-bold uppercase text-gray-800 ml-2">Dr. Nikita Sharma</span> */}
            </Link>
          </motion.div>
          
          {/* Desktop Menu */}
          {/* ... (desktop menu content remains the same) ... */}
          <div className="hidden md:flex items-center space-x-8">
              <motion.div className="flex items-center space-x-8"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 }}
              >
                <Link href="/about" className="text-gray-700 font-medium hover:text-[#2EC4B6] transition-colors">
                  ABOUT US
                </Link>
                <Link href="/dentists" className="text-gray-700 font-medium hover:text-[#2EC4B6] transition-colors">
                  BLOGS
                </Link>
                <Link href="/services" className="text-gray-700 font-medium hover:text-[#2EC4B6] transition-colors">
                  SERVICES
                </Link>
                <Link href="/contact" className="text-gray-700 font-medium hover:text-[#2EC4B6] transition-colors">
                  CONTACT US
                </Link>
                <Link href="/faq" className="text-gray-700 font-medium hover:text-[#2EC4B6] transition-colors">
                  FAQ
                </Link>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href="/appointment" className="bg-[#2EC4B6] text-white px-6 py-2 ml-0 mr--20 rounded-full font-medium hover:bg-opacity-90 transition-colors shadow-md">
                    MAKE AN APPOINTMENT
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          
          {/* Mobile Menu Button */}
          {/* ... (mobile menu button content remains the same) ... */}
          <motion.button 
              className="md:hidden text-gray-800 p-1 rounded-md focus:outline-none"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
            >
              <Menu size={26} />
            </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          >
            {/* Menu Content */}
            <motion.div 
              className="fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-xl overflow-y-auto"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Close Button & Mobile Menu Logo */}
                <div className="flex justify-between items-center mb-10">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link href="/" className="flex items-center" onClick={toggleMenu}> {/* Added onClick to close menu */}
                      <Image
                        src="/images/logo.png" // <<--- YOUR LOGO IMAGE PATH
                        alt="Dr. Nikita Sharma Logo"
                        width={120} // <<--- ADJUST WIDTH FOR MOBILE MENU
                        height={32} // <<--- ADJUST HEIGHT FOR MOBILE MENU
                      />
                       {/* <span className="text-xl font-bold uppercase text-gray-800 ml-2">Dr. Nikita Sharma</span> */}
                    </Link>
                  </motion.div>
                  <motion.button 
                    onClick={toggleMenu}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-800 p-1 rounded-md hover:bg-gray-100"
                  >
                    <X size={24} />
                  </motion.button>
                </div>
                
                {/* Mobile Menu Links */}
                {/* ... (mobile menu links content remains the same) ... */}
                <div className="flex flex-col">
                    <motion.div
                      className="flex flex-col space-y-6"
                      initial="closed"
                      animate="open"
                      variants={{
                        open: {
                          transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                        },
                        closed: {
                          transition: { staggerChildren: 0.05, staggerDirection: -1 }
                        }
                      }}
                    >
                      {[
                        { href: "/about", label: "ABOUT US" },
                        { href: "/dentists", label: "OUR DENTISTS" },
                        { href: "/services", label: "SERVICES" },
                        { href: "/contact", label: "CONTACT US" },
                        { href: "/faq", label: "FAQ" }
                      ].map((item, index) => (
                        <motion.div 
                          key={index}
                          variants={{
                            open: { opacity: 1, y: 0 },
                            closed: { opacity: 0, y: 20 }
                          }}
                        >
                          <Link 
                            href={item.href} 
                            className="text-gray-700 font-medium hover:text-[#2EC4B6] transition-colors py-3 border-b border-gray-100 block"
                            onClick={toggleMenu}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                      
                      <motion.div
                        variants={{
                          open: { opacity: 1, y: 0 },
                          closed: { opacity: 0, y: 20 }
                        }}
                        className="mt-4"
                      >
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                          <Link 
                            href="/appointment" 
                            className="bg-[#2EC4B6] text-white px-6 py-3 rounded-full font-medium text-center block shadow-md hover:shadow-lg transition-all"
                            onClick={toggleMenu}
                          >
                            MAKE AN APPOINTMENT
                          </Link>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>
                
                {/* Contact Info in Mobile Menu */}
                {/* ... (contact info content remains the same) ... */}
                <motion.div 
                    className="mt-12 space-y-6 text-gray-700 border-t border-gray-100 pt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="flex items-center">
                      <div className="bg-[#2EC4B6] bg-opacity-10 p-2 rounded-full mr-3">
                        <Phone size={18} className="text-[#2EC4B6]" />
                      </div>
                      <div>
                        <span className="font-medium">Call Center 1108</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-[#2EC4B6] bg-opacity-10 p-2 rounded-full mr-3">
                        <MapPin size={18} className="text-[#2EC4B6]" />
                      </div>
                      <div>
                        <span className="font-medium">B-405 Panchsheel</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-[#2EC4B6] bg-opacity-10 p-2 rounded-full mr-3">
                        <Clock size={18} className="text-[#2EC4B6]" />
                      </div>
                      <div>
                        <span className="font-medium">Monday - Saturday</span>
                        <p className="text-sm">09:00 AM - 06:00 PM</p>
                      </div>
                    </div>
                  </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>  
    </>
  );
}

// "use client";

  // import { useState } from "react";
  // import Link from "next/link";
  // import { Menu, X, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
  // import { motion, AnimatePresence } from "framer-motion";

  // export default function Navbar() {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggleMenu = () => {
  //     setIsOpen(!isOpen);
  //   };

  //   return (
  //     <>
  //       {/* Top Bar - Hidden on Mobile */}
  //       <div className="hidden md:block bg-[#2EC4B6] text-white py-3">
  //         <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
  //           {/* Left Section */}
  //           <div className="flex space-x-8 items-center">
  //             <div className="flex items-center">
  //               <Phone size={18} className="mr-2" />
  //               <div>
  //                 <span className="font-medium">Call us now</span>
  //                 <p className="text-sm">+91 82097 88869</p>
  //               </div>
  //             </div>
              
  //             <div className="flex items-center">
  //               <MapPin size={18} className="mr-2" />
  //               <div>
  //                 <span className="font-medium">B-455 PANCHSHEEL</span>
  //                 <p className="text-sm">B BLOCK, AJMER</p>
  //               </div>
  //             </div>
              
  //             <div className="flex items-center">
  //               <Clock size={18} className="mr-2" />
  //               <div>
  //                 <span className="font-medium">Monday - Saturday</span>
  //                 <p className="text-sm">09:00 AM - 06:00 PM</p>
  //               </div>
  //             </div>
  //           </div>
            
  //           {/* Social Icons */}
  //           <div className="flex space-x-4">
  //             <Link href="#" className="hover:opacity-80 transition-opacity">
  //               <Facebook size={20} />
  //             </Link>
  //             <Link href="#" className="hover:opacity-80 transition-opacity">
  //               <Twitter size={20} />
  //             </Link>
  //             <Link href="#" className="hover:opacity-80 transition-opacity">
  //               <Instagram size={20} />
  //             </Link>
  //             <Link href="#" className="hover:opacity-80 transition-opacity">
  //               <Youtube size={20} />
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
        
  //       {/* Main Navbar */}
  //       <div className="bg-white shadow-md py-4">
  //         <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
  //           {/* Logo */}
  //           <motion.div
  //             initial={{ opacity: 0 }}
  //             animate={{ opacity: 1 }}
  //             transition={{ duration: 0.5 }}
  //           >
  //             <Link href="/" className="text-2xl font-bold uppercase text-gray-800">
  //               Dr. Nikita Sharma
  //             </Link>
  //           </motion.div>
            
  //           {/* Desktop Menu */}
  //           <div className="hidden md:flex items-center space-x-8">
  //             <motion.div className="flex items-center space-x-8"
  //               initial={{ opacity: 0, y: -10 }}
  //               animate={{ opacity: 1, y: 0 }}
  //               transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 }}
  //             >
  //               <Link href="/about" className="text-gray-700 font-medium hover:text-[#2EC4B6] transition-colors">
  //                 ABOUT US
  //               </Link>
  //               <Link href="/dentists" className="text-gray-700 font-medium hover:text-[#2EC4B6] transition-colors">
  //                 OUR DENTISTS
  //               </Link>
  //               <Link href="/services" className="text-gray-700 font-medium hover:text-[#2EC4B6] transition-colors">
  //                 SERVICES
  //               </Link>
  //               <Link href="/contact" className="text-gray-700 font-medium hover:text-[#2EC4B6] transition-colors">
  //                 CONTACT US
  //               </Link>
  //               <Link href="/faq" className="text-gray-700 font-medium hover:text-[#2EC4B6] transition-colors">
  //                 FAQ
  //               </Link>
  //               <motion.div
  //                 whileHover={{ scale: 1.05 }}
  //                 transition={{ type: "spring", stiffness: 400, damping: 10 }}
  //               >
  //                 <Link href="/appointment" className="bg-[#2EC4B6] text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-colors shadow-md">
  //                   MAKE AN APPOINTMENT
  //                 </Link>
  //               </motion.div>
  //             </motion.div>
  //           </div>
            
  //           {/* Mobile Menu Button */}
  //           <motion.button 
  //             className="md:hidden text-gray-800 p-1 rounded-md focus:outline-none"
  //             onClick={toggleMenu}
  //             whileTap={{ scale: 0.9 }}
  //           >
  //             <Menu size={26} />
  //           </motion.button>
  //         </div>
  //       </div>
        
  //       {/* Mobile Menu Overlay */}
  //       <AnimatePresence>
  //         {isOpen && (
  //           <motion.div 
  //             className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
  //             initial={{ opacity: 0 }}
  //             animate={{ opacity: 1 }}
  //             exit={{ opacity: 0 }}
  //             onClick={toggleMenu}
  //           >
  //             {/* Menu Content */}
  //             <motion.div 
  //               className="fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-xl overflow-y-auto"
  //               initial={{ x: "-100%" }}
  //               animate={{ x: 0 }}
  //               exit={{ x: "-100%" }}
  //               transition={{ type: "spring", stiffness: 300, damping: 30 }}
  //               onClick={(e) => e.stopPropagation()}
  //             >
  //               <div className="p-6">
  //                 {/* Close Button */}
  //                 <div className="flex justify-between items-center mb-10">
  //                   <motion.div
  //                     initial={{ opacity: 0 }}
  //                     animate={{ opacity: 1 }}
  //                     transition={{ delay: 0.2 }}
  //                   >
  //                     <Link href="/" className="text-2xl font-bold uppercase text-gray-800">
  //                     Dr. Nikita Sharma
  //                     </Link>
  //                   </motion.div>
  //                   <motion.button 
  //                     onClick={toggleMenu}
  //                     whileTap={{ scale: 0.9 }}
  //                     className="text-gray-800 p-1 rounded-md hover:bg-gray-100"
  //                   >
  //                     <X size={24} />
  //                   </motion.button>
  //                 </div>
                  
  //                 {/* Mobile Menu Links */}
  //                 <div className="flex flex-col">
  //                   <motion.div
  //                     className="flex flex-col space-y-6"
  //                     initial="closed"
  //                     animate="open"
  //                     variants={{
  //                       open: {
  //                         transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  //                       },
  //                       closed: {
  //                         transition: { staggerChildren: 0.05, staggerDirection: -1 }
  //                       }
  //                     }}
  //                   >
  //                     {[
  //                       { href: "/about", label: "ABOUT US" },
  //                       { href: "/dentists", label: "OUR DENTISTS" },
  //                       { href: "/services", label: "SERVICES" },
  //                       { href: "/contact", label: "CONTACT US" },
  //                       { href: "/faq", label: "FAQ" }
  //                     ].map((item, index) => (
  //                       <motion.div 
  //                         key={index}
  //                         variants={{
  //                           open: { opacity: 1, y: 0 },
  //                           closed: { opacity: 0, y: 20 }
  //                         }}
  //                       >
  //                         <Link 
  //                           href={item.href} 
  //                           className="text-gray-700 font-medium hover:text-[#2EC4B6] transition-colors py-3 border-b border-gray-100 block"
  //                           onClick={toggleMenu}
  //                         >
  //                           {item.label}
  //                         </Link>
  //                       </motion.div>
  //                     ))}
                      
  //                     <motion.div
  //                       variants={{
  //                         open: { opacity: 1, y: 0 },
  //                         closed: { opacity: 0, y: 20 }
  //                       }}
  //                       className="mt-4"
  //                     >
  //                       <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
  //                         <Link 
  //                           href="/appointment" 
  //                           className="bg-[#2EC4B6] text-white px-6 py-3 rounded-full font-medium text-center block shadow-md hover:shadow-lg transition-all"
  //                           onClick={toggleMenu}
  //                         >
  //                           MAKE AN APPOINTMENT
  //                         </Link>
  //                       </motion.div>
  //                     </motion.div>
  //                   </motion.div>
  //                 </div>
                  
  //                 {/* Contact Info in Mobile Menu */}
  //                 <motion.div 
  //                   className="mt-12 space-y-6 text-gray-700 border-t border-gray-100 pt-6"
  //                   initial={{ opacity: 0 }}
  //                   animate={{ opacity: 1 }}
  //                   transition={{ delay: 0.6 }}
  //                 >
  //                   <div className="flex items-center">
  //                     <div className="bg-[#2EC4B6] bg-opacity-10 p-2 rounded-full mr-3">
  //                       <Phone size={18} className="text-[#2EC4B6]" />
  //                     </div>
  //                     <div>
  //                       <span className="font-medium">Call Center 1108</span>
  //                     </div>
  //                   </div>
                    
  //                   <div className="flex items-center">
  //                     <div className="bg-[#2EC4B6] bg-opacity-10 p-2 rounded-full mr-3">
  //                       <MapPin size={18} className="text-[#2EC4B6]" />
  //                     </div>
  //                     <div>
  //                       <span className="font-medium">B-405 Panchsheel</span>
  //                     </div>
  //                   </div>
                    
  //                   <div className="flex items-center">
  //                     <div className="bg-[#2EC4B6] bg-opacity-10 p-2 rounded-full mr-3">
  //                       <Clock size={18} className="text-[#2EC4B6]" />
  //                     </div>
  //                     <div>
  //                       <span className="font-medium">Monday - Saturday</span>
  //                       <p className="text-sm">09:00 AM - 06:00 PM</p>
  //                     </div>
  //                   </div>
  //                 </motion.div>
  //               </div>
  //             </motion.div>
  //           </motion.div>
  //         )}
  //       </AnimatePresence>  
  //     </>
  //   );
  // }