import { useState, useEffect } from "react";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getProductById } from "../../actions/products";
import Loader from "../../components/Loader";
import Button from "../../components/Button";

export default function Cart() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchCartProducts() {
      try {
        const stored = JSON.parse(localStorage.getItem("cart") || "[]");
        if (stored.length === 0) { setCartItems([]); return; }
        const results = await Promise.all(stored.map((item) => getProductById(item.id)));
        const items = results
          .map((res, i) => res?.data ? { ...stored[i], product: res.data } : null)
          .filter(Boolean);
        setCartItems(items);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchCartProducts();
  }, []);

  const updateQuantity = (id, delta) => {
    setCartItems((prev) => {
      const updated = prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      );
      localStorage.setItem("cart", JSON.stringify(updated.map(({ id, quantity }) => ({ id, quantity }))));
      return updated;
    });
  };

  const removeItem = (id) => {
    setCartItems((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updated.map(({ id, quantity }) => ({ id, quantity }))));
      window.dispatchEvent(new Event("cartUpdated"));
      return updated;
    });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 9.99 : 0;
  const total = subtotal + shipping;

  if (loading) return (
    <div className="w-full min-h-screen flex justify-center items-center"><Loader /></div>
  );

  if (error) return (
    <div className="w-full min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-lg p-10 border border-gray-200 rounded-2xl shadow-sm flex flex-col items-center text-center">
        <ShoppingCart size={40} className="text-gray-400" />
        <p className="mt-5 text-xl font-semibold">You are currently offline</p>
        <p className="text-gray-500 mt-2">Please check your internet connection and try again.</p>
      </div>
    </div>
  );

  if (cartItems.length === 0) return (
    <div className="w-full min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-lg p-10 border border-gray-200 rounded-2xl shadow-sm flex flex-col items-center text-center">
        <ShoppingCart size={40} className="text-gray-400" />
        <p className="mt-5 text-xl font-semibold">Your cart is empty</p>
        <p className="text-gray-500 mt-2">Add some products and they will appear here.</p>
        <Button
          text="Browse Collection"
          onClick={() => navigate("/collection")}
          className="mt-6 px-6 py-3 bg-black text-white rounded-full text-sm hover:bg-[#D4AF37] hover:text-black transition-colors duration-300"
        />
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen pt-16">

      {/* Hero Banner */}
      <div className="w-full flex flex-col items-center text-center gap-4 sm:gap-5 px-6 py-12 sm:py-16 md:py-20 text-white bg-linear-to-r from-black via-gray-900 to-gray-950">
        <p className="px-4 py-2 border rounded-full border-gray-600 w-fit flex gap-2 items-center text-sm sm:text-base">
          <ShoppingCart size={18} color="#D4AF37" />
          Your Cart
        </p>
        <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl">
          My <span className="text-[#D4AF37]">Cart</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-lg lg:text-xl max-w-md sm:max-w-xl">
          Review your items before checkout
        </p>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 mt-6 mb-16 flex flex-col lg:flex-row gap-6">

        {/* Items List */}
        <div className="flex-1 flex flex-col gap-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 sm:gap-6 p-4 sm:p-5 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
            >
              {/* Image */}
              <div
                className="w-20 h-20 sm:w-28 sm:h-28 shrink-0 bg-gray-100 rounded-xl flex justify-center items-center cursor-pointer"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="max-h-full max-w-full object-contain p-2"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <p className="text-xs font-bold uppercase text-gray-400 tracking-wider">
                  {item.product.category}
                </p>
                <p
                  className="font-semibold text-sm sm:text-base line-clamp-2 cursor-pointer hover:text-[#D4AF37] transition-colors duration-300"
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  {item.product.title}
                </p>
                <p className="font-bold text-lg sm:text-xl mt-1">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </p>

                {/* Quantity + Remove */}
                <div className="flex items-center gap-3 mt-2 flex-wrap">
                  <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                    <Button
                      icon={<Minus size={14} />}
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-3 py-1.5 hover:bg-gray-100 transition-colors"
                    />
                    <span className="px-3 py-1.5 text-sm font-semibold">{item.quantity}</span>
                    <Button
                      icon={<Plus size={14} />}
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-3 py-1.5 hover:bg-gray-100 transition-colors"
                    />
                  </div>
                  <Button
                    icon={<Trash2 size={15} />}
                    text="Remove"
                    onClick={() => removeItem(item.id)}
                    className="text-sm text-red-400 hover:text-red-600 transition-colors duration-300 gap-1.5"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-80 xl:w-96 shrink-0">
          <div className="border border-gray-200 rounded-2xl shadow-sm p-6 sticky top-24 bg-white">
            <h2 className="text-lg font-bold mb-5">Order Summary</h2>

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal ({cartItems.length} items)</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>
                <span className="font-semibold">${shipping.toFixed(2)}</span>
              </div>
              <div className="h-px bg-gray-200 my-1"></div>
              <div className="flex justify-between text-base font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Button
              text="Proceed to Checkout"
              onClick={() => navigate("/checkout")}
              className="w-full mt-6 py-3 bg-black text-white rounded-full text-sm hover:bg-[#D4AF37] hover:text-black transition-colors duration-300 justify-center"
            />
            <Button
              text="Continue Shopping"
              onClick={() => navigate("/collection")}
              className="w-full mt-3 py-3 border border-gray-300 rounded-full text-sm hover:bg-gray-50 transition-colors duration-300 justify-center"
            />
          </div>
        </div>

      </div>
    </div>
  );
}