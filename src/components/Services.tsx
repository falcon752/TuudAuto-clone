import {
  FaCarSide,
  FaMoneyBillWave,
  FaTruckMoving,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import serviceBg from "../assets/images/service.png";
import { motion } from "framer-motion";

export default function Services() {
  const features = [
    {
      icon: <FaCarSide className="services-icon-svg" />,
      title: "Buy Your Perfect Car",
      text: "Browse thousands of listings with detailed filters and trusted reviews to help you make the right choice.",
      tags: [
        { icon: <FiCheckCircle />, text: "Verified Sellers" },
        { icon: <FaStar />, text: "Quality Checked" },
      ],
    },
    {
      icon: <FaMoneyBillWave className="services-icon-svg" />,
      title: "Sell With Confidence",
      text: "Get instant valuations and connect with millions of potential buyers. List your car for free and sell securely.",
      tags: [
        { icon: <FaStar />, text: "Best Price" },
        { icon: <FaShieldAlt />, text: "Secure Payment" },
      ],
    },
    {
      icon: <FaTruckMoving className="services-icon-svg" />,
      title: "Easy Transport",
      text: "Connect with experienced drivers to transport your newly acquired vehicle safely and securely.",
      tags: [
        { icon: <FaShieldAlt />, text: "Insured" },
        { icon: <FiCheckCircle />, text: "Trusted Drivers" },
      ],
    },
  ];

  const fadeUpDown = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const pop = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="services-section">
      <div className="services-bg">
        <motion.img
          src={serviceBg}
          alt="Service background"
          className="services-bg-img"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      <motion.div className="services-content" initial="hidden">
        <motion.span
          className="services-badge"
          variants={pop}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          initial="hidden"
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          #1 Car Marketplace in UK
        </motion.span>

        <motion.h1
          className="services-title"
          variants={fadeUpDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Move and Find Your{" "}
          <span className="services-gradient-text">Perfect Ride</span>
        </motion.h1>

        <motion.p
          className="services-subtitle"
          variants={fadeUpDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Whether you’re buying, selling or transporting your Vehicle, TuudAuto
          makes it easy to find your next car, truck, or SUV.
        </motion.p>

        <motion.div
          className="services-grid"
          variants={fadeUpDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="services-card"
              variants={pop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="services-icon"
                variants={pop}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {f.icon}
              </motion.div>
              <motion.h3
                className="services-card-title"
                variants={fadeUpDown}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                {f.title}
              </motion.h3>
              <motion.p
                className="services-card-text"
                variants={fadeUpDown}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                {f.text}
              </motion.p>
              <motion.div
                className="services-tags"
                variants={fadeUpDown}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ staggerChildren: 0.1 }}
              >
                {f.tags.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    className="services-tag"
                    variants={pop}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {tag.icon}
                    {tag.text}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="services-footer"
          variants={fadeUpDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Trusted by thousands of car buyers and sellers
        </motion.p>
      </motion.div>
    </section>
  );
}
