import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

const Experience = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <section id='experience'>
      <h5 data-aos="fade-up">The Languages I Learnt</h5>
      <h2 data-aos="fade-up">Languages and Tools</h2>

      <div className='container experience_container'>
        <div className="experience_frontend">
          <h3 data-aos="fade-in">Frontend Development</h3>
          <div className="experience_content">
            <article data-aos="fade-right" className='experince_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
              <h4>HTML</h4>
              <small className='text_light'>Experienced</small>
              </div>
            </article>
            <article data-aos="fade-right" className='experince_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
              <h4>CSS</h4>
              <small className='text_light'>Intermediate</small>
              </div>
            </article>
            <article data-aos="fade-right" className='experince_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
              <h4>Javascript</h4>
              <small className='text_light'>Intermediate</small>
              </div>
            </article>
            <article data-aos="fade-right" className='experince_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
              <h4>Chakra UI</h4>
              <small className='text_light'>Experienced</small>
              </div>
            </article>
            <article data-aos="fade-right" className='experince_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
              <h4>React</h4>
              <small className='text_light'>Intermediate</small>
              </div>
            </article>
            <article data-aos="fade-right" className='experince_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
              <h4>Bootstarp</h4>
              <small className='text_light'>Intermeiate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article data-aos="fade-left" className='experince_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
              <h4>Node JS</h4>
              <small className='text_light'>Intermediate</small>
              </div>
            </article>
            <article data-aos="fade-left" className='experince_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
              <h4>Express</h4>
              <small className='text_light'>Intermediate</small>
              </div>
            </article>
            <article data-aos="fade-left" className='experince_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
              <h4>MongoDB</h4>
              <small className='text_light'>Intermediate</small>
              </div>
            </article>
            <article data-aos="fade-left" className='experince_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
              <h4>MongoDb Atlas</h4>
              <small className='text_light'>Intermediate</small>
              </div>
            </article>
            <article data-aos="fade-left" className='experince_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
              <h4>Postman</h4>
              <small className='text_light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience