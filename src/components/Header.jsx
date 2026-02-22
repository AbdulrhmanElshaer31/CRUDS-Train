// Header.jsx
import { NavLink } from "react-router-dom";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [favCount, setFavCount] = useState(0);

  useEffect(() => {
    const updateCounts = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
      setCartCount(cart.length);
      setFavCount(favs.length);
    };
    updateCounts();
    window.addEventListener("cartUpdated", updateCounts);
    window.addEventListener("favUpdated", updateCounts);
    return () => {
      window.removeEventListener("cartUpdated", updateCounts);
      window.removeEventListener("favUpdated", updateCounts);
    };
  }, []);

  const paths = [
    { name: "Home", path: "/" },
    { name: "Collection", path: "/collection" },
  ];

  const icons = [
    { icon: <Search size={22} />, path: "/search", count: 0 },
    { icon: <Heart size={22} />, path: "/favourites", count: favCount },
    { icon: <ShoppingCart size={22} />, path: "/cart", count: cartCount },
  ];

  return (
    <nav className="w-full fixed top-0 flex bg-white items-center justify-around shadow-xl px-4 sm:px-6 md:px-10 py-4 z-50">
      {/* Logo */}
      <div
        className="flex group justify-between items-center cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
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
            <NavLink
              to={ele.path}
              end
              className={({ isActive }) =>
                `font-semibold transition-all duration-300 ${
                  isActive ? "text-[#D4AF37]" : "hover:text-[#D4AF37]"
                }`
              }
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {({ isActive }) => (
                <>
                  {ele.name}
                  <div
                    className={`h-0.5 bg-[#D4AF37] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></div>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Desktop Icons */}
      <ul className="hidden md:flex gap-4 lg:gap-8">
        {icons.map((ele, ind) => (
          <li key={ind} className="relative">
            <NavLink
              to={ele.path}
              className={({ isActive }) =>
                `transition-colors duration-300 cursor-pointer ${
                  isActive ? "text-[#D4AF37]" : "hover:text-[#D4AF37]"
                }`
              }
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {ele.icon}
              {ele.count > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full leading-none">
                  {ele.count > 99 ? "99+" : ele.count}
                </span>
              )}
            </NavLink>
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
                <NavLink
                  to={ele.path}
                  end
                  className={({ isActive }) =>
                    `block px-6 py-3 font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-[#D4AF37] bg-gray-50"
                        : "hover:bg-gray-50 hover:text-[#D4AF37]"
                    }`
                  }
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {ele.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="flex justify-center gap-8 py-4 border-t border-gray-100 md:hidden">
            {icons.map((ele, ind) => (
              <li key={ind} className="relative">
                <NavLink
                  to={ele.path}
                  className={({ isActive }) =>
                    `transition-colors duration-300 cursor-pointer ${
                      isActive ? "text-[#D4AF37]" : "hover:text-[#D4AF37]"
                    }`
                  }
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {ele.icon}
                  {ele.count > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full leading-none">
                      {ele.count > 99 ? "99+" : ele.count}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
