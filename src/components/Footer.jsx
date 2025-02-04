import React from 'react'
import logoYouGrow from './css/yougrow.jpg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column logo-column">
          <div className="footer-logo">
            <img src={logoYouGrow} alt="Logo"/>
          </div>
        </div>
        <div className="footer-column">
          <h4>Programs</h4>
          <ul>
            <li><a href="#">YG Program</a></li>
            <li><a href="#">Startup School</a></li>
            <li><a href="#">Work at a Startup</a></li>
            <li><a href="#">Co-Founder Matching</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">YG Blog</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">People</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Notice at Collection</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Startup Directory</a></li>
            <li><a href="#">Startup Library</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">SAFE</a></li>
            <li><a href="#">Hacker News</a></li>
            <li><a href="#">Launch YG</a></li>
            <li><a href="#">YG Deals</a></li>
          </ul>
        </div>
        <div class="footer-column apply-column">
          <p>Make something people want.</p>
          <a href="#" className="apply-button">Apply</a>
        </div>

        <div className="social-links">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/company/yougrow-y/?viewAsMember=true"><i class="fab fa-linkedin"></i></a>
          <a href="https://www.youtube.com/@yougrow.official"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 You Grow</p>
      </div>
    </footer>
  );
};

export default Footer;