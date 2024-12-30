import React, { forwardRef } from 'react';

import './Homepage.css';
import profilePic from '../../assets/images/my.png';
import settings from "../../website-setting.json"

import myData from "../../assets/data/myData.json"

const Homepage = forwardRef((props, ref) => {

  if (!settings.homepageEnabled) {
    return null; // Return null to render nothing
  }

  return (
    <div ref={ref} className="homepage-container">

      <div className='avatar-introduction'>
        <p className='introduction'>
          {myData.introduction}
        </p>
        <p className="avatar-container">
          <img className="avatar" src={profilePic} alt=""></img>
        </p>
      </div>

    </div>
  )
});

Homepage.displayName = 'Homepage';

export default Homepage;
