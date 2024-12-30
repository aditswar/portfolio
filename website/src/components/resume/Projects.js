import React from 'react';
import './Projects.css';
import myData from './../../assets/data/myData.json'
import settings from "./../../website-setting.json"

import { capitalizeEachWord } from './../common/utils'


const Projects = () => { 
  
  if (!settings.resume.projectsEnabled) {
    return null; // Return null to render nothing
  }
  
  return(
  <section className="projects section">
    <h3>PROJECTS</h3>
    {
      myData.projects.map((project, index) => (
        <div key={index} className="project">
          <div className="projectAndOrg">
            <h4 className="projectName">{capitalizeEachWord(project.name)}</h4>
            <p className="orgName">{project.organization}</p>
          </div>
          <p>{project.summary}</p>
          <p>{project.skills && "Technologies:  "}
            <i>
              {project.skills.join(', ')}
            </i>
          </p>
        </div>
      ))
    }

  </section>
)};

export default Projects;
