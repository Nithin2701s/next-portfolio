"use client"
import Image from "next/image";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Skills = () => {
    useEffect(()=>{
      // if(typeof window !== undefined){
      // ScrollReveal().reveal('.images',{
      //     rotate: {
      //       x:0,
      //       y:0,
      //       z:90
      //     },
      //     scale:0.5,
      //     duration:2000,
      //     delay:200  
      //   })
      // }
      //   if(typeof window !== undefined){ ScrollReveal().reveal('.sk-title',{
      //     scale:0.7,
      //     duration:2000,
      //     delay:200
      //   })}
      //   return () =>{
      //     if(typeof window !== undefined){
      //     ScrollReveal().destroy();}
      //   }
    },[])
    return(
        <section className="services" id="services">
        <h2 className="heading text-[2.6rem] font-[700]">My <span className="text-[#78b6e6]">Skills</span></h2>
  
        <div className="services-container">
          <div className="services-box">
            <i className="fa-solid fa-code"></i>
            <h3 className=" sk-title font-[700]">Programming</h3>
            <div className="images">
             <div className="img-box"><Image src="/Images/C.png" alt="" width={50} height = {50}></Image></div> 
             <div className="img-box"><Image src="/Images/Java.jpg" alt="" width={50} height = {50}></Image></div> 
             <div className="img-box"><Image src="/Images/python.png" alt="" width={50} height = {50}></Image></div> 
            </div>
            </div>
  
          <div className="services-box">
            <i className="fa-solid fa-palette"></i>
            <h3 className=" sk-title font-[700]">Design</h3>
            <div className="images">
              <div className="img-box"><Image src="/Images/HTML.png" alt="" width={50} height = {50}></Image></div> 
              <div className="img-box"><Image src="/Images/CSS.png" alt="" width={50} height = {50}></Image></div> 
              <div className="img-box"><Image src="/Images/Figma.png" alt="" width={50} height = {50}></Image></div> 
             </div>
            </div>
  
          <div className="services-box">
            <i className="fa-solid fa-window-maximize"></i>
            <h3 className=" sk-title font-[700]">Web Development</h3>
            <div className="images">
              <div className="img-box"><Image src="/Images/mongo.png" alt="" width={50} height = {50}></Image></div> 
              <div className="img-box"><Image src="/Images/Express.png" alt="" width={50} height = {50}></Image></div> 
              <div className="img-box"><Image src="/Images/React.jpeg" alt="" width={50} height = {50}></Image></div> 
              <div className="img-box"><Image src="/Images/Node.jpg" alt="" width={50} height = {50}></Image></div> 
             </div>
            </div>
        </div>
       </section>
    )
}

export default Skills;