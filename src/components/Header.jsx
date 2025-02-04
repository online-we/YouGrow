import React from 'react'
import logoYouGrow from './css/yougrow.jpg'

const Header = () => {
    return (
      <header className="header">
        <div className="logo">
          <img src={logoYouGrow} alt="Logo" />
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#">HOW IT WORKS</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">STARTUPS</a></li>
            <li><a href="#">WHAT'S ON</a></li>
            <li><a href="#">PEAK XV</a></li>
          </ul>
        </nav>
        <div className="cta">
          <a href="#" className="apply-button">Apply</a>
        </div>
        <div className="menu-toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </header>
    );
  };

  export default Header;