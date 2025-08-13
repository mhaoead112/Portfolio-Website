import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start("visible");

      // Years Counter
      let yearsStart = 0;
      const yearsTarget = 4; // Your years coding
      const yearsInterval = setInterval(() => {
        yearsStart++;
        setYears(yearsStart);
        if (yearsStart >= yearsTarget) clearInterval(yearsInterval);
      }, 300);

      // Projects Counter
      let projStart = 0;
      const projTarget = 12; // Replace with your project count
      const projInterval = setInterval(() => {
        projStart++;
        setProjects(projStart);
        if (projStart >= projTarget) clearInterval(projInterval);
      }, 100);
    }
  }, [inView, controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="bg-white py-20 px-6 lg:px-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUp}
        className="max-w-5xl mx-auto"
      >
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>

        {/* Description */}
        <p className="text-gray-700 mb-10 leading-relaxed">
          I create web solutions that blend sleek design with functional
          development. With experience in React, Node.js, and UI tools like
          Photoshop and Figma, I deliver complete projects from concept to
          deployment.
        </p>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          <motion.div variants={fadeUp} className="bg-gray-50 p-6 rounded-xl shadow">
            <p className="text-2xl font-bold text-black">{years}+</p>
            <p className="text-gray-600">Years Coding</p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-gray-50 p-6 rounded-xl shadow">
            <p className="text-2xl font-bold text-black">{projects}</p>
            <p className="text-gray-600">Completed Projects</p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-gray-50 p-6 rounded-xl shadow">
            <p className="text-sm font-bold text-black">
              MongoDb, Express.js, React.js, Node.js, Tailwind, Photoshop, Figma
            </p>
            <p className="text-gray-600">Tech Stack</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
