import { useState } from "react";

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
  price: string;
  img: string;
}

const cars: Car[] = [
  {
    id: 1,
    name: "Audi A3 Saloon",
    year: 2025,
    type: "Petrol",
    category: "Hatchback",
    seats: 5,
    doors: 5,
    price: "$32,390",
    img: car1,
  },
  {
    id: 2,
    name: "Tesla Model Y",
    year: 2025,
    type: "Electric",
    category: "Sedan",
    seats: 5,
    doors: 5,
    price: "$47,000",
    img: car2,
  },
  {
    id: 3,
    name: "Tesla Model 3 Long Range",
    year: 2025,
    type: "Electric",
    category: "Sedan",
    seats: 5,
    doors: 5,
    price: "$41,000",
    img: car3,
  },
  {
    id: 4,
    name: "BMW 3 Series",
    year: 2024,
    type: "Petrol",
    category: "Sedan",
    seats: 5,
    doors: 5,
    price: "$38,900",
    img: car4,
  },
  {
    id: 5,
    name: "Mercedes-Benz C-Class",
    year: 2024,
    type: "Diesel",
    category: "Sedan",
    seats: 5,
    doors: 5,
    price: "$43,500",
    img: car5,
  },
];

export default function CarCollections() {
  const [current, setCurrent] = useState<number>(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % cars.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + cars.length) % cars.length);
  };

  const getVisibleSlides = (): Car[] => {
    const visible: Car[] = [];
    for (let i = 0; i < 4; i++) {
      visible.push(cars[(current + i) % cars.length]);
    }
    return visible;
  };

  const visibleCars = getVisibleSlides();

  return (
    <section
      className="car-section"
      style={{ backgroundImage: `url(${carBg})` }}
    >
      <div className="car-overlay">
        <div className="car-left">
          <h2>Our Car Collections</h2>
          <p>We have a wide range of car collections for you</p>
          <button className="discover-btn">Discover →</button>
        </div>

        <div className="car-slider">
          <button className="nav-btn prev" onClick={prevSlide}>
            ❮
          </button>

          <div className="slides-container">
            {visibleCars.map((car) => (
              <div key={car.id} className="slide">
                <img src={car.img} alt={car.name} />
                <div className="slide-content">
                  <h3>{car.name}</h3>
                  <p className="year">{car.year}</p>
                  <div className="details">
                    <span>{car.type}</span> • <span>{car.category}</span> •{" "}
                    <span>{car.seats} Seats</span>
                  </div>
                  <p className="price">Starting from {car.price}</p>
                  <button className="view-btn">View Details</button>
                </div>
              </div>
            ))}
          </div>

          <button className="nav-btn next" onClick={nextSlide}>
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}
