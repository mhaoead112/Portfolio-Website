import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaFigma,
   FaMobileAlt, FaProjectDiagram, FaSitemap
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  {
    category: "Web Development",
    items: [
      { name: "HTML", level: 95, icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", level: 90, icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", level: 85, icon: <FaJs className="text-yellow-500" /> },
      { name: "React", level: 85, icon: <FaReact className="text-blue-400" /> },
      { name: "Node.js", level: 80, icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express", level: 80, icon: <SiExpress className="text-gray-700" /> },
      { name: "MongoDB", level: 75, icon: <SiMongodb className="text-green-500" /> },
    ],
  },
  {
    category: "UI/UX Design",
    items: [
      { name: "Figma", level: 90, icon: <FaFigma className="text-purple-500" /> },
      { name: "Responsive Design", level: 95, icon: <FaMobileAlt className="text-teal-500" /> },
      { name: "Prototyping", level: 90, icon: <FaProjectDiagram className="text-indigo-500" /> },
      { name: "Wireframing", level: 85, icon: <FaSitemap className="text-gray-600" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Skills</h2>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {skills.map((group, i) => (
            <div key={i} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                {group.category}
              </h3>
              {group.items.map((skill, j) => (
                <div key={j}>
                  <div className="flex justify-between items-center text-sm mb-1">
                    <div className="flex items-center gap-2 text-gray-700">
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  {/* Animated skill bar */}
                  <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      className="bg-gray-900 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
