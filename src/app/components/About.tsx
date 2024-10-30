"use client"
import React, { useEffect, useRef } from "react"
// import ScrollReveal from "scrollreveal"

const About: React.FC = () => {
    const refToComponent1 = useRef(null)
    const refToComponent2 = useRef(null)
     useEffect(()=>{
     const animate = async()=>{
       if(refToComponent1.current){
        const sr = (await import('scrollreveal')).default
        sr().reveal(refToComponent1.current,{
          origin:'left',
        distance:"80px",
        duration:2000,
        delay:200 
        })
       }
       if(refToComponent2.current){
        const sr = (await import('scrollreveal')).default
        sr().reveal(refToComponent2.current,{
          origin:'right',
        distance:"80px",
        duration:2000,
        delay:200 
        })
       }
     }
     animate()
     },[])
    return(
        <section className="about flex justify-center item-center space-x-[2rem] space-y-[3rem] bg-[#123846]" id="about">
        <div className="about-img my-[4rem]" ref={refToComponent1}>
          <div className="rectangle w-[20vw] h-[60vh] ">

          </div>
        </div>
        <div className="about-content py-[5rem]" ref={refToComponent2}>
          <h2 className="heading text-[3rem] font-[700]">About <span className="text-[#78b6e6]">Me</span></h2>
          <h3 className="text-[2rem] font-[700]">Frontend Developer</h3>
          <p className="text-[1rem]">
            As a software developer, I am passionate about crafting elegant
            solutions to complex problems. With a keen eye for detail and a
            dedication to continuous learning, I strive to create efficient and
            user-centric software that meets the highest standards of quality. My
            experience in Java, Python and MERN has equipped me with
            the skills to tackle diverse challenges and contribute effectively to
            innovative projects. I am driven by a curiosity for new technologies
            and a commitment to delivering reliable, scalable, and impactful
            software solutions.
          </p>

        </div>
      </section>
  
    )
}

export default About
