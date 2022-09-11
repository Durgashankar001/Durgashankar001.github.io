import React from 'react'
import './protfolio.css'
import IMG1 from "../../Assests/one.jpeg"
import IMG2 from "../../Assests/two.jpeg"
import IMG3 from "../../Assests/three.jpeg"
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

const Protfolio = () => {
  // useEffect(()=>{
  //   Aos.init({duration:1000})
  // },[])
  return (
    <section id='projects'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG1} alt="portfolio1" />
          </div>
          <h3>Cloning Of Uboric</h3>
          <small className='portofolio_margin'>Uboric is an online shopping destination for children, men and women's luxury clothing, bags, shoes, and accessories. Uboric is India’s fastest growing online retail store for the day to
            day and special occasion.
          </small>
          <p className='bold'>TechStack : REACT | Chakra UI | CSS | Javascript | LocalStorage</p>
          <div className='portfolio_item-cta'>
            <a   href="https://github.com/Durgashankar001/resilient-thrill-6327" className='btn' target="_blank">Github</a>
            <a  href="https://uboricc.netlify.app/" className='btn btn_primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG2} alt="portfolio1" />
          </div>
          <h3>Cloning Of Kissflow</h3>
          <small className='portofolio_margin'>Kissflow is simple for business users to create powerful apps, processes, or case boards that are natively integrated and flexible. Explore what a true Work Platform can do.Automate workflows in a drag-and-drop no-code visual studio</small>
          <p className='bold'>Tech stack :  HTML | CSS | Javascript | LocalStorage</p>
          <div className='portfolio_item-cta'>
            <a  href="https://github.com/Durgashankar001/humble-lock-7647" className='btn' target="_blank">Github</a>
            <a   href="https://moonlit-jelly-60aaa4.netlify.app/" className='btn btn_primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG3} alt="portfolio1" />
          </div>
          <h3>Cloning Of Blue Heaven Cosmetics</h3>
          <small className='portofolio_margin'>Blue Heaven is making beauty accessible to every Indian woman.It adapt global trends as per Indian skin tones & taste and bring them to you at the most affordable prices. A 100% cruelty free brand, our aim is to provide a platform to every Indian woman to express her individuality.</small>
          <p className='bold'>Tech stack :  HTML | CSS | Javascript | LocalStorage</p>
          <div className='portfolio_item-cta'>
            <a  href="https://github.com/skypassboy/India-mart-clone" className='btn' target="_blank">Github</a>
            <a   href="https://indiamartcloneteamflex.netlify.app/productservice" className='btn btn_primary' target="_blank">Live Demo</a>
          </div>
        </article>
        {/* <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG1} alt="portfolio1" />
          </div>
          <h3>This is a portfolio title</h3>
          <small className='portofolio_margin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex expedita dolore quas velit, suscipit unde. Culpa esse repellendus amet ratione porro, sunt ab maiores provident impedit? Laboriosam sunt officia culpa!</small>
          <p>TechStack : Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <div className='portfolio_item-cta'>
            <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="https://github.com" className='btn btn_primary' target="_blank">Live Demo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Protfolio