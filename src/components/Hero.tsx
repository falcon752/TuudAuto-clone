import React from "react";
import heroBg from "../assets/images/hero-bg.jpg";
import {
  FaClock,
  FaLock,
  FaTruck,
  FaSmile,
  FaShieldAlt,
  FaSatelliteDish,
  FaUserCheck,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaQuoteRight,
  FaArrowRight,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay" />

      <div className="container hero-inner">

        <div className="hero-left">
          <div className="badge">Trusted Car Transport Service</div>

          <h1 className="hero-title">
            <span className="line1">We Drive,</span>
            <span className="line2">You Relax</span>
          </h1>

          <h3 className="hero-sub">Trusted Nationwide Delivery</h3>

          <p className="hero-desc">
            Professional car shipping services with verified drivers. Safe,
            secure, and reliable transport nationwide.
          </p>

          <ul className="features-grid">
            <li>
              <FaCheckCircle className="feature-icon" /> Fully Insured Transport
            </li>
            <li>
              <FaCheckCircle className="feature-icon" /> Professional Drivers
            </li>
            <li>
              <FaCheckCircle className="feature-icon" /> Real-time GPS Tracking
            </li>
            <li>
              <FaCheckCircle className="feature-icon" /> Door-to-Door Service
            </li>
          </ul>

          <div className="hero-cta">
            <button className="btn primary">
              <FaQuoteRight className="btn-icon" /> Get Free Quote
            </button>
            <button className="btn ghost">
              Learn More <FaArrowRight className="btn-icon" />
            </button>
          </div>

          <div className="support-row">
            <FaPhoneAlt className="icon" /> 24/7 Support
            <span> | </span>
            <FaMapMarkerAlt className="icon" /> Nationwide Service
          </div>
        </div>

        {/* RIGHT CARD */}
        <aside className="hero-card">
          <h4>Why Choose TuudAuto?</h4>
          <div className="rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar style={{ color: "#ffd24d" }} />
          </div>
          <div className="sub-rating">Rated 4.9/5 by customers</div>

          <div className="kpis">
            <div className="kpi">
              <div className="kpi-icon">
                <FaClock />
              </div>
              <div className="kpi-text">
                <div className="kpi-number">24hrs</div>
                <div className="kpi-label">Response Time</div>
              </div>
            </div>

            <div className="kpi">
              <div className="kpi-icon">
                <FaLock />
              </div>
              <div className="kpi-text">
                <div className="kpi-number">98%</div>
                <div className="kpi-label">Success Rate</div>
              </div>
            </div>

            <div className="kpi">
              <div className="kpi-icon">
                <FaTruck />
              </div>
              <div className="kpi-text">
                <div className="kpi-number">10,000+</div>
                <div className="kpi-label">Cars Transported</div>
              </div>
            </div>

            <div className="kpi">
              <div className="kpi-icon">
                <FaSmile />
              </div>
              <div className="kpi-text">
                <div className="kpi-number">5,000+</div>
                <div className="kpi-label">Happy Clients</div>
              </div>
            </div>
          </div>

          <hr />

          <div className="card-icons">
            <div className="ci">
              <FaShieldAlt /> Fully Insured
            </div>
            <div className="ci">
              <FaSatelliteDish /> GPS Tracked
            </div>
            <div className="ci">
              <FaUserCheck /> Verified Drivers
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
