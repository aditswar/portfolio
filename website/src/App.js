import './App.css';
import Resume from './components/resume/Resume';
import Homepage from './components/homepage/Homepage';
import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation'
import Footer from './Footer'
import settings from './website-setting.json'




function App() {
  const componentRef = useRef();

  return (
    <div className="App">
      <Navigation />
      <Routes>
        {settings.homepageEnabled && <Route path="/" element={<Homepage />} />}
        {settings.resumeEnabled && <Route path="/resume" element={<Resume ref={componentRef} />} />}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
