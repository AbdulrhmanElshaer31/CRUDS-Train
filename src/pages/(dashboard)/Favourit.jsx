import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import Loader from "../../components/Loader";
import Cards from "../../components/Cards";
import { getProductById } from "../../actions/products";

export default function Favorites() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchFavouriteProducts() {
      try {
        const ids = JSON.parse(localStorage.getItem("favorites") || "[]");

        if (ids.length === 0) {
          setProducts([]);
          return;
        }

        const results = await Promise.all(ids.map((id) => getProductById(id)));
        const fetchedProducts = results.map((res) => res?.data).filter(Boolean);
        setProducts(fetchedProducts);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchFavouriteProducts();
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center px-4">
        <div className="w-full max-w-lg p-10 border border-gray-200 rounded-2xl shadow-sm flex flex-col items-center text-center">
          <Heart size={40} className="text-gray-400" />
          <p className="mt-5 text-xl font-semibold">You are currently offline</p>
          <p className="text-gray-500 mt-2">
            Please check your internet connection and try again.
          </p>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center px-4">
        <div className="w-full max-w-lg p-10 border border-gray-200 rounded-2xl shadow-sm flex flex-col items-center text-center">
          <Heart size={40} className="text-gray-400" />
          <p className="mt-5 text-xl font-semibold">No favourites yet</p>
          <p className="text-gray-500 mt-2">
            Start adding products to your favourites and they will appear here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen pt-16">

      {/* Hero Banner */}
      <div className="w-full flex flex-col items-center text-center gap-4 sm:gap-5 px-6 py-12 sm:py-16 md:py-20 text-white bg-linear-to-r from-black via-gray-900 to-gray-950">
        <p className="px-4 py-2 text-center border rounded-full border-gray-600 w-fit flex gap-2 items-center text-sm sm:text-base">
          <Heart size={18} color="#D4AF37" fill="#D4AF37" />
          Your Favourites
        </p>
        <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl">
          My <span className="text-[#D4AF37]">Favourites</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-lg lg:text-xl max-w-md sm:max-w-xl">
          All the products you loved, saved in one place
        </p>
      </div>

      {/* Count Bar */}
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 mt-5 sm:mt-6 rounded-xl shadow border p-4 sm:p-5 border-gray-300">
        <p className="text-base sm:text-xl font-semibold">
          Saved ({products.length})
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-5 px-4 sm:px-6 md:px-8 lg:px-10 mt-5 mb-10">
        {products.map((product) => (
          <Cards key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}