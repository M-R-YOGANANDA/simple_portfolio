import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './Header.css';

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  const [navHeight, setNavHeight] = useState(80); // Default 80px

  useEffect(() => {
    // Dynamically get navbar height for perfect alignment
    const navbar = document.querySelector('.navbar');
    if (navbar) setNavHeight(navbar.offsetHeight);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    
    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: targetId,
        // OFFSET: Subtracts the header height so it doesn't overlap
        offsetY: navHeight, 
        autoKill: false
      },
      ease: "power4.inOut",
    });
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">PORTFOLIO</div>
        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => handleNavClick(e, "#home")}>Home</a></li>
          {/* Targeted Scroll to Projects */}
          <li><a href="#stack" onClick={(e) => handleNavClick(e, "#stack")}>Skills</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;