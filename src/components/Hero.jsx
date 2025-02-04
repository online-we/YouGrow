import React from 'react'
import imgPanel from './css/courses2.jpg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="content">
        <h1>Accelerate Your YouTube Growth</h1>
        <p>Rise your own Youtube channel with our FULL Support</p>
        <a href="#" className="cta-button">Apply to YG</a>
      </div>
      <div className="stats">
        <div className="stat-box">
          <h2>5,000</h2>
          <p>funded startups</p>
        </div>
        <div className="stat-box">
          <h2>$600B</h2>
          <p>combined valuation</p>
        </div>
      </div>
      <div className="image">
        <img src={imgPanel} alt="Discussion Panel" />
      </div>
    </section>
  );
};

export default Hero;