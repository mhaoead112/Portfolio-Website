import React from 'react'
import { Link, Element } from 'react-scroll';

export default function NavBar() {
    return(
        <>
{/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 text-gray-800 text-sm bg-gray-50">
        <div className="font-bold text-lg">MH</div>
        <ul className="hidden md:flex gap-8">
          <li><Link to="about" smooth={true} duration={500} className="hover:text-gray-500 hover:cursor-pointer">About Me</Link>
</li>
          <li><Link to="portfolio" smooth={true} duration={500} className="hover:text-gray-500 hover:cursor-pointer">Portfolio</Link></li>
          <li><Link to="skills" smooth={true} duration={500} className="hover:text-gray-500 hover:cursor-pointer">Skills</Link></li>
        </ul>
        <Link
          to="contact"
          smooth={true} 
          duration={500}
          className="text-gray-800 border-b border-gray-800 hover:border-gray-500 hover:cursor-pointer"
        >
          Contact
        </Link>
      </nav>

        </>
    )
}