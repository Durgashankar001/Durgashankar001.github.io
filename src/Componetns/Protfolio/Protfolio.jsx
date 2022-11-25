import React from 'react'
import './protfolio.css'
import IMG1 from "../../Assests/one.jpeg"
import IMG2 from "../../Assests/two.jpeg"
import IMG3 from "../../Assests/three.jpeg"
import IMG4 from "../../Assests/clockify.png"
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

const Protfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <section id='projects'>
      <h5 data-aos="fade-up">My Recent Works</h5>
      <h2 data-aos="fade-up">Projects</h2>
      {/* <div className='container portfolio_container'>
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
        </article> */}
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
      {/* </div> */}

      <div className='allitems container'>
        <div className="item">
          <div className="left" data-aos="flip-left">
            <div className="img">
              <img src={IMG4} alt="first" />
            </div>
          </div>
          <div className="right" data-aos="flip-right">
            <h2 className="project_title">
              Cloning Of Clockify
            </h2>
            <h3 className="project_subtitle">
              <div className='svg'>
                Tech stack :
                <div className='svg_item'> <svg style={{ marginLeft: "10px" }} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>
                  <img src="data:image/jpeg;base64,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" alt="avatar" />
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path></svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z"></path></svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"></path></svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 32 32" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22.797 14.562c-0.067-0.774-0.209-1.546-0.407-2.297-0.625-2.369-1.666-4.637-3.134-6.603-0.4-0.536-0.832-1.048-1.294-1.532-0.476-0.499-1.004-0.957-1.336-1.578-0.21-0.393-0.41-0.791-0.614-1.187-0.003 0.124-0.011 0.248-0.011 0.371-0-0.124 0.009-0.248 0.011-0.372-0.038-0.095-0.076-0.191-0.13-0.327-0.022 0.075-0.036 0.101-0.036 0.129-0.017 0.645-0.383 1.083-0.838 1.492-0.512 0.46-0.989 0.959-1.481 1.441 0.017 0.022 0.036 0.044 0.055 0.066-0.019-0.022-0.038-0.043-0.055-0.066-1.463 1.924-2.752 3.981-3.511 6.29-0.221 0.672-0.395 1.359-0.517 2.056-0.259 1.481-0.379 2.92-0.296 4.42 0.046 0.829 0.191 1.645 0.407 2.448 0.785 2.917 2.379 5.336 4.558 7.392 0.405 0.382 0.842 0.729 1.265 1.093 0.001-0.004 0.002-0.007 0.003-0.011-0.001 0.004-0.002 0.007-0.003 0.011 0.062 0.214 0.125 0.428 0.187 0.642 0.058 0.332 0.116 0.664 0.174 0.996 0.028 0.346 0.055 0.693 0.083 1.039-0.001 0.211-0.010 0.423 0.003 0.633 0.003 0.054 0.074 0.104 0.113 0.156 0.001-0.002 0.002-0.004 0.004-0.006-0.001 0.002-0.002 0.004-0.004 0.006 0.118 0.041 0.235 0.083 0.353 0.124 0.106 0.041 0.212 0.083 0.367 0.143-0.023-0.346-0.043-0.635-0.063-0.924-0.001-0.303-0.002-0.607-0.003-0.91-0.006 0.007-0.014 0.014-0.021 0.021 0.007-0.007 0.014-0.014 0.021-0.021 0.042-0.462 0.085-0.924 0.127-1.386 0.031-0.101 0.061-0.201 0.092-0.302 0.088-0.156 0.175-0.311 0.263-0.467 0.325-0.262 0.674-0.499 0.971-0.79 0.536-0.527 1.071-1.060 1.55-1.637 0.622-0.748 1.158-1.565 1.588-2.441 1.223-2.491 1.789-5.269 1.564-8.039-0.002-0.024-0.004-0.049-0.006-0.074z"></path></svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M20.61 0H3.39C2.189 0 1.23.96 1.23 2.16v19.681c0 1.198.959 2.159 2.16 2.159h17.22c1.2 0 2.159-.961 2.159-2.159V2.16C22.77.96 21.811 0 20.61 0zm.96 21.841c0 .539-.421.96-.96.96H3.39c-.54 0-.96-.421-.96-.96V2.16c0-.54.42-.961.96-.961h17.22c.539 0 .96.421.96.961v19.681zM6.63 20.399L9.33 18l-2.7-2.4v4.799zm9.72-9.719c-.479-.48-1.379-1.08-2.879-1.08-1.621 0-3.301.421-4.5.84V3.6h-2.4v10.38l1.68-.78s2.76-1.26 5.16-1.26c1.2 0 1.5.66 1.5 1.26v7.2h2.4v-7.2c.059-.179.059-1.501-.961-2.52zM13.17 7.5h2.4c1.08-1.26 1.62-2.521 1.8-3.9h-2.399c-.241 1.379-.841 2.64-1.801 3.9z"></path></svg>
                </div>
              </div>
            </h3>
            <p className='project_desc'>Clockify is the most popular free time tracker and timesheet app for teams of all sizes. It is an online app that works in a browser, but you can also install it on your computer or phone.</p>
            <div className="buttons">
              <a href="https://github.com/Durgashankar001/clockify_clone" className='btn github' target="_blank">Github</a>
              <a href="https://clockifyy.netlify.app/" className='btn btn_primary web' target="_blank">Live Demo</a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="left" data-aos="flip-right">
            <div className="img">
              <img src={IMG1} alt="first" />
            </div>
          </div>
          <div className="right" data-aos="flip-left">
            <h2 className="project_title">
              Cloning Of Uboric
            </h2>
            <h3 className="project_subtitle">
              <div className='svg'>
                Tech stack :
                <div className='svg_item'><svg style={{ marginLeft: "10px" }} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>
                  <img src="data:image/jpeg;base64,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" alt="avatar" />
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path></svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M208 88.001h-80v212.498c0 52.58-18.032 67.261-49.412 67.261-14.705 0-27.948-2.521-38.25-6.063L32 423.904C46.7 428.966 69.259 432 86.907 432 158.955 432 208 398.129 208 301.02V88.001zM382.463 80C305.02 80 256 123.998 256 182.154c0 50.083 37.751 81.44 92.641 101.665 39.7 14.158 55.392 26.808 55.392 47.539 0 22.756-18.139 37.425-52.448 37.425-31.863 0-60.789-10.64-80.394-21.255v-.021L256 410.727c18.639 10.638 53.441 21.255 91.167 21.255C437.854 431.98 480 383.43 480 326.284c0-48.55-26.958-79.9-85.278-102.163-43.139-17.191-61.27-26.795-61.27-48.542 0-17.2 15.688-32.869 48.043-32.869 31.846 0 53.744 10.707 66.505 17.291l19.125-64C447.125 87.22 420.188 80 382.463 80z"></path></svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M24 22.525H0l12-21.05 12 21.05z"></path></svg></div>

              </div>
            </h3>
            <p className='project_desc'>Uboric is an online shopping destination for children, men and women's luxury clothing, bags, shoes, and accessories. Uboric is India’s fastest growing online retail store for the day to
              day and special occasion.</p>
            <div className="buttons">
              <a href="https://github.com/Durgashankar001/Uboric.com-Clone" className='btn github' target="_blank">Github</a>
              <a href="https://uboricc.netlify.app/" className='btn btn_primary web' target="_blank">Live Demo</a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="left" data-aos="flip-left">
            <div className="img">
              <img src={IMG2} alt="first" />
            </div>
          </div>
          <div className="right" data-aos="flip-right">
            <h2 className="project_title">
              Cloning Of Kissflow
            </h2>
            <h3 className="project_subtitle">
              <div className='svg'>
              Tech stack : 
              <div className='svg_item'><svg style={{marginLeft:"10px"}} stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path></svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M208 88.001h-80v212.498c0 52.58-18.032 67.261-49.412 67.261-14.705 0-27.948-2.521-38.25-6.063L32 423.904C46.7 428.966 69.259 432 86.907 432 158.955 432 208 398.129 208 301.02V88.001zM382.463 80C305.02 80 256 123.998 256 182.154c0 50.083 37.751 81.44 92.641 101.665 39.7 14.158 55.392 26.808 55.392 47.539 0 22.756-18.139 37.425-52.448 37.425-31.863 0-60.789-10.64-80.394-21.255v-.021L256 410.727c18.639 10.638 53.441 21.255 91.167 21.255C437.854 431.98 480 383.43 480 326.284c0-48.55-26.958-79.9-85.278-102.163-43.139-17.191-61.27-26.795-61.27-48.542 0-17.2 15.688-32.869 48.043-32.869 31.846 0 53.744 10.707 66.505 17.291l19.125-64C447.125 87.22 420.188 80 382.463 80z"></path></svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M24 22.525H0l12-21.05 12 21.05z"></path></svg></div> 
              </div>
            </h3>
            <p className='project_desc'>Kissflow is simple for business users to create powerful apps, processes, or case boards that are natively integrated and flexible. In this project you can explore what a true Work Platform can do.</p>
            <div className="buttons">
              <a href="https://github.com/Durgashankar001/Kissflow.com-Clone" className='btn github' target="_blank">Github</a>
              <a href="https://moonlit-jelly-60aaa4.netlify.app/" className='btn btn_primary web' target="_blank">Live Demo</a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="left" data-aos="flip-right">
            <div className="img">
              <img src={IMG3} alt="first" />
            </div>
          </div>
          <div className="right" data-aos="flip-left">
            <h2 className="project_title">
              Cloning Of Blue Heaven Cosmetics
            </h2>
            <h3 className="project_subtitle">
            <div className='svg'>
              Tech stack : 
              <div className='svg_item'><svg style={{marginLeft:"10px"}} stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path></svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path></svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M208 88.001h-80v212.498c0 52.58-18.032 67.261-49.412 67.261-14.705 0-27.948-2.521-38.25-6.063L32 423.904C46.7 428.966 69.259 432 86.907 432 158.955 432 208 398.129 208 301.02V88.001zM382.463 80C305.02 80 256 123.998 256 182.154c0 50.083 37.751 81.44 92.641 101.665 39.7 14.158 55.392 26.808 55.392 47.539 0 22.756-18.139 37.425-52.448 37.425-31.863 0-60.789-10.64-80.394-21.255v-.021L256 410.727c18.639 10.638 53.441 21.255 91.167 21.255C437.854 431.98 480 383.43 480 326.284c0-48.55-26.958-79.9-85.278-102.163-43.139-17.191-61.27-26.795-61.27-48.542 0-17.2 15.688-32.869 48.043-32.869 31.846 0 53.744 10.707 66.505 17.291l19.125-64C447.125 87.22 420.188 80 382.463 80z"></path></svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M24 22.525H0l12-21.05 12 21.05z"></path></svg></div> 
              </div>
            </h3>
            <p className='project_desc'>Blue Heaven is making beauty accessible to every Indian woman.It adapt global trends as per Indian skin tones & taste and bring them to every user at the most affordable prices.</p>
            <div className="buttons">
              <a href="https://github.com/skypassboy/India-mart-clone" className='btn github' target="_blank">Github</a>
              <a href="https://indiamartcloneteamflex.netlify.app/productservice" className='btn btn_primary web' target="_blank">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Protfolio