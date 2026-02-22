import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft, SearchX  } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-4 bg-white text-center">

      {/* Icon */}
      <div className="w-24 h-24 rounded-full bg-gray-100 flex justify-center items-center mb-6">
        <SearchX size={40} className="text-[#D4AF37]" />
      </div>

      {/* 404 */}
      <h1 className="text-7xl sm:text-9xl font-black text-gray-400 select-none leading-none">
        404
      </h1>

      {/* Divider */}
      <div className="w-12 h-0.5 bg-[#D4AF37] my-5"></div>

      {/* Text */}
      <p className="text-xl sm:text-2xl font-bold text-gray-900">
        Page Not Found
      </p>
      <p className="text-gray-500 text-sm sm:text-base mt-2 max-w-xs sm:max-w-sm">
        The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Buttons */}
      <div className="flex gap-3 mt-8 flex-wrap justify-center">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-semibold text-sm hover:bg-[#D4AF37] hover:text-black transition-colors duration-300"
        >
          <Home size={16} />
          Back to Home
        </button>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full font-semibold text-sm hover:border-black transition-colors duration-300"
        >
          <ArrowLeft size={16} />
          Go Back
        </button>
      </div>

    </div>
  );
}