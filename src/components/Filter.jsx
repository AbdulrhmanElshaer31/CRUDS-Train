/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  LaptopIcon,
  MarsIcon,
  VenusIcon,
  ShoppingBagIcon,
  FilterIcon,
  GemIcon,
  ArrowDownWideNarrow,
} from "lucide-react";
import Button from "./Button";
export default function Filter({
  onCategoryChange,
  onSortChange,
  activeCategory,
  activeSort,
}) {
  const FilterIcons = [
    { name: "All", icon: <ShoppingBagIcon size={18} />, value: "all" },
    { name: "Men", icon: <MarsIcon size={18} />, value: "men's clothing" },
    { name: "Women", icon: <VenusIcon size={18} />, value: "women's clothing" },
    {
      name: "Electronics",
      icon: <LaptopIcon size={18} />,
      value: "electronics",
    },
    { name: "Jewlery", icon: <GemIcon size={18} />, value: "jewelery" },
  ];
  const sortOptions = [
    { label: "Featured", value: "featured" },
    { label: "Price: High To Low", value: "price-desc" },
    { label: "Price: Low To High", value: "price-asc" },
    { label: "Highest Rated", value: "rating" },
  ];
  return (
    <>
      {/* Categories Filter*/}
      <div className="flex flex-col gap-10 sticky top-20 self-start h-fit">
        <div className="w-full hidden lg:flex lg:flex-col border rounded-xl p-6 border-gray-300 shadow-xl">
          <div className="flex gap-2 items-center">
            <FilterIcon size={20} color="#D4AF37" />
            <p className="font-semibold text-xl">Categories</p>
          </div>
          <div className="flex flex-col mt-5 gap-5">
            {FilterIcons.map((item) => (
              <Button
                key={item.value}
                icon={item.icon}
                text={item.name}
                onClick={() => onCategoryChange(item.value)}
                isActive={activeCategory === item.value}
                className={ ` bg-gray-200 p-2 rounded-xl focus:bg-gray-900 focus:text-white`} 
              />
            ))}
          </div>
        </div>

        <div className="w-fit flex flex-col lg:hidden items-center border rounded-xl p-4 border-gray-300 shadow-xl">
          <div className="flex gap-2 items-center">
            <FilterIcon size={20} color="#D4AF37" />
          </div>
          <div className="flex flex-col mt-5 gap-5">
            {FilterIcons.map((item, index) => (
              <Button
                key={item.value}
                icon={item.icon}
                label={item.name}
                onClick={() => onCategoryChange(item.value)}
                isActive={activeCategory === item.value}
               className={ ` bg-gray-200 p-2 rounded-xl focus:bg-gray-900 focus:text-white`}
              />
            ))}
          </div>
        </div>

        {/* Sort-by Filter */}
        <div className="w-full hidden lg:flex lg:flex-col border rounded-xl p-6 border-gray-300 shadow-xl">
          <div className="flex gap-2 items-center">
            <ArrowDownWideNarrow size={20} color="#D4AF37" />
            <p className="font-semibold text-xl">Sort By</p>
          </div>
          <div className="flex mt-5 items-center justify-center">
            <select
              className="bg-gray-200 p-2 rounded-xl w-full  border-gray-300 border-2"
              name=""
              id=""
            >
              <option value="Featured">Featured</option>
              <option value="highTolow">Price: High To Low</option>
              <option value="lowTohigh">Price: Low To High</option>
              <option value="highestRated">Hightest Rated</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
