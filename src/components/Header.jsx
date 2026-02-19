// Header.jsx
import { Link } from "react-router-dom";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const paths = [
    { name: "Home", path: "/" },
    { name: "Collection", path: "/collection" },
  ];
  
  const icons = [
    <Search key="search" />, 
    <Heart key="heart" />, 
    <ShoppingCart key="cart" />, 
    <User key="user" />
  ];

  return (
    <nav className="w-full fixed top-0 flex bg-white items-center justify-around shadow-xl px-4 sm:px-6 md:px-10 py-4 z-50">
      {/* Logo */}
      <div className="flex group justify-between items-center cursor-pointer">
        <div className="w-12 sm:w-14 md:w-16 transition duration-300 group flex justify-center items-center relative">
          <div className="w-0.5 h-6 sm:h-7 md:h-8 absolute top-1 sm:top-1.25 left-3 sm:left-4 md:left-5 group-hover:bg-black bg-[#D4AF37] rotate-45 transition duration-300"></div>
          <div className="w-0.5 h-6 sm:h-7 md:h-8 absolute top-1 sm:top-1.25 right-3 sm:right-4 md:right-5 group-hover:bg-black bg-[#D4AF37] -rotate-45 transition duration-300"></div>
          <div className="w-0.5 h-6 sm:h-7 md:h-8 absolute bottom-1 sm:bottom-1.25 left-3 sm:left-4 md:left-5 group-hover:bg-black bg-[#D4AF37] -rotate-45 transition duration-300"></div>
          <div className="w-0.5 h-6 sm:h-7 md:h-8 absolute bottom-1 sm:bottom-1.25 right-3 sm:right-4 md:right-5 group-hover:bg-black bg-[#D4AF37] rotate-45 transition duration-300"></div>
        </div>
        <span className="font-bold text-lg sm:text-xl md:text-2xl">LUXERY</span>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex gap-8 xl:gap-20">
        {paths.map((ele, ind) => (
          <li key={ind} className="group">
            <Link
              to={ele.path}
              className="hover:text-[#D4AF37] font-semibold transition-all group duration-300"
            >
              {ele.name}
            </Link>
            <div className="w-0 group-hover:w-full transition-all duration-300 h-0.5 bg-[#D4AF37]"></div>
          </li>
        ))}
      </ul>

      {/* Desktop Icons */}
      <ul className="hidden md:flex gap-4 lg:gap-8">
        {icons.map((ele, ind) => (
          <li
            className="hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer"
            key={ind}
          >
            {ele}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden hover:text-[#D4AF37] transition-colors duration-300"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden">
          <ul className="flex flex-col py-4">
            {paths.map((ele, ind) => (
              <li key={ind} className="border-b border-gray-100">
                <Link
                  to={ele.path}
                  className="block px-6 py-3 hover:bg-gray-50 hover:text-[#D4AF37] font-semibold transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {ele.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex justify-center gap-8 py-4 border-t border-gray-100 md:hidden">
            {icons.map((ele, ind) => (
              <li
                className="hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer"
                key={ind}
              >
                {ele}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}