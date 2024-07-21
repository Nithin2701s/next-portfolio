"use client"
import { useEffect } from "react"
import ScrollReveal from "scrollreveal"

const About = () => {
     useEffect(()=>{
       // Initialize ScrollReveal
    //  if(typeof window !== undefined) {ScrollReveal().reveal('.about-img',{
    //     origin:'left',
    //     distance:"80px",
    //     duration:3000,
    //     delay:200 

    //   })}
    //   if(typeof window !== undefined){ ScrollReveal().reveal('.about-content',{
    //     origin:'right',
    //     distance:"80px",
    //     duration:3000,
    //     delay:200 
    //   })}
    //   return () =>{
    //     if(typeof window !== undefined){
    //     ScrollReveal().destroy();}
    //   }
     },[])
    return(
        <section className="about flex justify-center item-center space-x-[2rem] space-y-[3rem] bg-[#123846]" id="about">
        <div className="about-img my-[4rem]">
          <div className="rectangle w-[20vw] h-[60vh] ">

          </div>
        </div>
        <div className="about-content py-[5rem]">
          <h2 className="heading text-[3rem] font-[700]">About <span className="text-[#78b6e6]">Me</span></h2>
          <h3 className="text-[2rem] font-[700]">Frontend Developer</h3>
          <p className="text-[1rem]">
            As a software developer, I am passionate about crafting elegant
            solutions to complex problems. With a keen eye for detail and a
            dedication to continuous learning, I strive to create efficient and
            user-centric software that meets the highest standards of quality. My
            experience in [specific technologies or domains] has equipped me with
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