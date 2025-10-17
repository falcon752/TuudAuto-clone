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
      icon: <FaCarSide className="text-purple-600 text-2xl" />,
      title: "Buy Your Perfect Car",
      text: "Browse thousands of listings with detailed filters and trusted reviews to help you make the right choice.",
      tags: [
        { icon: <FiCheckCircle />, text: "Verified Sellers" },
        { icon: <FaStar />, text: "Quality Checked" },
      ],
    },
    {
      icon: <FaMoneyBillWave className="text-purple-600 text-2xl" />,
      title: "Sell With Confidence",
      text: "Get instant valuations and connect with millions of potential buyers. List your car for free and sell securely.",
      tags: [
        { icon: <FaStar />, text: "Best Price" },
        { icon: <FaShieldAlt />, text: "Secure Payment" },
      ],
    },
    {
      icon: <FaTruckMoving className="text-purple-600 text-2xl" />,
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
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-100 py-24 px-4 md:px-8">
      {/* Background Image */}
      <motion.img
        src={serviceBg}
        alt="Service background"
        className="absolute top-[40%] right-[-30%] w-[700px] lg:w-[800px] xl:w-[900px] max-w-none -translate-y-1/2 pointer-events-none"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center"
        initial="hidden"
      >
        <motion.span
          className="inline-block bg-purple-100 text-purple-600 font-medium text-sm px-4 py-1 rounded-full mb-3"
          variants={pop}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          initial="hidden"
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          #1 Car Marketplace in UK
        </motion.span>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-gray-900 mb-4"
          variants={fadeUpDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Move and Find Your{" "}
          <span className="block bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Perfect Ride
          </span>
        </motion.h1>

        <motion.p
          className="text-gray-500 max-w-xl mx-auto mb-16 text-base sm:text-lg leading-relaxed"
          variants={fadeUpDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Whether you’re buying, selling, or transporting your Vehicle, TuudAuto
          makes it easy to find your next car, truck, or SUV.
        </motion.p>

        {/* Features Grid */}
        <motion.div
          className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3"
          variants={fadeUpDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 text-left hover:-translate-y-1 hover:shadow-lg transition-transform duration-300"
              variants={pop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-12 h-12 flex items-center justify-center rounded-lg mb-4 bg-gradient-to-br from-purple-200/25 to-blue-200/25"
                variants={pop}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {f.icon}
              </motion.div>

              <motion.h3
                className="font-semibold text-gray-900 text-lg mb-2"
                variants={fadeUpDown}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                {f.title}
              </motion.h3>

              <motion.p
                className="text-gray-500 text-sm mb-4"
                variants={fadeUpDown}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                {f.text}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3 text-gray-500 text-sm"
                variants={fadeUpDown}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ staggerChildren: 0.1 }}
              >
                {f.tags.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    className="flex items-center gap-1"
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
          className="mt-10 text-gray-400 text-sm"
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
