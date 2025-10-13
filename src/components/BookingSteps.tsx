import {
  FaCommentDots,
  FaPhoneAlt,
  FaClipboardCheck,
  FaCarSide,
} from "react-icons/fa";
import carKeyBg from "../assets/images/car-key.jpg";

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
  return (
    <section
      className="booking-section"
      style={{ backgroundImage: `url(${carKeyBg})` }}
    >
      <div className="booking-overlay" />
      <div className="booking-content">
        <h2 className="booking-title">
          How to book your service with TuudAuto?
        </h2>
        <p className="booking-subtitle">
          TuudAuto makes car shipping easy with a simple 4-step process.
        </p>
        <p className="booking-subtext">Get started today!</p>

        <div className="booking-grid">
          {steps.map((step, i) => (
            <div className="booking-card" key={i}>
              <div className="icon-circle">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              <span className="step-number">{step.number}</span>
            </div>
          ))}
        </div>

        <button className="quote-btn">
          <span>Send Us a Quote</span>
        </button>
      </div>
    </section>
  );
}
