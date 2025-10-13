import { 
  FiShield, 
  FiClock, 
  FiStar, 
  FiShoppingCart, 
  FiSmile, 
} from "react-icons/fi";

import { GiSpeedometer } from "react-icons/gi";
import { MdTouchApp } from "react-icons/md";



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

  return (
    <section className="why-section">
      <div className="why-header">
        <h2>Why Choose TuudAuto</h2>
        <p>
          At TuudAuto, we're redefining how people buy, sell and move cars.
          With our trusted dealer network, transparent listings, and strong customer protection.
          Join the thousands who trust us for a smoother, safer, and smarter way to get behind the wheel.
        </p>
      </div>

      <div className="why-grids-wrapper">
        <div className="why-features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="why-feature-card">
              <div className="why-feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="why-stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="why-stat-card">
              <div className="why-stat-icon">{stat.icon}</div>
              <div className="why-stat-content">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
