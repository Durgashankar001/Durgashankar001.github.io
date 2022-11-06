import React, { useEffect } from 'react'
import GitHubCalendar from "react-github-calendar"
import "./githubCalendar.css"
import Aos from 'aos'
import "aos/dist/aos.css"


const Github = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  // GitHubCalendar(".github_calendar", "Durgashankar001", { responsive: true });
  return (
    <section>
      <h5 data-aos="fade-up">Github</h5>
      <h2 data-aos="fade-up">My Github Stats</h2>
       <div className='container experience_container about github_status'>
        <div className="git_stats">
        <a href="https://github.com/Durgashankar001?tab=repositories">
              <img alt="Durgashankar Pal's github stats"
                src="https://github-readme-stats.vercel.app/api?username=Durgashankar001&theme=algolia&show_icons=true&count_private=true" />
            </a>
        </div>
        <div className="git_stats">
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=Durgashankar001&theme=algolia&hide=smalltalk&layout=compact" alt="Durgashankar001" />
        </div>
      </div>
      <div className="container github_calendar">
        <GitHubCalendar username="Durgashankar001" />
      </div>
    </section>
  )
}

export default Github