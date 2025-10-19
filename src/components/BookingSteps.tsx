import {
  FaCommentDots,
  FaPhoneAlt,
  FaClipboardCheck,
  FaCarSide,
} from "react-icons/fa";
import carKeyBg from "../assets/images/car-key.jpg";
import { motion } from "framer-motion";
import { StepBox } from "./ui/step-box";

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
      className="relative text-center text-black overflow-hidden py-[100px] px-5 bg-cover bg-center"
      style={{ backgroundImage: `url(${carKeyBg})` }}
    >
      <div className="absolute inset-0 bg-purple-300/30 backdrop-blur-sm z-0" />

      <motion.div
        className="relative z-10 max-w-[1350px] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.15 }}
      >
        <motion.h2
          className="text-[42px] font-bold mb-4"
          variants={fadeUpDown}
          transition={{ duration: 0.7 }}
        >
          How to book your service with TuudAuto?
        </motion.h2>

        <motion.p
          className="text-lg mb-1.5"
          variants={fadeUpDown}
          transition={{ duration: 0.7 }}
        >
          TuudAuto makes car shipping easy with a simple 4-step process.
        </motion.p>

        <motion.p
          className="text-lg font-medium text-black mb-15"
          variants={fadeUpDown}
          transition={{ duration: 0.7 }}
        >
          Get started today!
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
          variants={fadeUpDown}
          transition={{ staggerChildren: 0.15 }}
        >
          {steps.map((step, i) => (
            <StepBox
              key={i}
              icon={step.icon}
              title={step.title}
              description={step.desc}
              number={step.number}
              motionProps={{
                variants: pop,
                transition: { duration: 0.5 },
              }}
            />
          ))}
        </motion.div>

        {/* Quote Button with Glass Overlay */}
        <motion.button
          className="group relative bg-[#270031]/80 rounded-[15px] px-6 py-3 text-white text-[25px] font-medium cursor-pointer backdrop-blur-sm overflow-hidden transition-transform duration-300 scale-100"
          variants={pop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="relative z-10">Send Us a Quote</span>
          {/* Glass overlay */}
          <span className="absolute bottom-[-10px] right-[-10px] w-[40px] h-[40px] bg-white/25 rounded-full backdrop-blur-[10px] transition-all duration-300 group-hover:bottom-0 group-hover:right-0 group-hover:w-full group-hover:h-full group-hover:rounded-[15px]"></span>
        </motion.button>
      </motion.div>
    </section>
  );
}
