import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import myData from './assets/data/myData.json'

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className='copyRight'>&copy; {myData.name}, {currentYear}</div>
    </footer>
  );
}

export default Footer;
