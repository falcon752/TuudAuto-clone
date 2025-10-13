import { 
  FiShield, 
  FiClock, 
  FiStar, 
  FiShoppingCart, 
  FiSmile, 
} from "react-icons/fi";

import { GiSpeedometer } from "react-icons/gi";
import { MdTouchApp } from "react-icons/md";
import { motion } from "framer-motion";

export default function WhyChooseTuudAuto() {
  const features = [
    {
      icon: <FiShield size={50} color="#35003e" />,
      title: "Licensed & Insured",
      description: "All drivers are verified, licensed, and fully insured",
    },
    {
      icon: <FiClock size={50} color="#35003e" />,
      title: "Real-time Tracking",
      description: "Track your vehicle's journey from pickup to delivery",
    },
    {
      icon: <FiStar size={50} color="#35003e" />,
      title: "5-Star Service",
      description: "Exceptional customer service and support",
    },
  ];

  const stats = [
    {
      icon: <FiShoppingCart size={28} color="#fff" />,
      value: "156+",
      label: "Orders",
    },
    {
      icon: <FiSmile size={28} color="#fff" />,
      value: "118",
      label: "New Customers",
    },
    {
      icon: <GiSpeedometer size={28} color="#fff" />,
      value: "172%",
      label: "Growth",
    },
    {
      icon: <MdTouchApp size={28} color="#fff" />,
      value: "27%",
      label: "Bounce Rate",
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
    <section className="why-section">
      <motion.div
        className="why-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.15 }}
      >
        <motion.h2 variants={fadeUpDown} transition={{ duration: 0.7 }}>
          Why Choose TuudAuto
        </motion.h2>
        <motion.p variants={fadeUpDown} transition={{ duration: 0.7 }}>
          At TuudAuto, we're redefining how people buy, sell and move cars.
          With our trusted dealer network, transparent listings, and strong customer protection.
          Join the thousands who trust us for a smoother, safer, and smarter way to get behind the wheel.
        </motion.p>
      </motion.div>

      <div className="why-grids-wrapper">
        <motion.div
          className="why-features-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="why-feature-card"
              variants={pop}
              transition={{ duration: 0.5 }}
            >
              <motion.div className="why-feature-icon" variants={pop}>
                {feature.icon}
              </motion.div>
              <motion.h3 variants={fadeUpDown}>{feature.title}</motion.h3>
              <motion.p variants={fadeUpDown}>{feature.description}</motion.p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="why-stats-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="why-stat-card"
              variants={pop}
              transition={{ duration: 0.5 }}
            >
              <motion.div className="why-stat-icon" variants={pop}>
                {stat.icon}
              </motion.div>
              <motion.div className="why-stat-content">
                <motion.h3 variants={fadeUpDown}>{stat.value}</motion.h3>
                <motion.p variants={fadeUpDown}>{stat.label}</motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
