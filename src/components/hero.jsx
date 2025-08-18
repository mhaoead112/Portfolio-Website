import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col font-sans relative">
      {/* Main grid: left text / right image */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen">
        {/* LEFT: text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="px-8 md:px-20 lg:px-32 py-12 flex flex-col justify-center h-[85vh]"
        >
          {/* Stats */}
          <div className="flex gap-12 text-gray-800 mb-8">
            <div>
              <span className="block text-4xl font-light">+12</span>
              <span className="text-gray-500 uppercase tracking-wider text-xs">Projects completed</span>
            </div>
            <div>
              <span className="block text-4xl font-light">+15</span>
              <span className="text-gray-500 uppercase tracking-wider text-xs">Certified Courses</span>
            </div>
          </div>

          {/* Hello */}
          <h1 className="text-[7.5rem] md:text-[9rem] leading-[0.88] font-extralight tracking-tight">
            Hello
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-gray-500 text-lg max-w-xl">
            — It's <span className="font-medium text-gray-800">Mohamed Hesham</span>, a web & UI/UX designer
          </p>
        </motion.div>

        {/* RIGHT: large hero image (absolute) */}
        <div className="relative w-full h-[85vh] overflow-hidden flex items-center justify-end">
          <motion.img
            src="https://i.ibb.co/9kX4g5V1/Male-Avatar.jpg"
            alt="Profile"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 will-change-transform"
            style={{
              height: "110%",                 // exceed container height slightly for crop
              minWidth: "62%",                // ensure big coverage of the right half
              objectFit: "cover",
              objectPosition: "8% 48%",      // <-- ADJUST THIS to center the face
              filter: "grayscale(100%) contrast(1.05) brightness(0.98)",
            }}
          />
        </div>
      </div>

      {/* Footer small indicators */}
      <div className="flex justify-between px-10 py-6 text-gray-400 text-sm">
        <span>2024</span>
        <Link to="portfolio" smooth={true} duration={500} className="hover:text-gray-500 hover:cursor-pointer">
          Scroll down ↓
        </Link>
      </div>
    </section>
  );
}
