import React, { useEffect } from "react";
import heroBg from "../assets/images/hero-bg.jpg";
import { motion, useAnimation } from "framer-motion";
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

const HeroSubline: React.FC = () => {
  const controls = heroSubItems.map(() => useAnimation());

  useEffect(() => {
    let index = 0;

    const loop = async () => {
      while (true) {
        const current = index % heroSubItems.length;
        const prev = (index - 1 + heroSubItems.length) % heroSubItems.length;

        if (index > 0) {
          await controls[prev].set({ opacity: 0, y: 20 });
        }

        await controls[current].start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
        await new Promise((r) => setTimeout(r, 1000));
        await controls[current].start({ opacity: 0, y: -20, transition: { duration: 0.5 } });

        index++;
      }
    };

    loop();
  }, []);

  return (
    <div className="relative h-[80px] md:h-[100px] overflow-hidden mb-4">
      {heroSubItems.map((item, i) => (
        <motion.h3
          key={i}
          className="absolute top-0 left-0 w-full text-2xl md:text-3xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={controls[i]}
        >
          {item}
        </motion.h3>
      ))}
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-[850px] overflow-visible py-20 md:py-24"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#36083b8c] to-[#490066bf] pointer-events-none z-0"></div>
      <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 items-start z-10 px-4 lg:px-10">
        <motion.div className="lg:pl-0 pl-2" initial="hidden" animate="visible" transition={{ staggerChildren: 0.15 }}>
          <motion.div className="inline-flex items-center gap-2 md:gap-3 bg-white/20 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg border-2 border-white/80 mb-4 font-semibold text-sm md:text-base" variants={pop}>
            <FaShieldAlt className="text-lg md:text-xl" />
            Trusted Car Transport Service
          </motion.div>
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[96px] font-extrabold leading-none mb-4" variants={fadeUp}>
            <span className="block font-medium">We Drive,</span>
            <span className="block bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent font-medium">
              You Relax
            </span>
          </motion.h1>
          <HeroSubline />
          <motion.p className="text-sm md:text-lg font-bold text-white/90 max-w-xl mb-6" variants={fadeUp}>
            Professional car shipping services with verified drivers. Safe, secure, and reliable transport nationwide.
          </motion.p>
          <motion.ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-green-100 font-medium mb-6" variants={fadeUp}>
            {["Fully Insured Transport", "Professional Drivers", "Real-time GPS Tracking", "Door-to-Door Service"].map((feat, i) => (
              <motion.li key={i} className="flex items-center gap-2" variants={pop}>
                <FaCheckCircle className="text-green-500 text-lg md:text-xl flex-shrink-0" />
                {feat}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-6 items-start sm:items-center">
            <motion.button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-700 to-pink-600 text-white py-3 md:py-4 px-6 md:px-8 rounded-xl font-semibold text-base md:text-lg w-auto" variants={pop}>
              <FaPhoneAlt /> Get Free Quote
            </motion.button>
            <motion.button className="inline-flex items-center gap-2 bg-white text-gray-900 py-3 md:py-4 px-6 md:px-8 rounded-xl font-semibold text-base md:text-lg w-auto" variants={pop}>
              Learn More <FaArrowRight />
            </motion.button>
          </motion.div>
          <motion.div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-white/80">
            <FaPhoneAlt className="text-green-500" /> 24/7 Support
            <FaMapMarkerAlt className="text-blue-500" /> Nationwide Service
          </motion.div>
        </motion.div>

        <motion.aside className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 md:p-10 flex flex-col gap-4 min-h-[460px] mt-10 lg:mt-24 text-white shadow-lg border border-white/20" initial="hidden" animate="visible" transition={{ staggerChildren: 0.1 }}>
          <motion.h4 className="text-center text-lg md:text-xl font-bold mb-2" variants={fadeUp}>Why Choose TuudAuto?</motion.h4>
          <motion.div className="flex justify-center mb-2 text-yellow-400 text-xl md:text-2xl" variants={pop}>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-yellow-300" />
          </motion.div>
          <motion.div className="text-center text-white/70 font-bold mb-4 text-sm md:text-base" variants={fadeUp}>Rated 4.9/5 by customers</motion.div>
          <motion.div className="grid grid-cols-2 gap-4 mb-4" variants={fadeUp}>
            {[
              { icon: FaClock, number: "24hrs", label: "Response Time", color: "text-pink-400 bg-white/10" },
              { icon: FaShieldAlt, number: "98%", label: "Success Rate", color: "text-pink-400 bg-white/10" },
              { icon: FaTruck, number: "10,000+", label: "Cars Transported", color: "text-pink-400 bg-white/10" },
              { icon: FaUserFriends, number: "5,000+", label: "Happy Clients", color: "text-pink-400 bg-white/10" },
            ].map((kpi, i) => {
              const Icon = kpi.icon;
              return (
                <motion.div key={i} className="flex flex-col items-center text-center" variants={pop}>
                  <div className={`w-14 h-14 flex items-center justify-center rounded-lg ${kpi.color} mb-2 text-2xl`}><Icon /></div>
                  <div className="font-bold text-lg">{kpi.number}</div>
                  <div className="text-sm text-white/70">{kpi.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.hr className="border-t border-white/10 my-2" variants={fadeUp} />
          <motion.div className="flex justify-around gap-2 md:gap-4" variants={fadeUp}>
            {[
              { icon: FaShieldAlt, text: "Fully Insured", color: "text-green-500 bg-green-100/20" },
              { icon: FaTruck, text: "GPS Tracked", color: "text-blue-400 bg-blue-100/20" },
              { icon: FaUserFriends, text: "Verified Drivers", color: "text-purple-400 bg-purple-100/20" },
            ].map((ci, i) => {
              const Icon = ci.icon;
              return (
                <motion.div key={i} className="flex flex-col items-center gap-1 text-xs md:text-sm" variants={pop}>
                  <div className={`w-12 h-12 flex items-center justify-center rounded-full ${ci.color}`}><Icon className="text-2xl" /></div>
                  {ci.text}
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
