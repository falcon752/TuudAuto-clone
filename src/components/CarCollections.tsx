import { useState, useRef } from "react";
import { FiCornerUpRight } from "react-icons/fi";
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
  price: string;
  img: string;
}

const cars: Car[] = [
  { id: 1, name: "Audi A3 Saloon", year: 2025, type: "Petrol", category: "Hatchback", seats: 5, price: "$32,390", img: car1 },
  { id: 2, name: "Tesla Model Y", year: 2025, type: "Electric", category: "Sedan", seats: 5, price: "$47,000", img: car2 },
  { id: 3, name: "Tesla Model 3 Long Range", year: 2025, type: "Electric", category: "Sedan", seats: 5, price: "$41,000", img: car3 },
  { id: 4, name: "BMW 3 Series", year: 2024, type: "Petrol", category: "Sedan", seats: 5, price: "$38,900", img: car4 },
  { id: 5, name: "Mercedes-Benz C-Class", year: 2024, type: "Diesel", category: "Sedan", seats: 5, price: "$43,500", img: car5 },
];

export default function CarCollections() {
  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % cars.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + cars.length) % cars.length);

  const handleDragStart = (x: number) => {
    setDragging(true);
    startX.current = x;
    if (sliderRef.current) sliderRef.current.style.transition = "none";
  };

  const handleDragMove = (x: number) => {
    if (!dragging) return;
    const diff = x - startX.current;
    currentTranslate.current = diff;
    if (sliderRef.current)
      sliderRef.current.style.transform = `translateX(calc(${-current * 300 - 100}px + ${diff}px))`; // shift left
  };

  const handleDragEnd = () => {
    setDragging(false);
    if (sliderRef.current) sliderRef.current.style.transition = "transform 0.5s ease";
    if (currentTranslate.current < -50) nextSlide();
    else if (currentTranslate.current > 50) prevSlide();
    else if (sliderRef.current) sliderRef.current.style.transform = `translateX(${-current * 300 - 100}px)`; // shift left
    currentTranslate.current = 0;
  };

  return (
    <div>
      <div className="car-header">
        <h1>Looking for a brand new or used car?</h1>
        <p>TuudAuto - where your dreams meet affordability</p>
      </div>

      <section className="car-section" style={{ backgroundImage: `url(${carBg})` }}>
        <div className="car-overlay">
          <div className="car-left">
            <h2>Our Car Collections</h2>
            <p>We have a wide range of car collections for you</p>
            <button className="discover-btn">
              Discover <FiCornerUpRight size={20} />
            </button>
          </div>

          <div className="car-slider">
            <button className="nav-btn prev" onClick={prevSlide}>❮</button>
            <div
              className="slides-container"
              ref={sliderRef}
              onMouseDown={(e) => handleDragStart(e.clientX)}
              onMouseMove={(e) => handleDragMove(e.clientX)}
              onMouseUp={handleDragEnd}
              onMouseLeave={dragging ? handleDragEnd : undefined}
              onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
              onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
              onTouchEnd={handleDragEnd}
              style={{ display: "flex", alignItems: "center", cursor: "grab", overflow: "visible", position: "relative" }}
            >
              {cars.map((car, index) => {
                let scale = 0.8, zIndex = 1, leftOffset = 0;

                if (index === current) { 
                  scale = 1.25; 
                  zIndex = 3; 
                  leftOffset = 0; 
                } 
                else if (index === (current - 1 + cars.length) % cars.length) { 
                  scale = 0.95; 
                  zIndex = 2; 
                  leftOffset = -220; 
                } 
                else if (index === (current + 1) % cars.length) { 
                  scale = 0.95; 
                  zIndex = 2; 
                  leftOffset = 220; 
                } 
                else if (index === (current - 2 + cars.length) % cars.length) { 
                  scale = 0.85; 
                  zIndex = 1; 
                  leftOffset = -440; 
                } 
                else if (index === (current + 2) % cars.length) { 
                  scale = 0.85; 
                  zIndex = 1; 
                  leftOffset = 440; 
                }

                return (
                  <div
                    key={car.id}
                    className="slide"
                    style={{
                      transform: `translateX(${leftOffset}px) scale(${scale})`,
                      zIndex,
                      position: "absolute",
                      transition: "transform 0.5s ease",
                    }}
                  >
                    <div className="slide-img">
                      <img src={car.img} alt={car.name} />
                    </div>
                    <div className="slide-content">
                      <h3>{car.name}</h3>
                      <p className="year">{car.year}</p>
                      <div className="details">
                        <span>{car.type}</span> • <span>{car.category}</span> • <span>{car.seats} Seats</span>
                      </div>
                      <p className="price">Starting from {car.price}</p>
                      <button className="view-btn">View Details</button>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="nav-btn next" onClick={nextSlide}>❯</button>
          </div>
        </div>
      </section>
    </div>
  );
}
