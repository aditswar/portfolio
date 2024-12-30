import React from 'react';
import './Header.css';
import profilePic from '../../assets/images/my.png';
import { faPhoneSquare, faEnvelope, faGlobe, faLocationPin, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import myData from './../../assets/data/myData.json'
import settings from "./../../website-setting.json"


const Header = () => {
  
  if (!settings.resume.headerEnabled) {
    return null; // Return null to render nothing
  }
  
  return (
  <header className="header">
    <div className='heading'>
      <div className='nameAndProfession'>
        <h1>{myData.name}</h1>
        <h2>{myData.profession}</h2>
      </div>
      <div className='contact'>
        <div><FontAwesomeIcon icon={faPhoneSquare} />&nbsp;{myData.contact.mobileNo}</div>
        <div><FontAwesomeIcon icon={faEnvelope} />&nbsp;<a href={"mailto:" + myData.contact.emailId} rel="noopener noreferrer" target='_blank'>{myData.contact.emailId}</a></div>
        <div><FontAwesomeIcon icon={faGlobe} />&nbsp;<a target='_blank' rel='noopener noreferrer' href={myData.contact.website} >{myData.contact.website.replace("https://", "")}</a></div>
        <div><FontAwesomeIcon icon={faLocationPin} /> &nbsp;{myData.contact.country}</div>
        <div className='externalLinkItems'>
          <a href={myData.contact.gitHub} rel="noopener noreferrer" target='_blank'><FontAwesomeIcon icon={faGithub} color='black' size='2x' /></a>
          <a href={myData.contact.linkedInUrl} rel="noopener noreferrer" target='_blank'><FontAwesomeIcon icon={faLinkedin} color='black' size='2x' /></a>
        </div>
      </div>
    </div>
    <div className='avatarAndSummary'>
      <p className="avatar-container">

        <img className="avatar" src={profilePic} alt=""></img>
      </p>
      <p>
        {myData.summary}
      </p>
    </div>
  </header>
)};

export default Header;
