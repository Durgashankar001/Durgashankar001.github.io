import React from 'react'
import GitHubCalendar from "react-github-calendar"
import "./githubCalendar.css"

const Github = () => {
  return (
    <section>
       <h5 >My all Commits</h5>
      <h2 >Statistics</h2>
      <div className="container github_calendar">
      <GitHubCalendar username="Durgashankar001"/>
      </div> 
        </section>
  )
}

export default Github