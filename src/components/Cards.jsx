import { Star, ShoppingCart, Eye } from "lucide-react";
import Button from "./Button";

export default function Cards({ product }) {
  const renderStars = (rate) => {
    const stars = [];
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} color="#D4AF37" size={15} fill="#D4AF37" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star
            key={i}
            color="#D4AF37"
            size={15}
            fill="#D4AF37"
            fillOpacity={0.5}
          />
        );
      } else {
        stars.push(<Star key={i} color="#D4AF37" size={15} />);
      }
    }
    return stars;
  };

  return (
    <div className="w-75 h-125 rounded-2xl flex flex-col  border border-gray-300 transition-all duration-500 group hover:shadow-2xl hover:-translate-y-1.5 bg-white">
      
      {/* product image */}
      <div className="w-full h-70 p-5  rounded-t-2xl rounded-tr-2xl flex justify-center items-center relative bg-gray-100 overflow-hidden">
        
        {/* Overlay */}
        <div className="absolute inset-0 flex justify-center items-center bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 pointer-events-none group-hover:pointer-events-auto">
          <Button
            icon={<Eye />}
            text="View More"
            className="text-sm text-black bg-white px-4 py-2 rounded-full"
          />
        </div>

        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-all duration-500"
        />
      </div>

      {/* product info */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <p className="font-bold text-xs uppercase text-gray-500">
          {product.category}
        </p>

        <p className="text-lg font-semibold hover:text-[#D4AF37] transition-colors duration-300 line-clamp-2 min-h-12">
          {product.title}
        </p>

        <div className="flex items-center gap-1">
          {product.rating && renderStars(product.rating.rate)}
          <p className="text-sm text-gray-600">
            ({product.rating?.count})
          </p>
        </div>

        {/* spacer */}
        <div className="mt-auto"></div>
      </div>

      {/* divider */}
      <div className="h-px w-60 mx-auto bg-gray-200"></div>

      {/* price */}
      <div className="py-4 px-5 flex justify-between items-center">
        <p className="text-[26px] font-bold">${product.price}</p>

        <Button
          icon={<ShoppingCart size={20} />}
          className="bg-black  text-white rounded-full px-5 py-3 hover:bg-[#D4AF37] hover:text-black transition-colors duration-300"
        />
      </div>
    </div>
  );
}
