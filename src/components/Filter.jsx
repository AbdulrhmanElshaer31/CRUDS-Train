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
    { name: "Electronics", icon: <LaptopIcon size={18} />, value: "electronics" },
    { name: "Jewlery", icon: <GemIcon size={18} />, value: "jewelery" },
  ];

  const sortOptions = [
    { label: "Featured", value: "featured" },
    { label: "Price: High To Low", value: "price-desc" },
    { label: "Price: Low To High", value: "price-asc" },
    { label: "Highest Rated", value: "rating" },
  ];

  return (
    <div className="flex flex-col gap-5 lg:gap-10 sticky top-20 self-start h-fit">

      {/* Categories Filter */}
      <div className="w-full flex flex-col border rounded-xl p-4 lg:p-6 border-gray-300 shadow-xl">
        <div className="flex gap-2 items-center">
          <FilterIcon size={20} color="#D4AF37" />
          <p className="font-semibold text-lg lg:text-xl hidden lg:block">Categories</p>
        </div>
        <div className="flex flex-col mt-4 lg:mt-5 gap-3 lg:gap-5">
          {FilterIcons.map((item) => (
            <Button
              key={item.value}
              icon={item.icon}
              text={item.name}
              onClick={() => onCategoryChange(item.value)}
              isActive={activeCategory === item.value}
              className={`bg-gray-200 p-2 rounded-xl w-full text-left flex items-center gap-2 transition-colors duration-200
                ${activeCategory === item.value ? "bg-gray-900 text-white" : "hover:bg-gray-300"}
              `}
            />
          ))}
        </div>
      </div>

      {/* Sort By Filter */}
      <div className="w-full flex flex-col border rounded-xl p-4 lg:p-6 border-gray-300 shadow-xl">
        <div className="flex gap-2 items-center">
          <ArrowDownWideNarrow size={20} color="#D4AF37" />
          <p className="font-semibold text-lg lg:text-xl hidden lg:block">Sort By</p>
        </div>
        <div className="flex mt-4 lg:mt-5 items-center justify-center">
          <select
            className="bg-gray-200 p-2 rounded-xl w-full border-gray-300 border-2 text-sm lg:text-base cursor-pointer"
            value={activeSort}
            onChange={(e) => onSortChange(e.target.value)}
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

    </div>
  );
}