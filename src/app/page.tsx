import Image from "next/image";
import Navbar from "./components/Navbar";
import HomePage from './components/HomePage';
import About from "./components/About";
import Contact from "./components/Contact"
import Skills from "./components/Skills";
import Projects from "./components/Projects";
export default function Home() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  );
}
