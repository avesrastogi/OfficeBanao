import React from 'react'
import './ProjectInfo.css'

function ProjectInfo() {
  return (
    <div className="container-1">
        <div className="project-info">
            <label className="project-name">ProjectName</label>
            <label className="name">New Delhi: Dwarka</label>
        </div>
        <div className="new-project">
            <label className="new-project-text">Start new Project</label>
            <label className="new-project-plus">+</label>
        </div>
    </div>
  )
}

export default ProjectInfo