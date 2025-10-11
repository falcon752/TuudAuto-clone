import React from "react";
import heroBg from "../assets/images/hero-bg.jpg";
import { motion, AnimatePresence } from "framer-motion";
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
  FaArrowRight,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

const heroSubItems = [
  "Trusted Nationwide Delivery",
  "Professional Auto Transport",
  "Premium Vehicle Logistics",
  "#1 Car Transport Service",
];

const Hero: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSubItems.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay" />

      <div className="container hero-inner">
        <div className="hero-left">
          <div className="badge">
            <FaShieldAlt className="badge-icon" />
            Trusted Car Transport Service
          </div>

          <h1 className="hero-title">
            <span className="line1">We Drive,</span>
            <span className="line2">You Relax</span>
          </h1>

          <div style={{ height: "100px", overflow: "hidden" }}>
            <AnimatePresence>
              <motion.h3
                key={heroSubItems[index]}
                className="hero-sub"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7 }}
              >
                {heroSubItems[index]}
              </motion.h3>
            </AnimatePresence>
          </div>

          <p className="hero-desc">
            Professional car shipping services with verified drivers. Safe,
            secure, and reliable transport nationwide.
          </p>

          <ul className="features-grid">
            <li>
              <FaCheckCircle className="feature-icon green-check" />
              Fully Insured Transport
            </li>
            <li>
              <FaCheckCircle className="feature-icon green-check" />
              Professional Drivers
            </li>
            <li>
              <FaCheckCircle className="feature-icon green-check" />
              Real-time GPS Tracking
            </li>
            <li>
              <FaCheckCircle className="feature-icon green-check" />
              Door-to-Door Service
            </li>
          </ul>

          <div className="hero-cta">
            <button className="btn primary">
              <FaPhoneAlt className="btn-icon" /> Get Free Quote
            </button>
            <button className="btn ghost">
              Learn More <FaArrowRight className="btn-icon" />
            </button>
          </div>

          <div className="support-row">
            <FaPhoneAlt className="icon" style={{ color: "#28a745" }} /> 24/7
            Support
            <FaMapMarkerAlt
              className="icon"
              style={{ color: "#007bff" }}
            />{" "}
            Nationwide Service
          </div>
        </div>

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
