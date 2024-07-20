"use client"
import Image from 'next/image';
import '../style.css'
import TypedText from './TypedText';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const HomePage = () => {  
     useEffect(() => {
          // Initialize ScrollReveal
          ScrollReveal().reveal('.home-content', {
               origin : "right",
               distance : "150px" ,
               duration : 3000,
               delay : 200
          });
         ScrollReveal().reveal('.home-img',{
          origin :"bottom",
          distance : "80px",
          duration:2000,
          delay : 200
         })
          // Clean up
          return () => ScrollReveal().destroy();
        }, []);
     return (
     <section className="home flex justify-center" id="home">
       <div className="home-img">   
       <Image src = '/Images/DP.jpg' alt='' width={400} height={80} className='DP opacity-[0.8]'></Image>  
       </div> 
       <div className="home-content mt-[2rem]">
       <h3 className='text-[2.2rem] font-[700] mb-2'>Hi, Myself</h3>
        <h1 className='ml-[2rem] text-[3rem] font-[700] leading-[1]'>Nithin Sai Charugundla</h1>
        <h3 className='ml-[3rem] text-[2.2rem] font-[700]'>And I'm a <TypedText/></h3>
        <p className='ml-[3.5rem]'>
          Undergraduate at IIIT Sricity pursuing degree in Computer Science and
          Engineering.
        </p>
        <div className="social-media ml-[3.8rem] my-[1rem] space-x-5">
          <a href="https://github.com/Nithin2701s" className='media'><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/nithin-sai-charugundla-927640233" className='media'><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://x.com/Itz__Nithin" className='media'><i className="fa-brands fa-x-twitter"></i></a>
          <a href="https://www.instagram.com/nithin__cns" className='media'><i className="fa-brands fa-instagram"></i></a>
        </div>
          <a href="https://drive.google.com/file/d/1H1IR5LTM-tfgikggViBHeKP9F2ttjw2C/view?usp=drive_link" className="btn ml-[4rem] my-[1rem] hover:shadow-none">Download CV</a>
       
      </div>
    
    </section>
     )
}

export default HomePage;