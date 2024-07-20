import Link from "next/link";
import '../style.css'
export default function Navbar(){
    return (
        <header className="header flex space-x-1 fixed top-0 left-0 w-full justify-between pt-[1.8rem] px-[9%] z-50">
        <Link href="#" className="logo font-semibold text-[1.5rem]">Portfolio</Link>
        {/* <i className="fa-solid fa-bars" id="menu-icon"></i> */}
  
        <nav className="navbar space-x-9 text-[1.2rem] font-[600] py-3">
          <Link href="#home" className=" link hover:text-[#78b6e6] hover:border-b-1">Home</Link>
          <Link href="#about" className=" link hover:text-[#78b6e6]">About</Link>
          <Link href="#services" className=" link hover:text-[#78b6e6]">Skills</Link>
          <Link href="#projects" className=" link hover:text-[#78b6e6]">Projects</Link>
          <Link href="#contact" className=" link hover:text-[#78b6e6]">Contact</Link>
        </nav>
      </header>
    );
}