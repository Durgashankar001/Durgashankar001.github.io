import React from 'react'
import './about.css'
import ME from "../../Assests/me_about.png"
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <section id='about'>
      <h5 >Get to Know</h5>
      <h2 >About Me</h2>
      <div className='container about_container'>
        <div className="about_content">


          <p >Analytical and detail-oriented Full Stack Web Developer, <br /> Capable of writing production-ready code using React JS, Redux, and CSS  <br /> on the front end,  NodeJS, and Express on the backend to build single-page applications. Passionate about coding. <br /> Looking to further enhance my Skill as a future full-stack developer.
          </p>
        </div>
      </div>
      <div className='container experience_container about'>
        <div className="my_stats">
          <div data-aos="fade-up" className='stats'>1200+</div>
          <p>Hours of Full Stack Coding</p>
          <div data-aos="fade-up" className='stats'>100+</div>
          <p>Hours of Soft Skill Sessions</p>
        </div>
        <div data-aos="fade-up" className="my_stats">
          <div className='stats'>250+</div>
          <p>DSA Problems</p>
          <div data-aos="fade-up" className='stats'>4+</div>
          <p>Projects Done</p>
        </div>
      </div>
    </section>
  )
}

export default About