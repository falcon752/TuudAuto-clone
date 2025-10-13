import {
  FaCommentDots,
  FaPhoneAlt,
  FaClipboardCheck,
  FaCarSide,
} from "react-icons/fa";
import carKeyBg from "../assets/images/car-key.jpg";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <FaCommentDots />,
    title: "Quick Quote",
    desc: "Take 2 minutes to tell us what you need - that's all it takes to start!",
    number: "01",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Expert Chat",
    desc: "Our friendly team reaches out with your personalized transport plan",
    number: "02",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Easy Booking",
    desc: "Happy with the plan? Lock in your spot with simple confirmation",
    number: "03",
  },
  {
    icon: <FaCarSide />,
    title: "Smooth Delivery",
    desc: "Sit back and relax! Track your car's journey to its destination",
    number: "04",
  },
];

export default function BookingSteps() {
  const fadeUpDown = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const pop = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section
      className="booking-section"
      style={{ backgroundImage: `url(${carKeyBg})` }}
    >
      <div className="booking-overlay" />

      <motion.div
        className="booking-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.15 }}
      >
        <motion.h2 className="booking-title" variants={fadeUpDown} transition={{ duration: 0.7 }}>
          How to book your service with TuudAuto?
        </motion.h2>
        <motion.p className="booking-subtitle" variants={fadeUpDown} transition={{ duration: 0.7 }}>
          TuudAuto makes car shipping easy with a simple 4-step process.
        </motion.p>
        <motion.p className="booking-subtext" variants={fadeUpDown} transition={{ duration: 0.7 }}>
          Get started today!
        </motion.p>

        <motion.div className="booking-grid" variants={fadeUpDown} transition={{ staggerChildren: 0.15 }}>
          {steps.map((step, i) => (
            <motion.div
              className="booking-card"
              key={i}
              variants={pop}
              transition={{ duration: 0.5 }}
            >
              <motion.div className="icon-circle" variants={pop}>
                {step.icon}
              </motion.div>
              <motion.h3 variants={fadeUpDown}>{step.title}</motion.h3>
              <motion.p variants={fadeUpDown}>{step.desc}</motion.p>
              <motion.span className="step-number" variants={pop}>
                {step.number}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          className="quote-btn"
          variants={pop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span>Send Us a Quote</span>
        </motion.button>
      </motion.div>
    </section>
  );
}
