import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Taiyaki Restaurant Website Prototype",
    description: "A full-stack web application for a Japanese dessert shop specializing in Taiyaki. Customers can browse the menu, customize orders, and complete secure online payments. Includes an admin dashboard for managing orders, inventory, and daily sales reports. Built with the MERN stack for seamless performance and integrated with responsive UI/UX design for a smooth ordering experience on both desktop and mobile.",
    image: "https://i.ibb.co/YTyY7QCL/Screenshot-2025-08-12-005632.png", 
    tech: ["React", "Tailwind", "Node.js","MongoDB" , "JavaScript", "Express.js"],
    live: "https://taiyaki-website-cle4.vercel.app/",
    github: null,
  },
    {
    title: "Klyr - Modern Cloud Banking & Finance Management",
    description: "Klyr is a modern, full-stack banking and personal finance management application built with React, TypeScript, Node.js, and MySQL. It provides users with a seamless experience for managing their finances, including virtual cards, money transfers, and transaction tracking",
    image: "https://i.ibb.co/dJ5bN5QX/Screenshot-2025-08-12-214336.png",
    tech: ["React", "TypeScipt", "MySQL" , "Node.js"],
    live: null,
    github: "https://github.com/mhaoead112/Klyr",
  },
  {
    title: "Racer Simulator",
    description: "A high-performance, JavaScript-based racing simulation developed as part of the DECI Level 4 program. The project integrates asynchronous API calls to dynamically generate racetracks, handle race state, and process real-time player and AI movements. Features include customizable race parameters, responsive design, and an engaging user interface that mimics real-time racing environments. This project highlights skills in RESTful API integration, asynchronous JavaScript (async/await, Promises), and DOM manipulation for interactive game logic.",
    image: "https://i.ibb.co/5WTHTksh/Screenshot-2025-08-13-164356.png",
    tech: ["Javascipt", "OOB programming", "Async/Await" , "HTML" , "CSS" ,"Binary Server"],
    live: null,
    github: "https://github.com/mhaoead112/UdaciRacerSim",
  },
  {
    title: "Image Processing Web App",
    description: "A browser-based image editing tool that allows users to upload, transform, and enhance images directly in their browser. Features include real-time previews, adjustable filters, cropping, resizing, and format conversion — all built with a responsive, mobile-friendly interface. Developed using React for the frontend and Node.js for server-side processing, with optimized image handling for speed and quality.",
    image: "https://i.ibb.co/0pHmqz4M/Screenshot-2025-08-12-180457.png",
    tech: ["HTML", "CSS", "JavaScript" , "Node.js" , "Express.js" , "Sharp.js"],
    live: "https://image-processing-web-app-2xhq.onrender.com/",
    github: "https://github.com/username/landing-redesign",
  },
  {
    title: "Portfolio Project",
    description: "A modern personal portfolio built with React, Tailwind CSS, and Framer Motion, showcasing projects, skills, and contact information with smooth animations and responsive design..",
    image: "https://i.ibb.co/Vc430P87/Screenshot-2025-08-18-141419.png",
    tech: ["React", "Tailwind", "Framer Motion"],
    live: "https://example.com/portfolio",
    github: "https://github.com/mhaoead112/Portfolio-Website",
  },

];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Portfolio</h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              {/* Screenshot */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" /> Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
