import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import Button from "./Button";

export default function Footer() {
  const shopLinks = [
    { name: "New Arrivals", path: "/" },
    { name: "Best Sellers", path: "/" },
    { name: "Sale", path: "/" },
    { name: "Collections", path: "/" },
  ];

  const customerServiceLinks = [
    { name: "Contact Us", path: "/" },
    { name: "Shipping Info", path: "/" },
    { name: "Returns", path: "/" },
    { name: "FAQ", path: "/" },
  ];

  const socialMedia = [
    { icon: <Facebook size={20} />, key: "facebook" },
    { icon: <Instagram size={20} />, key: "instagram" },
    { icon: <Twitter size={20} />, key: "twitter" },
  ];

  return (
    <footer className="w-full flex flex-col  bg-black items-center shadow-xl py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      
      {/* Mobile View - Compact */}
      <div className="w-full max-w-7xl flex flex-col items-center gap-6 lg:hidden">
        
        {/* Logo Only on Mobile */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 transition duration-300 group bg-white hover:bg-[#D4AF37] flex justify-center items-center relative shrink-0">
            <div className="w-0.5 h-6 absolute top-1.5 left-3 group-hover:bg-black bg-[#D4AF37] rotate-45 transition duration-300"></div>
            <div className="w-0.5 h-6 absolute top-1.5 right-3 group-hover:bg-black bg-[#D4AF37] -rotate-45 transition duration-300"></div>
            <div className="w-0.5 h-6 absolute bottom-1.5 left-3 group-hover:bg-black bg-[#D4AF37] -rotate-45 transition duration-300"></div>
            <div className="w-0.5 h-6 absolute bottom-1.5 right-3 group-hover:bg-black bg-[#D4AF37] rotate-45 transition duration-300"></div>
          </div>
          <span className="font-bold text-lg text-white">LUXERY</span>
        </div>

        {/* Newsletter on Mobile */}
        <div className="flex gap-2 w-full max-w-sm">
          <input
            type="email"
            className="bg-white p-2 rounded text-black text-sm flex-1"
            placeholder="Your Email"
          />
          <Button
            className="bg-[#D4AF37] p-2 rounded hover:bg-[#C5A028] transition duration-300"
            icon={<Mail color="black" size={18} />}
          />
        </div>

        {/* Social Media on Mobile */}
        <ul className="flex gap-6">
          {socialMedia.map((item) => (
            <li
              className="text-white hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer"
              key={item.key}
            >
              {item.icon}
            </li>
          ))}
        </ul>

        {/* Quick Links - Horizontal on Mobile */}
        <div className="flex gap-4 text-slate-400 text-xs">
          <Link to="/" className="hover:text-white transition duration-300">Contact</Link>
          <span>•</span>
          <Link to="/" className="hover:text-white transition duration-300">FAQ</Link>
          <span>•</span>
          <Link to="/" className="hover:text-white transition duration-300">Shipping</Link>
        </div>

        {/* Copyright on Mobile */}
        <div className="text-slate-500 text-xs text-center pt-2 border-t border-gray-800 w-full">
          © 2026 LUXERY. All rights reserved.
        </div>
      </div>

      {/* Desktop View - Full */}
      <div className="hidden lg:grid w-full max-w-7xl grid-cols-4 gap-8 text-slate-400">
        
        {/* Brand Section */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 transition duration-300 group bg-white hover:bg-[#D4AF37]  flex justify-center items-center relative shrink-0">
              <div className="w-0.5 h-8 absolute top-2 left-5 group-hover:bg-black bg-[#D4AF37] rotate-45 transition duration-300"></div>
              <div className="w-0.5 h-8 absolute top-2 right-5 group-hover:bg-black bg-[#D4AF37] -rotate-45 transition duration-300"></div>
              <div className="w-0.5 h-8 absolute bottom-2 left-5 group-hover:bg-black bg-[#D4AF37] -rotate-45 transition duration-300"></div>
              <div className="w-0.5 h-8 absolute bottom-2 right-5 group-hover:bg-black bg-[#D4AF37] rotate-45 transition duration-300"></div>
            </div>
            <span className="font-bold text-2xl text-white">LUXERY</span>
          </div>
          <p className="text-sm">
            Premium quality products for the modern lifestyle.
          </p>
        </div>

        {/* Shop Links */}
        <div className="flex flex-col">
          <p className="pb-4 text-[#D4AF37] font-semibold text-lg">Shop</p>
          <ul className="space-y-2">
            {shopLinks.map((ele, ind) => (
              <li
                key={ind}
                className="hover:text-white transition duration-300 text-sm"
              >
                <Link to={ele.path}>{ele.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Service Links */}
        <div className="flex flex-col">
          <p className="pb-4 text-[#D4AF37] font-semibold text-lg">
            Customer Service
          </p>
          <ul className="space-y-2">
            {customerServiceLinks.map((ele, ind) => (
              <li
                key={ind}
                className="hover:text-white transition duration-300 text-sm"
              >
                <Link to={ele.path}>{ele.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col">
          <p className="pb-4 text-[#D4AF37] font-semibold text-lg">Newsletter</p>
          <div className="flex gap-3">
            <input
              type="email"
              className="bg-white p-2 rounded text-black text-sm flex-1"
              placeholder="Your Email"
            />
            <Button
              className="bg-[#D4AF37] p-2 rounded hover:bg-[#C5A028] transition duration-300"
              icon={<Mail color="black" size={20} />}
            />
          </div>
          
          {/* Social Media Icons */}
          <ul className="flex gap-5 mt-6">
            {socialMedia.map((item) => (
              <li
                className="text-white hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer"
                key={item.key}
              >
                {item.icon}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider - Desktop Only */}
      <div className="hidden lg:block h-px w-full max-w-7xl bg-gray-800 my-8"></div>

      {/* Copyright - Desktop Only */}
      <div className="hidden lg:block text-slate-400 text-sm text-center">
        © 2026 LUXERY. All rights reserved.
      </div>
    </footer>
  );
}