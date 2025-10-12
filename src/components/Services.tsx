
import {
  FaCarSide,
  FaMoneyBillWave,
  FaTruckMoving,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import serviceBg from "../assets/images/service.png";

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

  return (
    <section className="services-section">
      {/* Transparent car background image */}
      <div className="services-bg">
        <img
          src={serviceBg}
          alt="Service background"
          className="services-bg-img"
        />
      </div>

      <div className="services-content">
        <span className="services-badge">#1 Car Marketplace in UK</span>

        <h1 className="services-title">
          Move and Find Your{" "}
          <span className="services-gradient-text">Perfect Ride</span>
        </h1>

        <p className="services-subtitle">
          Whether you’re buying, selling or transporting your Vehicle, TuudAuto
          makes it easy to find your next car, truck, or SUV.
        </p>

        <div className="services-grid">
          {features.map((f, i) => (
            <div key={i} className="services-card">
              <div className="services-icon">{f.icon}</div>
              <h3 className="services-card-title">{f.title}</h3>
              <p className="services-card-text">{f.text}</p>
              <div className="services-tags">
                {f.tags.map((tag, idx) => (
                  <span key={idx} className="services-tag">
                    {tag.icon}
                    {tag.text}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="services-footer">
          Trusted by thousands of car buyers and sellers
        </p>
      </div>
    </section>
  );
}
