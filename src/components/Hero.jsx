// src/components/Hero.jsx
import React from 'react';
import './Hero.css'; // We will create this corresponding style next

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="profile-pic-container">
          {/* Use the public path to your image */}
          <img src="/images/profile.jpg" alt="Developer Profile" className="profile-pic" />
        </div>
        <div className="hero-text">
          <h1>HI, I'M <span className="highlight">[DEVELOPER NAME]</span>.</h1>
          <p>I BUILD INTELLIGENT BACKENDS & RESPONSIVE FRONTENDS.</p>
          <button className="get-in-touch-btn">GET IN TOUCH</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;