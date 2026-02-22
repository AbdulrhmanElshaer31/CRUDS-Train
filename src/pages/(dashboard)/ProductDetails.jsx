import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Star, ShoppingCart, Heart, CheckCircle,
  Plus, Minus, Shield, Truck, RefreshCw, Award
} from "lucide-react";
import { getProductById, getAllProducts } from "../../actions/products";
import Loader from "../../components/Loader";
import Button from "../../components/Button";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [suggested, setSuggested] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setImageLoaded(false);
    setAddedToCart(false);
    setQuantity(1);

    async function fetchAll() {
      try {
        const res = await getProductById(id);
        if (!res.success) { setError(true); return; }
        setProduct(res.data);

        const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
        setIsFavorite(favs.includes(res.data.id));

        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const inCart = cart.find((item) => item.id === res.data.id);
        if (inCart) { setAddedToCart(true); setQuantity(inCart.quantity); }

        const allRes = await getAllProducts();
        if (allRes?.data) {
          const others = allRes.data
            .filter((p) => p.id !== res.data.id && p.category === res.data.category)
            .slice(0, 4);
          setSuggested(others);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchAll();
  }, [id]);

  const handleFavoriteToggle = () => {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    const updated = favs.includes(product.id)
      ? favs.filter((fid) => fid !== product.id)
      : [...favs, product.id];
    localStorage.setItem("favorites", JSON.stringify(updated));
    setIsFavorite(!isFavorite);
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const exists = cart.findIndex((item) => item.id === product.id);
    const updated = exists !== -1
      ? cart.map((item) => item.id === product.id ? { ...item, quantity } : item)
      : [...cart, { id: product.id, quantity }];
    localStorage.setItem("cart", JSON.stringify(updated));
    setAddedToCart(true);
  };

  const renderStars = (rate = 0) =>
    Array.from({ length: 5 }, (_, i) => {
      if (i < Math.floor(rate)) return <Star key={i} size={15} color="#D4AF37" fill="#D4AF37" />;
      if (i === Math.floor(rate) && rate % 1 >= 0.5)
        return <Star key={i} size={15} color="#D4AF37" fill="#D4AF37" fillOpacity={0.5} />;
      return <Star key={i} size={15} color="#D4AF37" />;
    });

  if (loading) return (
    <div className="w-full min-h-screen flex justify-center items-center"><Loader /></div>
  );

  if (error || !product) return (
    <div className="w-full min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-lg p-10 border border-gray-200 rounded-2xl flex flex-col items-center text-center">
        <p className="text-xl font-semibold">Product not found</p>
        <Button
          text="Go Back"
          onClick={() => navigate(-1)}
          className="mt-4 text-[#D4AF37] font-semibold hover:underline"
        />
      </div>
    </div>
  );

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <div className="w-full min-h-screen bg-white pt-16">

      {/* Breadcrumb */}
      <div className="px-4 sm:px-8 lg:px-16 py-4 flex items-center gap-2 text-xs text-gray-400 font-medium">
        <Button text="Home" onClick={() => navigate("/")} className="hover:text-black transition-colors" />
        <span>/</span>
        <Button text="Collection" onClick={() => navigate("/collection")} className="hover:text-black transition-colors" />
        <span>/</span>
        <span className="text-gray-700 line-clamp-1 max-w-50">{product.title}</span>
      </div>

      {/* Main */}
      <div className="px-4 sm:px-8 lg:px-16 pb-20 flex flex-col lg:flex-row gap-10 xl:gap-20">

        {/* Left: Image */}
        <div className="w-full lg:w-[45%] shrink-0">
          <div className="sticky top-24 flex flex-col gap-4">

            <div className="relative w-full aspect-square bg-linear-to-br from-gray-50 to-gray-100 rounded-3xl flex justify-center items-center overflow-hidden border border-gray-200 shadow-sm">
              <span className="absolute top-5 left-5 z-10 text-[10px] font-black uppercase tracking-[0.15em] bg-white/90 backdrop-blur-sm text-gray-600 px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
                {product.category}
              </span>

              {/* Fav button — uses Button with icon only */}
              <Button
                icon={<Heart size={17} fill={isFavorite ? "red" : "transparent"} color={isFavorite ? "red" : "#9ca3af"} />}
                onClick={handleFavoriteToggle}
                className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm flex justify-center items-center"
              />

              <img
                src={product.image}
                alt={product.title}
                onLoad={() => setImageLoaded(true)}
                className={`max-h-[65%] max-w-[65%] object-contain drop-shadow-lg transition-all duration-700 ${
                  imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#D4AF37] to-transparent opacity-60"></div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-4 gap-2">
              {[
                { icon: <Shield size={14} />, label: "Secure" },
                { icon: <Truck size={14} />, label: "Free Ship" },
                { icon: <RefreshCw size={14} />, label: "Returns" },
                { icon: <Award size={14} />, label: "Premium" },
              ].map((b, i) => (
                <div key={i} className="flex flex-col items-center gap-1 py-3 bg-gray-50 rounded-xl border border-gray-100 text-center">
                  <span className="text-[#D4AF37]">{b.icon}</span>
                  <span className="text-[10px] font-semibold text-gray-500">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex-1 flex flex-col gap-7">

          <h1 className="text-2xl sm:text-3xl xl:text-[2.5rem] font-black text-gray-900 leading-tight tracking-tight">
            {product.title}
          </h1>

          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-0.5">{renderStars(product.rating?.rate)}</div>
            <span className="text-sm font-bold text-gray-800">{product.rating?.rate}</span>
            <span className="text-sm text-gray-400">({product.rating?.count} reviews)</span>
            <div className="w-px h-4 bg-gray-200"></div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">✓ In Stock</span>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-linear-to-br from-gray-50 to-white p-5 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.15em] text-gray-400 mb-2">Total Price</p>
            <div className="flex items-end gap-3 flex-wrap">
              <span className="text-5xl font-black text-gray-900 leading-none">${totalPrice}</span>
              {quantity > 1 && (
                <span className="text-sm text-gray-400 mb-1.5 font-medium">
                  ${product.price.toFixed(2)} × {quantity} units
                </span>
              )}
            </div>
          </div>

          <div className="h-px bg-gray-100"></div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.15em] text-gray-400 mb-3">About this product</p>
            <p className="text-gray-600 text-sm sm:text-[15px] leading-[1.8]">{product.description}</p>
          </div>

          <div className="h-px bg-gray-100"></div>

          {/* Quantity */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.15em] text-gray-400 mb-4">Quantity</p>
            <div className="flex items-center gap-5 flex-wrap">
              <div className="flex items-center border-2 border-gray-200 rounded-2xl overflow-hidden">
                <Button
                  icon={<Minus size={15} />}
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className={`w-12 h-12 flex justify-center items-center text-gray-600 hover:bg-gray-100 transition-colors ${quantity === 1 ? "opacity-25 pointer-events-none" : ""}`}
                />
                <span className="w-14 text-center font-black text-xl select-none">{quantity}</span>
                <Button
                  icon={<Plus size={15} />}
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-12 h-12 flex justify-center items-center text-gray-600 hover:bg-gray-100 transition-colors"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 font-medium">Total</span>
                <span className="text-xl font-black text-[#D4AF37]">${totalPrice}</span>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex gap-3 flex-wrap">
            <Button
              icon={addedToCart ? <CheckCircle size={17} /> : <ShoppingCart size={17} />}
              text={addedToCart ? "Added to Cart" : "Add to Cart"}
              onClick={handleAddToCart}
              className={`flex-1 sm:flex-none justify-center gap-2.5 px-8 py-4 rounded-2xl text-sm shadow-sm hover:shadow-lg active:scale-95 ${
                addedToCart
                  ? "bg-[#D4AF37] text-black"
                  : "bg-black text-white hover:bg-[#D4AF37] hover:text-black"
              }`}
            />
            <Button
              text="Buy Now"
              onClick={() => { handleAddToCart(); navigate("/checkout"); }}
              className="flex-1 sm:flex-none justify-center px-8 py-4 rounded-2xl text-sm border-2 border-black hover:bg-black hover:text-white transition-all duration-300 active:scale-95"
            />
          </div>

        </div>
      </div>

      {/* Suggested Products */}
      {suggested.length > 0 && (
        <div className="px-4 sm:px-8 lg:px-16 pb-20">

          <div className="flex items-center gap-5 mb-10">
            <div className="flex-1 h-px bg-gray-100"></div>
            <div className="text-center shrink-0">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4AF37] mb-1">You may also like</p>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Related Products</h2>
            </div>
            <div className="flex-1 h-px bg-gray-100"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {suggested.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/product/${item.id}`)}
                className="group cursor-pointer bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="w-full aspect-square bg-linear-to-br from-gray-50 to-gray-100 flex justify-center items-center p-6 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-sm"
                  />
                </div>
                <div className="p-4 border-t border-gray-100">
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 mb-1">{item.category}</p>
                  <p className="font-semibold text-sm text-gray-900 line-clamp-2 mb-3 group-hover:text-[#D4AF37] transition-colors duration-300 min-h-10">
                    {item.title}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-lg text-gray-900">${item.price}</span>
                    <div className="flex items-center gap-0.5">{renderStars(item.rating?.rate)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button
              text="View Full Collection →"
              onClick={() => navigate("/collection")}
              className="px-8 py-3 border-2 border-black rounded-full text-sm hover:bg-black hover:text-white transition-all duration-300 active:scale-95"
            />
          </div>

        </div>
      )}

    </div>
  );
}