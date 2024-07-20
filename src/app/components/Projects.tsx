'use client'
import { useEffect } from "react"
import Project from "./Project"
import ScrollReveal from "scrollreveal"
const Projects = ()=>{
    useEffect(()=>{
     ScrollReveal().reveal('.projects',{
        origin:"bottom",
        distance:'80px',
        duration:2000,
        delay:200
     })
    })
    return (
     <section className="projects-container justify-between item-center bg-[#123846] text-center" id="projects">
      <h2 className="text-[2.5rem] font-[700]">Latest <span className="text-[#78b6e6]">Projects</span></h2>

      <div className="projects flex flex-nowrap overflow-x-scroll px-[1rem]" style={{scrollbarWidth:'none',columnGap:'5rem'}}>
        <Project imageSrc='/Images/Film.jpg' title='Filmy Duniya' description='A movie retrieval system based on sentiment analysis' linkHref='https://github.com/Nithin2701s/Filmy-Duniya' />
        <Project imageSrc="/Images/P2.jpg" title='My Notes' description='An online notebook to store data' linkHref='https://github.com/Nithin2701s/MyNotes'/>
        <Project imageSrc="/Images/P3.jpg" title='Vihari' description='A tours and travel site along with bus ticket booking' linkHref='https://github.com/Nithin2701s/Vihari-mern'/>
        <Project imageSrc="/Images/P4.jpg" title='JobsForU' description='A job portal system using JDBC' linkHref='https://github.com/Nithin2701s/JobPortalSystem'/>
        <Project imageSrc="/Images/P5.jpg" title='Express News' description='A React application on daily news fetching using third-party API ' linkHref='https://github.com/Nithin2701s/react-news-app'/>
      </div>
     </section>
    )
} 

export default Projects