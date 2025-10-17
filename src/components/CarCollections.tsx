import { useState, useRef, useEffect } from "react";
import { FiCornerUpRight } from "react-icons/fi";
import { FaGasPump, FaCog, FaCar, FaUsers, FaDoorOpen } from "react-icons/fa";
import car1 from "../assets/images/car-1.png";
import car2 from "../assets/images/car-2.png";
import car3 from "../assets/images/car-3.png";
import car4 from "../assets/images/car-4.png";
import car5 from "../assets/images/car-5.png";
import carBg from "../assets/images/car-bg.jpg";

interface Car {
  id: number;
  name: string;
  year: number;
  type: string;
  category: string;
  seats: number;
  doors: number;
  transmission: string;
  price: string;
  img: string;
}

const cars: Car[] = [
  {
    id: 1,
    name: "Mercedes-Benz A 200 Sport Executive Hatchback",
    year: 2026,
    type: "Petrol",
    category: "Hatchback",
    seats: 5,
    doors: 5,
    transmission: "Automatic",
    price: "30,110",
    img: car1,
  },
  {
    id: 2,
    name: "Tesla Model Y",
    year: 2025,
    type: "Electric",
    category: "Sedan",
    seats: 5,
    doors: 4,
    transmission: "Automatic",
    price: "47,000",
    img: car2,
  },
  {
    id: 3,
    name: "Tesla Model 3 Long Range",
    year: 2025,
    type: "Electric",
    category: "Sedan",
    seats: 5,
    doors: 4,
    transmission: "Automatic",
    price: "41,000",
    img: car3,
  },
  {
    id: 4,
    name: "BMW 3 Series",
    year: 2024,
    type: "Petrol",
    category: "Sedan",
    seats: 5,
    doors: 4,
    transmission: "Automatic",
    price: "38,900",
    img: car4,
  },
  {
    id: 5,
    name: "Mercedes-Benz C-Class",
    year: 2024,
    type: "Diesel",
    category: "Sedan",
    seats: 5,
    doors: 4,
    transmission: "Automatic",
    price: "43,500",
    img: car5,
  },
];

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="car-card-new">
      <div className="car-tag">NEW</div>
      <div className="car-image-container">
        <img src={car.img} alt={car.name} className="car-image" />
      </div>
      <div className="car-info">
        <h3 className="car-name">
          {car.name}
          <span className="car-year">{car.year}</span>
        </h3>
        <div className="car-details-grid">
          <div className="detail-item">
            <FaGasPump size={20} />
            <span>{car.type}</span>
          </div>
          <div className="detail-item">
            <FaCog size={20} />
            <span>{car.transmission}</span>
          </div>
          <div className="detail-item">
            <FaCar size={20} />
            <span>{car.category}</span>
          </div>
          <div className="detail-item">
            <FaUsers size={20} />
            <span>{car.seats} Seats</span>
          </div>
          <div className="detail-item">
            <FaDoorOpen size={20} />
            <span>{car.doors} Doors</span>
          </div>
        </div>
        <div className="car-price-row">
          <p className="car-price-label">Starting from</p>
          <p className="car-price-value">${car.price}</p>
          <button className="view-details-btn">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default function CarCollections() {
  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % cars.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + cars.length) % cars.length);

  const handleDragStart = (x: number) => {
    setDragging(true);
    startX.current = x;
  };

  const handleDragMove = (x: number) => {
    if (!dragging) return;
    currentTranslate.current = x - startX.current;
  };

  const handleDragEnd = () => {
    if (!dragging) return;
    setDragging(false);
    if (currentTranslate.current < -50) nextSlide();
    else if (currentTranslate.current > 50) prevSlide();
    currentTranslate.current = 0;
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#35003e",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "45px",
    height: "45px",
    fontSize: "22px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  };

  return (
    <div>
      <div className="car-header">
        <h1>Looking for a brand new or used car?</h1>
        <p>TuudAuto - where your dreams meet affordability</p>
      </div>

      <section
        className="car-section"
        style={{ backgroundImage: `url(${carBg})` }}
      >
        <div className="car-overlay">
          <div className="car-left">
            <h2>Our Car Collections</h2>
            <p>We have a wide range of car collections for you</p>
            <button className="discover-btn">
              Discover <FiCornerUpRight size={20} />
            </button>
          </div>

          <div className="car-slider">
            <button
              className="nav-btn prev"
              onClick={prevSlide}
              style={buttonStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#2a0032")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#35003e")
              }
            >
              ❮
            </button>

            <div
              className="slides-container"
              onMouseDown={(e) => handleDragStart(e.clientX)}
              onMouseMove={(e) => handleDragMove(e.clientX)}
              onMouseUp={handleDragEnd}
              onMouseLeave={dragging ? handleDragEnd : undefined}
              onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
              onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
              onTouchEnd={handleDragEnd}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: dragging ? "grabbing" : "grab",
                overflow: "visible",
                position: "relative",
                height: "100%",
                padding: "20px 0",
              }}
            >
              {cars.map((car, index) => {
                const offsetDistance = isMobile ? 80 : 250;
                let scale = isMobile ? 0.8 : 0.8;
                let zIndex = 1;
                let leftOffset = 0;

                if (index === current) {
                  scale = isMobile ? 1 : 1;
                  zIndex = 3;
                  leftOffset = 0;
                } else if (
                  index ===
                  (current - 1 + cars.length) % cars.length
                ) {
                  scale = 0.9;
                  zIndex = 2;
                  leftOffset = -offsetDistance;
                } else if (index === (current + 1) % cars.length) {
                  scale = 0.9;
                  zIndex = 2;
                  leftOffset = offsetDistance;
                } else if (
                  index ===
                  (current - 2 + cars.length) % cars.length
                ) {
                  scale = 0.8;
                  zIndex = 1;
                  leftOffset = -offsetDistance * 2;
                } else if (index === (current + 2) % cars.length) {
                  scale = 0.8;
                  zIndex = 1;
                  leftOffset = offsetDistance * 2;
                }

                return (
                  <div
                    key={car.id}
                    className="slide-wrapper"
                    style={{
                      transform: `translateX(${leftOffset}px) scale(${scale})`,
                      zIndex,
                      position: "absolute",
                      transition: "transform 0.5s ease",
                    }}
                  >
                    <CarCard car={car} />
                  </div>
                );
              })}
            </div>

            <button
              className="nav-btn next"
              onClick={nextSlide}
              style={buttonStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#2a0032")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#35003e")
              }
            >
              ❯
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}