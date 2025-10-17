import React, { useState } from "react";
import {
  FaSearch,
  FaPhoneAlt,
  FaHome,
  FaCar,
  FaHandshake,
  FaTag,
  FaHistory,
  FaCalculator,
  FaTruck,
  FaHeadset,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { icon: FaHome, label: "Home" },
    { icon: FaCar, label: "New Cars" },
    { icon: FaCar, label: "Used Cars" },
    { icon: FaHandshake, label: "Car Sourcing" },
    { icon: FaTag, label: "Sell Your Car" },
    { icon: FaHistory, label: "Car History" },
    { icon: FaCalculator, label: "Value Your Car" },
    { icon: FaTruck, label: "Transport Car" },
    { icon: FaCalculator, label: "Pricing" },
    { icon: FaHeadset, label: "Support" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between h-20 px-4 max-w-[1200px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="flex items-center font-semibold text-2xl sm:text-3xl">
            <span className="text-[#2b0b2b]">Tuud</span>
            <span className="text-[#a14dc7]">Auto</span>
          </div>

          {/* Search (hidden on mobile until md) */}
          <div className="hidden md:flex items-center border border-gray-400 rounded-full shadow-inner px-2">
            <input
              type="search"
              placeholder="Search by brand, model, or keyword..."
              className="outline-none bg-transparent px-3 py-1 w-[400px] lg:w-[600px] text-sm sm:text-base"
            />
            <button className="bg-[#270131] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#a14dc7] transition-all">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex flex-col text-xs text-gray-500 hover:bg-gray-100 rounded px-2 py-1 transition">
            <div className="ml-4">Need Help?</div>
            <div className="flex items-center gap-1.5 font-medium text-gray-900 text-sm">
              <FaPhoneAlt className="text-sm" /> +880 562 256 254
            </div>
          </div>
          <button className="bg-[#270131] text-white px-4 py-2 rounded-full font-medium hover:bg-[#a14dc7] hover:scale-105 transition-all text-sm sm:text-base">
            Sign In
          </button>
        </div>

        {/* Hamburger Menu for mobile */}
        <button
          className="md:hidden flex items-center text-[#270131]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Desktop Top Links (1024px+) */}
      <nav className="hidden md:flex bg-[#270131] text-white">
        <div className="flex justify-center items-center h-12 gap-3 px-4 overflow-x-auto max-w-[1200px] mx-auto">
          {navLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-1.5 px-2 py-1 rounded font-medium text-xs sm:text-sm cursor-pointer hover:scale-105 hover:bg-purple-700 transition ${
                  idx === 0 ? "bg-white/10 shadow-inner" : ""
                }`}
              >
                <Icon className="text-base sm:text-lg" />
                {item.label}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Mobile Menu 0–1023px */}
      {menuOpen && (
        <nav className="md:hidden bg-[#270131] text-white px-4 py-4 flex flex-col gap-2">
          {navLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 font-medium text-sm cursor-pointer hover:text-purple-400 transition"
              >
                <Icon className="text-base" />
                {item.label}
              </div>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default NavBar;
