import { Star, ShoppingCart, Eye, Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Cards({ product }) {
  const navigate = useNavigate();

  // ── Favourite state ──────────────────────────────────────────
  const [isFavorite, setIsFavorite] = useState(() => {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    return favs.includes(product.id);
  });

  const handleFavoriteToggle = () => {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    const updated = favs.includes(product.id)
      ? favs.filter((id) => id !== product.id)
      : [...favs, product.id];
    localStorage.setItem("favorites", JSON.stringify(updated));
    setIsFavorite(!isFavorite);
  };

  // ── Cart state ───────────────────────────────────────────────
  const [addedToCart, setAddedToCart] = useState(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    return cart.some((item) => item.id === product.id);
  });

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (!cart.some((item) => item.id === product.id)) {
      const updated = [...cart, { id: product.id, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(updated));
      setAddedToCart(true);
    }
  };

  // ── Stars ────────────────────────────────────────────────────
  const renderStars = (rate) => {
    const stars = [];
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 >= 0.5;
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} color="#D4AF37" size={15} fill="#D4AF37" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star key={i} color="#D4AF37" size={15} fill="#D4AF37" fillOpacity={0.5} />
        );
      } else {
        stars.push(<Star key={i} color="#D4AF37" size={15} />);
      }
    }
    return stars;
  };

  return (
    <div className="w-full max-w-75 sm:w-75 h-auto sm:h-125 rounded-2xl flex flex-col border border-gray-300 transition-all duration-500 group hover:shadow-2xl hover:-translate-y-1.5 bg-white">

      {/* Product Image */}
      <div className="w-full h-48 sm:h-70 p-4 sm:p-5 rounded-t-2xl flex justify-center items-center relative bg-gray-100 overflow-hidden">

        {/* Overlay */}
        <div className="absolute inset-0 flex justify-center items-center bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 pointer-events-none group-hover:pointer-events-auto">
          <Button
            icon={<Eye />}
            text="View More"
            className="text-sm text-black bg-white px-4 py-2 rounded-full"
            onClick={() => navigate(`/product/${product.id}`)}
          />
          <Button
            icon={
              <Heart
                size={18}
                fill={isFavorite ? "red" : "transparent"}
                color={isFavorite ? "red" : "black"}
                className="transition-colors duration-300"
              />
            }
            className="absolute top-4 right-4 p-2 bg-gray-300 rounded-full hover:bg-gray-200 transition-colors duration-300"
            onClick={handleFavoriteToggle}
          />
        </div>

        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-all duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 sm:p-5 flex flex-col gap-2 sm:gap-3 flex-1">
        <p className="font-bold text-xs uppercase text-gray-500">{product.category}</p>
        <p className="text-base sm:text-lg font-semibold hover:text-[#D4AF37] transition-colors duration-300 line-clamp-2 min-h-10 sm:min-h-12">
          {product.title}
        </p>
        <div className="flex items-center gap-1">
          {product.rating && renderStars(product.rating.rate)}
          <p className="text-xs sm:text-sm text-gray-600">({product.rating?.count})</p>
        </div>
        <div className="mt-auto"></div>
      </div>

      {/* Divider */}
      <div className="h-px w-[85%] mx-auto bg-gray-200"></div>

      {/* Price + Cart */}
      <div className="py-3 sm:py-4 px-4 sm:px-5 flex justify-between items-center">
        <p className="text-xl sm:text-[26px] font-bold">${product.price}</p>
        <Button
          icon={<ShoppingCart size={18} />}
          className={`rounded-full px-4 py-2.5 sm:px-5 sm:py-3 transition-colors duration-300 ${
            addedToCart
              ? "bg-[#D4AF37] text-black"
              : "bg-black text-white hover:bg-[#D4AF37] hover:text-black"
          }`}
          onClick={handleAddToCart}
        />
      </div>
    </div>
  );
}