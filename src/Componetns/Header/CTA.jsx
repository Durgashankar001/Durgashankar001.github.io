import React from 'react'
import CV from '../../Assests/DurgashankarPal_resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn_primary'>Let's Talk</a>
    </div>
  )
}

export default CTA