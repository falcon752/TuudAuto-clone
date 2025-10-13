import React from "react";
import heroBg from "../assets/images/hero-bg.jpg";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaClock,
  FaTruck,
  FaUserFriends,
  FaShieldAlt,
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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const pop = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

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
        <motion.div
          className="hero-left"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.div className="badge" variants={pop}>
            <FaShieldAlt className="badge-icon" />
            Trusted Car Transport Service
          </motion.div>

          <motion.h1 className="hero-title" variants={fadeUp}>
            <span className="line1">We Drive,</span>
            <span className="line2">You Relax</span>
          </motion.h1>

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

          <motion.p className="hero-desc" variants={fadeUp}>
            Professional car shipping services with verified drivers. Safe,
            secure, and reliable transport nationwide.
          </motion.p>

          <motion.ul className="features-grid" variants={fadeUp}>
            {["Fully Insured Transport", "Professional Drivers", "Real-time GPS Tracking", "Door-to-Door Service"].map((feat, i) => (
              <motion.li key={i} variants={pop}>
                <FaCheckCircle className="feature-icon green-check" />
                {feat}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div className="hero-cta" variants={fadeUp}>
            <motion.button className="btn primary" variants={pop}>
              <FaPhoneAlt className="btn-icon" /> Get Free Quote
            </motion.button>
            <motion.button className="btn ghost" variants={pop}>
              Learn More <FaArrowRight className="btn-icon" />
            </motion.button>
          </motion.div>

          <motion.div className="support-row" variants={fadeUp}>
            <FaPhoneAlt className="icon" style={{ color: "#28a745" }} /> 24/7
            Support
            <FaMapMarkerAlt className="icon" style={{ color: "#007bff" }} />{" "}
            Nationwide Service
          </motion.div>
        </motion.div>

        <motion.aside
          className="hero-card"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.h4 variants={fadeUp}>Why Choose TuudAuto?</motion.h4>
          <motion.div className="rating" variants={pop}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar style={{ color: "#ffd24d" }} />
          </motion.div>
          <motion.div className="sub-rating" variants={fadeUp}>
            Rated 4.9/5 by customers
          </motion.div>

          <motion.div className="kpis" variants={fadeUp}>
            {[
              { icon: FaClock, number: "24hrs", label: "Response Time" },
              { icon: FaShieldAlt, number: "98%", label: "Success Rate" },
              { icon: FaTruck, number: "10,000+", label: "Cars Transported" },
              { icon: FaUserFriends, number: "5,000+", label: "Happy Clients" },
            ].map((kpi, i) => {
              const Icon = kpi.icon;
              return (
                <motion.div className="kpi" key={i} variants={pop}>
                  <div className="kpi-icon">
                    <Icon />
                  </div>
                  <div className="kpi-text">
                    <div className="kpi-number">{kpi.number}</div>
                    <div className="kpi-label">{kpi.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.hr variants={fadeUp} />

          <motion.div className="card-icons" variants={fadeUp}>
            {[
              { icon: FaShieldAlt, text: "Fully Insured" },
              { icon: FaTruck, text: "GPS Tracked" },
              { icon: FaUserFriends, text: "Verified Drivers" },
            ].map((ci, i) => {
              const Icon = ci.icon;
              return (
                <motion.div className="ci" key={i} variants={pop}>
                  <Icon /> {ci.text}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.aside>
      </div>
    </section>
  );
};

export default Hero;
