import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  features: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, features }) => (
  <div className="services-feature-card">
    <h3 className="services-feature-title">{title}</h3>
    <p className="services-feature-description">{description}</p>
    <div className="services-feature-tags">
      {features.map((feature, index) => (
        <span key={index} className="services-feature-tag">{feature}</span>
      ))}
    </div>
  </div>
);

const Services: React.FC = () => {
  const features = [
    {
      title: "Buy Your Perfect Car",
      description: "Browse thousands of listings with detailed filters and trusted reviews to help you make the right choice.",
      features: ["Verified Sellers", "Quality Checked"]
    },
    {
      title: "Sell With Confidence",
      description: "Get instant valuations and connect with millions of potential buyers. List your car for free and sell securely.",
      features: ["Best Price", "Secure Payment"]
    },
    {
      title: "Easy Transport",
      description: "Connect with experienced drivers to transport your newly acquired vehicle safely and securely.",
      features: ["Insured", "Trusted Drivers"]
    }
  ];

  return (
    <div className="services-container">
      {/* Hero Section */}
      <section className="services-hero-section">
        <div className="services-hero-content">
          <div className="services-badge">#1 Car Marketplace in UK</div>
          <h1 className="services-hero-title">Move and Find Your Perfect Ride</h1>
          <p className="services-hero-subtitle">
            Whether you're buying, selling or transporting your Vehicle, ToudAuto makes it easy to find your next car, truck, or SUV.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="services-features-section">
        <div className="services-features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              features={feature.features}
            />
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="services-trust-section">
        <div className="services-trust-content">
          <p className="services-trust-text">Trusted by thousands of car buyers and sellers</p>
        </div>
      </section>
    </div>
  );
};

export default Services;