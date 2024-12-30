import React from 'react';
import './Interests.css';
import myData from './../../assets/data/myData.json'
import settings from "./../../website-setting.json"


const Interests = () => {
  
  if (!settings.resume.interestsEnabled) {
    return null; // Return null to render nothing
  }

  return (
  <section className="interests section">
    <h3>INTERESTS</h3>
    <p>{myData.technicalInterests.join(", ")}</p>
  </section>
)};

export default Interests;

