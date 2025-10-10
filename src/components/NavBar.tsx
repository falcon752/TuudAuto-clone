import React from "react";
import { FaSearch, FaPhoneAlt } from "react-icons/fa";

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

          <button className="sign-in">
            Sign In
          </button>
        </nav>
      </div>

      <nav className="top-links">
        <div className="container links-inner">
          <ul>
            <li className="active">Home</li>
            <li>New Cars</li>
            <li>Used Cars</li>
            <li>Car Sourcing</li>
            <li>Sell Your Car</li>
            <li>Car History</li>
            <li>Value Your Car</li>
            <li>Transport Car</li>
            <li>Pricing</li>
            <li>Support</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
