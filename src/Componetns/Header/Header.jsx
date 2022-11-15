import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Assests/me_img.png'
import HeaderSocial from './HeaderSocial'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'
import { IoMdMail } from 'react-icons/io'
import { IoMdCloudDownload } from 'react-icons/io'
import Typewriter from "typewriter-effect"
import CV from '../../Assests/Durgashankar_Pal_resume.pdf'

const Header = () => {
  return (
    <header>
      {/* <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>DURGASHANKAR PAL</h1>
      <ul className="dynamic_text">
      <li><span>Web Designer</span></li>
      <li><span>FullStack Developer</span></li>
      <li><span>FullTime Coder</span></li>
      </ul>
      <CTA/>
      <HeaderSocial/>
      <div className="me">
        <img src={ME} alt="MY LOGO" />
      </div>

      <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div> */}
      <div id="aboutme">
        <div>
          <h2>Hi, my name is</h2>
          <h1 id="name">Durgashankar Pal</h1>
          <div className='header_type'>I'm a <div id='title'><Typewriter
            cursorColor="black"
            options={{
              strings: [
                "Full Stack Developer",
                "Problem Solver",
                "Front-End Developer",
                "Software Engineer"
              ],
              autoStart: true,
              loop: true,
              pauseFor: 1000
            }}
          /></div></div>
          <a href={CV} className='btn btn_primary web' download>Resume <IoMdCloudDownload className='resume_icon' /></a>
          <div className='header_socials'>
            <a href="https://www.linkedin.com/in/durgashankar-pal-3819aa230/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/Durgashankar001" target="_blank"><FaGithub /></a>
            <a href="mailto:durgashankarpal14285@gmail.com" target="_blank"><IoMdMail /></a>

          </div>
        </div>
        <div>
          <div>
            <div id="picborder">
              <div id="pic">
                <img src={ME} alt="" />
              </div>
            </div>
            <div className='header_socials2'>
              <a href="https://www.linkedin.com/in/durgashankar-pal-3819aa230/" target="_blank"><BsLinkedin /></a>
              <a href="https://github.com/Durgashankar001" target="_blank"><FaGithub /></a>
              <a href="mailto:durgashankarpal14285@gmail.com" target="_blank"><IoMdMail /></a>
            </div>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header