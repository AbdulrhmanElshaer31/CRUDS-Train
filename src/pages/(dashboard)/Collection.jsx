"use client";
import { useEffect, useState, useMemo } from "react";
import Cards from "../../components/Cards";
import { getAllProducts } from "../../actions/products";
import Filter from "../../components/Filter";
import { PackageX } from "lucide-react";
import Loader from "../../components/Loader";
import { GemIcon } from "lucide-react";
export default function Collection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSort, setActiveSort] = useState("featured");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await getAllProducts();
        setProducts(res?.data || []);
      } catch (err) {
        console.error(err);

        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (activeCategory !== "all") {
      result = result.filter(
        (p) => p.category?.toLowerCase() === activeCategory.toLowerCase(),
      );
    }

    // Sort
    switch (activeSort) {
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "rating":
        result.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
        break;
      case "featured":
      default:
        break;
    }

    return result;
  }, [products, activeCategory, activeSort]);
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
          <PackageX size={40} className="text-gray-400" />
          <p className="mt-5 text-xl font-semibold">
            You are currently offline
          </p>
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
          <PackageX size={40} className="text-gray-400" />
          <p className="mt-5 text-xl font-semibold">No products found</p>
          <p className="text-gray-500 mt-2">
            Try adjusting your filters or check back later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full h-full py-16">
        <div className="w-full flex flex-col items-center text-center gap-5 p-20 text-white bg-linear-to-r from-black via-gray-900  to-gray-950">
          <p className="p-2 text-center border rounded-full border-gray-600 w-fit flex gap-2">
            <span>
              <GemIcon color="#D4AF37" />
            </span>{" "}
            Premium Collection
          </p>
          <h1 className="font-bold text-6xl ">
            Our <span className="text-[#D4AF37]">Collection</span>
          </h1>
          <p className="text-gray-400 text-2xl">
            Explore our carefully curated selection of premium products
          </p>
        </div>
        {/* Filter */}
        <div className="w-full h-full flex my-5">
          {/* Filter */}
          <div className="w-[10%] lg:w-[15%] mx-5 ">
            <Filter
              activeCategory={activeCategory}
              activeSort={activeSort}
              onCategoryChange={setActiveCategory}
              onSortChange={setActiveSort}
            />
          </div>
          {/* Cards */}
          <div
            className="w-[85%] 
           flex flex-col items-cecnter gap-5"
          >
            <div className="  mx-2 lg:mx-5 rounded-xl shadow-xl border p-5 border-gray-300">
              <p className="text-xl font-semibold ">
                Avilable ({filteredProducts.length})
              </p>
            </div>
            <div
              className="
             flex flex-wrap justify-center gap-5 p-2"
            >
              {filteredProducts.map((product) => (
                <Cards key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
