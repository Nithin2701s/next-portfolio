"use client"
import React,{ useEffect, useRef } from 'react';
import '../style.css'
const Contact:React.FC = () => {
  const refToComponent = useRef(null)
    useEffect(()=>{
         const animate = async()=>{
          if(refToComponent.current){
            const sr = (await (import('scrollreveal'))).default
            sr().reveal(refToComponent.current,{
              origin:'left',
              distance:"80px",
              duration:2000,
              delay:200
            })
          }
         }
         animate()
    },[])
    return(
        <section className="contact" id="contact" ref={refToComponent}>
        <h2 className="heading mb-[3rem] text-[3rem] font-[700]">Contact <span className="text-[#78b6e6]">Me</span></h2>
  
        <form action="#" className="contact-form  mb-[3rem]">
          <div className="input-box flex justify-center">
            <input type="text" name="fullname" placeholder="Full Name"></input>
            <input type="email" name="email" placeholder="Email"></input>
          </div>
  
          <div className="input-box">
            <input type="number" name="number" placeholder="Mobile Number"></input>
            <input type="text" name="subject" placeholder="Email Subject"></input>
          </div>
          <textarea name="" id="" cols={15} rows={8} placeholder="Your Message"></textarea>
          <input type="submit" className="btn hover:shadow-none" value="Send"></input>
        </form>
       </section>
    )
}
export default Contact;
