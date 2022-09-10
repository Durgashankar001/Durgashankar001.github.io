import React from 'react'
import './about.css'
import ME from "../../Assests/me_about.png"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

const About = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <section id='about'>
      <h5 data-aos="fade-up">Get to Know</h5>
      <h2 data-aos="fade-up">About Me</h2>
      <div className='container about_container'>
      <div data-aos="fade-in" data-aos-duration="2000" className="about_me">
        <div className="about_me_image">
          <img src={ME} alt="" />
        </div>
      </div>
      <div className="about_content">
        <div className="about_cards">
          <article data-aos="fade-right" className='about_card'>
            <FaAward className='about_icon'/>
            <h5>DSA</h5>
            <small>250+ DSA Problems</small>
          </article>
          <article data-aos="fade-up" className='about_card'>
            <VscFolderLibrary className='about_icon'/>
            <h5>Projects</h5>
            <small>6+ projects</small>
          </article>
          <article data-aos="fade-left" className='about_card'>
            <VscFolderLibrary className='about_icon'/>
            <h5>Graduation</h5>
            <small>Bsc (Physical Science)</small>
          </article>
        </div>

        <p data-aos='fade-left'>I am a Full Stack developer with experience in building websites and web applications. I specialize MERN stack, along with an expertise in JavaScript, HTML, CSS, and React. Outside of coding, my interest lies traveling..</p>
        <a data-aos="fade-left" href="#contact" className='btn btn_primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About