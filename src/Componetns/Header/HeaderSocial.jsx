import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/durgashankar-pal-3819aa230/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Durgashankar001" target="_blank"><FaGithub/></a>
        <a href="mailto:durgashankarpal14285@gmail.com" target="_blank"><FiDribbble/></a>
        
    </div>
  )
}

export default HeaderSocial