import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>DURGASHANKAR PAL</a>
      <ul className='premalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skill">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#testmonial">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_social">
      <a href="https://www.linkedin.com/in/durgashankar-pal-3819aa230/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Durgashankar001" target="_blank"><FaGithub/></a>
        <a href="mailto:durgashankarpal14285@gmail.com" target="_blank"><FiDribbble/></a>
      </div>

      {/* <div className="footer_copyright">
        <small>&copy; Durgashankar. All copy rights reserved</small>
      </div> */}
    </footer>
  )
}

export default Footer