'use client'
import Link from "next/link";
import '../style.css'
import { useState } from "react";
export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    return (
        <header className="header flex space-x-1 fixed top-0 left-0 w-full justify-between pt-[1.8rem] px-[9%] z-50">
        <Link href="#" className="logo font-semibold text-[1.5rem]">Portfolio</Link>
        
        <button className="hamburger"  onClick={toggleMenu}>
        <i className="fa-solid fa-bars" id="menu-icon"></i>
      </button>
        <nav className={`navbar  space-x-9 text-[1.2rem] font-[600] py-3 ${isOpen ? 'show' : ''}`}>
          <Link href="#home" className=" link hover:text-[#78b6e6]">Home</Link>
          <Link href="#about" className=" link hover:text-[#78b6e6]">About</Link>
          <Link href="#services" className=" link hover:text-[#78b6e6]">Skills</Link>
          <Link href="#projects" className=" link hover:text-[#78b6e6]">Projects</Link>
          <Link href="#contact" className=" link hover:text-[#78b6e6]">Contact</Link>
        </nav>
      </header>
    );
}