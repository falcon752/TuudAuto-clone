import React from 'react';

import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="tuudauto-footer">
      {/* --- Top Section: Brand, Tagline, Social --- */}
      <div className="tuudauto-footer-top">
        <h2 className="tuudauto-brand">TuudAuto</h2>
        <p className="tuudauto-tagline">Your trusted partner in car transportation services. Professional, reliable, and secure.</p>
        <div className="tuudauto-social-links">
          {/* Replaced <i> tags with React Icons components */}
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* --- Links Section --- */}
      <div className="tuudauto-footer-links-container">
        {/* Services Section */}
        <div className="tuudauto-footer-section">
          <h3 className="tuudauto-section-title">Services</h3>
          <ul>
            <li><a href="#">Car Transport</a></li>
            <li><a href="#">Car Sourcing</a></li>
            <li><a href="#">Car History</a></li>
            <li><a href="#">Value Your Car</a></li>
          </ul>
        </div>
        
        {/* Support Section */}
        <div className="tuudauto-footer-section">
          <h3 className="tuudauto-section-title">Support</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Terms And Conditions</a></li>
            <li><a href="#">Customer Support</a></li>
          </ul>
        </div>
      </div>

      {/* --- Contact Info Section --- */}
      <div className="tuudauto-contact-info">
        {/* Replaced <i> tags with React Icons components */}
        <span className="contact-item">
          <FaPhone /> +1 (234) 567-890
        </span>
        <span className="contact-item">
          <FaEnvelope /> info@tuudauto.com
        </span>
        <span className="contact-item">
          <FaMapMarkerAlt /> 123 Transport Street, Auto City
        </span>
      </div>

      {/* --- Copyright Section --- */}
      <div className="tuudauto-copyright">
        &copy; 2025 TuudAuto. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;