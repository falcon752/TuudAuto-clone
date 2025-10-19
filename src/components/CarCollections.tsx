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

const CarCard: React.FC<CarCardProps> = ({ car }) => (
  <div className="bg-white rounded-xl shadow-lg w-full max-w-[300px] overflow-hidden min-h-[480px] relative">
    <div className="absolute top-3 right-3 bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full z-10">
      NEW
    </div>
    <div className="w-full h-48 overflow-hidden">
      <img
        src={car.img}
        alt={car.name}
        className="w-full h-full object-cover rounded-t-xl"
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold mb-3 relative pr-16">
        {car.name}
        <span className="absolute top-0 right-0 text-gray-500 text-base font-semibold">
          {car.year}
        </span>
      </h3>
      <div className="grid grid-cols-2 gap-2 mb-4 text-gray-600 text-sm">
        <div className="flex items-center gap-2">
          <FaGasPump />
          {car.type}
        </div>
        <div className="flex items-center gap-2">
          <FaCog />
          {car.transmission}
        </div>
        <div className="flex items-center gap-2">
          <FaCar />
          {car.category}
        </div>
        <div className="flex items-center gap-2">
          <FaUsers />
          {car.seats} Seats
        </div>
        <div className="flex items-center gap-2">
          <FaDoorOpen />
          {car.doors} Doors
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center mt-4">
        <p className="text-gray-500 text-sm w-full">Starting from</p>
        <p className="text-purple-900 text-2xl font-extrabold mr-4">
          ${car.price}
        </p>
        <button className="bg-purple-900 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-purple-700 transition w-max mt-2">
          View Details
        </button>
      </div>
    </div>
  </div>
);

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

  const buttonClasses =
    "bg-purple-900 text-white w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-purple-700 z-20";

  return (
    <div>
      <div className="w-full py-16 px-4 text-center bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-700 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Looking for a brand new or used car?
        </h1>
        <p className="text-lg md:text-xl opacity-90">
          TuudAuto - where your dreams meet affordability
        </p>
      </div>

      <section
        className="relative bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${carBg})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        {/* Responsive layout: mobile stacks, desktop side-by-side */}
        <div className="relative z-10 w-full">
          {/* Desktop: absolute left panel, relative carousel; Mobile: stacked */}
          <div className="md:absolute md:left-0 md:top-0 md:w-[35%] md:h-[700px] w-full bg-purple-900/60 p-6 flex flex-col justify-start items-center md:items-start text-white z-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">Our Car Collections</h2>
            <p className="text-lg md:text-xl mb-4 text-center md:text-left">We have a wide range of car collections for you</p>
            <button className="flex items-center gap-2 bg-blue-600 border border-white px-6 py-3 rounded-full font-semibold text-lg hover:scale-105 transition-transform">
              Discover <FiCornerUpRight size={20} />
            </button>
          </div>

          <div className="md:relative md:ml-[35%] w-full md:w-[65%] flex flex-col items-center justify-center">
            <div className="relative w-full h-[320px] md:h-[700px] flex items-center justify-center py-8 md:py-0">
              {/* Change buttons overlaying slides */}
              <button
                className={`absolute left-4 top-1/2 -translate-y-1/2 ${buttonClasses}`}
                onClick={prevSlide}
              >
                ❮
              </button>
              <button
                className={`absolute right-4 top-1/2 -translate-y-1/2 ${buttonClasses}`}
                onClick={nextSlide}
              >
                ❯
              </button>

              <div
                className="flex items-center justify-center relative h-full w-full cursor-grab"
                onMouseDown={(e) => handleDragStart(e.clientX)}
                onMouseMove={(e) => handleDragMove(e.clientX)}
                onMouseUp={handleDragEnd}
                onMouseLeave={dragging ? handleDragEnd : undefined}
                onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
                onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
                onTouchEnd={handleDragEnd}
              >
                {cars.map((car, index) => {
                  const offset = isMobile ? 80 : 250;
                  let scale = 0.8;
                  let zIndex = 1;
                  let leftOffset = 0;

                  if (index === current) {
                    scale = 1;
                    zIndex = 3;
                    leftOffset = 0;
                  } else if (index === (current - 1 + cars.length) % cars.length) {
                    scale = 0.9;
                    zIndex = 2;
                    leftOffset = -offset;
                  } else if (index === (current + 1) % cars.length) {
                    scale = 0.9;
                    zIndex = 2;
                    leftOffset = offset;
                  } else if (index === (current - 2 + cars.length) % cars.length) {
                    leftOffset = -offset * 2;
                  } else if (index === (current + 2) % cars.length) {
                    leftOffset = offset * 2;
                  }

                  return (
                    <div
                      key={car.id}
                      className="absolute transition-transform duration-500"
                      style={{
                        transform: `translateX(${leftOffset}px) scale(${scale})`,
                        zIndex,
                      }}
                    >
                      <CarCard car={car} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
