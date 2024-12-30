import React from 'react';
import './WorkExperience.css';
import myData from './../../assets/data/myData.json'
import settings from "./../../website-setting.json"

const WorkExperience = () => {
  
    
  if (!settings.resume.workExperienceEnabled) {
    return null; // Return null to render nothing
  }

  return (
  <section className='work-experience section'>
    <h3>WORK EXPERIENCE</h3>
    {myData.workExperiences.map((workExperience, index) =>
      <div key={index} className="job">
        <div className="designationCompanyTimePeriod">
          <h4 className="jobDesignation">{workExperience.designation}</h4>
          <div className="companyAndTimePeriod">{workExperience.company} | {workExperience.fromTimePeriod} - {workExperience.toTimePeriod}</div>
        </div>
        {workExperience.jobSummary &&
          <ul>
            {workExperience.jobSummary.map((summary, index) => (
              <li key={index}>{summary}</li>
            ))}
          </ul>
        }
      </div>
    )
    }
  </section>
)};

export default WorkExperience;
