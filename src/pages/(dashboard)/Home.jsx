import {
  GemIcon,
  ArrowRight,
  Plus,
  StarIcon,
  Sparkles,
  Van,
  BadgeCheck,
  Headphones,
  Shield,
  RotateCcw,
  Award,
} from "lucide-react";
import { getAllProducts } from "../../actions/products";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Cards from "../../components/Cards";
export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await getAllProducts();
        setProducts(res?.data || []);
      } catch (err) {
        console.error(err);
      }
    }
    fetchProducts();
  }, []);
  const [BestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    setBestSeller(products.slice(0, 6));
  }, [products]);
  const heroBanner = [
    {
      head: "10K",
      icon: <Plus color="gray" />,
      info: "Happy Customers",
    },
    {
      head: "500",
      icon: <Plus color="gray" />,
      info: "Premium Products",
    },
    {
      head: "4.9",
      icon: <StarIcon fill="#D4AF37" color="#D4AF37" />,
      info: "Average Rating",
    },
  ];

  const whyUs = [
    {
      head: "Free Shipping",
      icon: <Van color="white" />,
      info: "On all orders over $100. Fast and reliable delivery to your doorstep.",
    },
    {
      head: "Secure Payment",
      icon: <BadgeCheck color="white" />,
      info: "100% secure payment with SSL encryption. Your data is safe with us.",
    },
    {
      head: "Quality Guarantee",
      icon: <Shield color="white" />,
      info: "30-day money back guarantee. Shop with confidence and satisfaction.",
    },
  ];
  const whyChoose = [
    {
      head: "Premium Quality",
      icon: <Sparkles color="white" />,
      info: "Handpicked products that meet the highest standards of excellence",
    },
    {
      head: "Certified Products",
      icon: <Award color="white" />,
      info: "All items are verified and come with authenticity guarantee",
    },
    {
      head: "Easy Returns",
      icon: <RotateCcw color="white" />,
      info: "30-day hassle-free returns with no questions asked policy",
    },
    {
      head: "24/7 Support",
      icon: <Headphones color="white" />,
      info: "Our dedicated team is always ready to assist you anytime",
    },
  ];

  return (
    // Wraper
    <div className="py-17 w-full h-full flex flex-col">
      {/* Hero Banner */}
      <div className="w-full flex flex-col items-center text-center gap-4 sm:gap-5 px-6 py-12 sm:p-20 text-white bg-linear-to-r from-black via-gray-900 to-gray-950 border-b-3 border-[#D4AF37]">
        <p className="p-4 text-center items-center border rounded-full border-gray-600 w-fit flex gap-2 text-sm sm:text-base">
          <span>
            <Sparkles size={18} color="#D4AF37" />
          </span>{" "}
          New Collection
        </p>
        <p className="font-bold text-2xl sm:text-5xl lg:text-6xl">
          Discover Luxury
        </p>
        <p className="font-bold text-3xl text-[#D4AF37] sm:text-5xl lg:text-6xl">
          That Lasts Forever
        </p>
        <p className="text-gray-400 max-w-xl text-sm sm:text-base">
          Curated premium products that combine timeless elegance with modern
          sophistication. Experience quality that speaks for itself.{" "}
        </p>

        {/* CTA Buttons */}
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-24 mt-5">
          <Link to={"/collection"}>
            <Button
              text="Explore Collection"
              left
              icon={<ArrowRight />}
              effect
              className="gap-4 border p-5 shadow-2xl border-gray-700 rounded-2xl bg-[#D4AF37] transition-all duration-300 w-full sm:w-auto"
            />
          </Link>
          <Link to={"/collection"}>
            <Button
              text="Learn More"
              className="gap-4 border px-8 py-4 shadow-2xl border-gray-700 rounded-2xl hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 w-full sm:w-auto"
            />
          </Link>
        </div>

        {/* Divider */}
        <div className="mt-10 w-3/4 sm:w-1/2 h-px bg-gray-800"></div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-10 sm:mt-15 gap-6 sm:gap-0 w-full sm:w-auto">
          <div className="flex flex-col gap-2 items-center sm:border-r sm:border-gray-800 sm:pr-20 pb-4 sm:pb-0  border-gray-800 sm:border-b-0 w-full sm:w-auto">
            <p className="flex text-3xl font-semibold items-center">
              {heroBanner[0].head} <span>{heroBanner[0].icon}</span>
            </p>
            <p className="text-gray-400">{heroBanner[0].info}</p>
          </div>

          <div className="flex flex-col gap-2 items-center sm:mx-10 pb-4 sm:pb-0  border-gray-800 sm:border-b-0 w-full sm:w-auto">
            <p className="flex text-3xl font-semibold items-center">
              {heroBanner[1].head} <span>{heroBanner[1].icon}</span>
            </p>
            <p className="text-gray-400">{heroBanner[1].info}</p>
          </div>

          <div className="flex flex-col gap-2 items-center sm:border-l sm:border-gray-800 sm:pl-20 w-full sm:w-auto">
            <p className="flex gap-1 text-3xl font-semibold items-center">
              {heroBanner[2].head} <span>{heroBanner[2].icon}</span>
            </p>
            <p className="text-gray-400">{heroBanner[2].info}</p>
          </div>
        </div>
      </div>

      {/* Why Us Strip */}
      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-10 lg:gap-20 xl:gap-40 border-b p-10 sm:p-16 lg:p-25 px-6 sm:px-10 lg:px-30 border-gray-300">
        {whyUs.map((item, i) => (
          <div key={i} className="flex items-center gap-5 w-full sm:w-auto">
            <div className="p-5 shrink-0 flex items-center rounded-2xl shadow-2xl shadow-[#D4AF37] bg-[#D4AF37] border-white">
              {item.icon}
            </div>
            <div>
              <p className="font-semibold ">{item.head}</p>
              <p className="text-sm text-gray-600">{item.info}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="w-full flex flex-col items-center gap-16 p-15">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-4xl font-bold">
            Why Choose <span className="text-[#D4AF37]">Luxery</span>
          </p>
          <p className="text-gray-600">
            Experience shopping excellence with our commitment to quality and
            service
          </p>
        </div>
        <div className="flex  justify-center gap-6 flex-wrap w-full max-w-5xl">
          {whyChoose.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 rounded-2xl transition-all duration-300 items-center hover:border-[#D4AF37] hover:shadow-2xl p-5 border border-gray-300 bg-gray-100 w-full sm:w-[calc(50%-12px)] lg:w-[calc(30%-18px)]"
            >
              <div className="flex items-center p-6 rounded-2xl justify-center bg-[#D4AF37]">
                {item.icon}
              </div>
              <p className="text-2xl font-bold text-center">{item.head}</p>
              <p className="text-gray-600 text-center">{item.info}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Best Sellers */}
      <div className="w-full bg-gray-100 flex flex-col py-20 gap-20 items-center px-4 sm:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="py-2 px-6 text-center items-center rounded-full text-white bg-[#D4AF37] w-fit flex gap-2 text-sm sm:text-base font-semibold">
            <span>
              <Sparkles size={16} color="white" />
            </span>
            Featured Collection
          </p>
          <p className="text-5xl font-bold">
            Our Best <span className="text-[#D4AF37]">Sellers</span>
          </p>
          <p className="text-gray-600">
            Discover our most loved products, carefully selected based on
            customer favorites
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-5 w-full max-w-5xl">
          {BestSeller.map((product, i) => (
            <Cards key={i} product={product} />
          ))}
        </div>
        <Link to={"/collection"}>
          <Button
            text="Explore Collection"
            left
            icon={<ArrowRight color="white" />}
            effect
            className="gap-4 p-5 text-white shadow-amber-400 hover:shadow-2xl rounded-2xl bg-[#D4AF37] transition-all duration-300"
          />
        </Link>
      </div>

      {/* Newsletter */}
      <div className="w-full flex p-10 sm:p-20 gap-5 flex-col items-center bg-linear-to-r from-[#eeeae0] via-gray-100 to-[#eeeae0]">
        <div className="flex flex-col items-center gap-5 text-center">
          <p className="text-5xl font-bold">
            Join Our <span className="text-[#D4AF37]">Community</span>
          </p>
          <p className="text-gray-600">
            Subscribe to get exclusive offers, new arrivals, and special
            promotions
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xl transition-all duration-300">
          <input
            type="email"
            className="p-5 focus:outline-[#D4AF37] outline-transparent border-2 border-gray-400 w-full sm:flex-1 rounded-2xl transition-all duration-300"
            placeholder="Enter Your Email Address"
          />
          <Button
            text="Subscribe"
            className="p-4 text-white shadow-amber-400 hover:shadow-2xl rounded-2xl bg-[#D4AF37] transition-all duration-300 w-full sm:w-auto"
          />
        </div>
        <p className="text-gray-500">
          Join 10,000+ subscribers • Unsubscribe anytime
        </p>
      </div>
    </div>
  );
}
