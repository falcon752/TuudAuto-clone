import React from "react";

import {
  FaSearch,
  FaPhoneAlt,
  FaHome,
  FaCar,
  FaHandshake,
  FaTag,
  FaHistory,
  FaCalculator,
  FaTruck,
  FaHeadset,
} from "react-icons/fa";

const NavBar: React.FC = () => {
  return (
    <header className="tuud-navbar">
      <div className="tuud-navbar-inner container">
        <div className="brand-and-search">
          <div className="brand">
            <span className="logo-mark">Tuud</span>
            <span className="logo-accent">Auto</span>
          </div>

          <div className="search-wrap">
            <input
              className="search-input"
              type="search"
              placeholder="Search by brand, model, or keyword..."
              aria-label="Search"
            />
            <button className="search-btn" aria-label="Search">
              <FaSearch />
            </button>
          </div>
        </div>

        <nav className="nav-actions">
          <div className="contact">
            <div className="help">Need Help?</div>
            <div className="phone">
              <FaPhoneAlt className="phone-icon" /> +880 562 256 254
            </div>
          </div>

          <button className="sign-in">Sign In</button>
        </nav>
      </div>

      <nav className="top-links">
        <div className="container links-inner">
          <ul>
            <li className="active">
              <FaHome className="nav-icon" /> Home
            </li>
            <li>
              <FaCar className="nav-icon" /> New Cars
            </li>
            <li>
              <FaCar className="nav-icon" /> Used Cars
            </li>
            <li>
              <FaHandshake className="nav-icon" /> Car Sourcing
            </li>
            <li>
              <FaTag className="nav-icon" /> Sell Your Car
            </li>
            <li>
              <FaHistory className="nav-icon" /> Car History
            </li>
            <li>
              <FaCalculator className="nav-icon" /> Value Your Car
            </li>
            <li>
              <FaTruck className="nav-icon" /> Transport Car
            </li>
            <li>
              <FaCalculator className="nav-icon" /> Pricing
            </li>
            <li>
              <FaHeadset className="nav-icon" /> Support
            </li>
          </ul>
        </div>
      </nav>
      
    </header>
  );
};

export default NavBar;
