import React from 'react'
import CV from '../../Assests/Durgashankar_Pal_resume.pdf'
import { IoMdCloudDownload } from "react-icons/io"
import "./header.css"

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn resume_download'>Resume <IoMdCloudDownload className='resume_icon'/></a>
      <a href="#contact" className='btn btn_primary'>Let's Talk</a>
    </div>
  )
}

export default CTA