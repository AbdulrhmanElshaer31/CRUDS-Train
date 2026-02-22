import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, CreditCard, Banknote } from "lucide-react";
import { getProductById } from "../../actions/products";
import Loader from "../../components/Loader";
import Button from "../../components/Button";

const INPUT_CLASS =
  "w-full px-4 py-3 border border-gray-300 rounded-xl text-sm outline-none focus:border-black transition-colors duration-300 bg-white";

export default function Checkout() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "card",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    async function fetchCart() {
      try {
        const stored = JSON.parse(localStorage.getItem("cart") || "[]");
        if (stored.length === 0) { setCartItems([]); setLoading(false); return; }
        const results = await Promise.all(stored.map((item) => getProductById(item.id)));
        const items = results
          .map((res, i) => res?.data ? { ...stored[i], product: res.data } : null)
          .filter(Boolean);
        setCartItems(items);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchCart();
  }, []);

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 9.99 : 0;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "Required";
    if (!form.lastName.trim()) newErrors.lastName = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Valid email required";
    if (!form.phone.trim()) newErrors.phone = "Required";
    if (!form.address.trim()) newErrors.address = "Required";
    if (!form.city.trim()) newErrors.city = "Required";
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    localStorage.removeItem("cart");
    setSubmitted(true);
  };

  if (submitted) return (
    <div className="w-full min-h-screen flex justify-center items-center px-4 pt-16">
      <div className="w-full max-w-md p-10 border border-gray-200 rounded-2xl shadow-sm flex flex-col items-center text-center">
        <CheckCircle size={48} className="text-[#D4AF37]" />
        <p className="mt-5 text-2xl font-bold">Order Placed!</p>
        <p className="text-gray-500 mt-2 text-sm">
          Thank you for your order. We'll send you a confirmation soon.
        </p>
        <Button
          text="Back to Home"
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-3 bg-black text-white rounded-full text-sm hover:bg-[#D4AF37] hover:text-black transition-colors duration-300"
        />
      </div>
    </div>
  );

  if (loading) return (
    <div className="w-full min-h-screen flex justify-center items-center"><Loader /></div>
  );

  return (
    <div className="w-full min-h-screen pt-16">

      {/* Hero Banner */}
      <div className="w-full flex flex-col items-center text-center gap-4 sm:gap-5 px-6 py-12 sm:py-16 md:py-20 text-white bg-linear-to-r from-black via-gray-900 to-gray-950">
        <p className="px-4 py-2 border rounded-full border-gray-600 w-fit flex gap-2 items-center text-sm sm:text-base">
          <CreditCard size={18} color="#D4AF37" />
          Checkout
        </p>
        <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl">
          Complete Your <span className="text-[#D4AF37]">Order</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-lg max-w-md">
          Fill in your details to place your order
        </p>
      </div>

      {/* Content */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 mt-6 mb-16 flex flex-col lg:flex-row gap-6">

        {/* Form */}
        <div className="flex-1 flex flex-col gap-6">

          {/* Personal Info */}
          <div className="border border-gray-200 rounded-2xl p-5 sm:p-6 bg-white shadow-sm">
            <h2 className="text-base font-bold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} className={INPUT_CLASS} />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} className={INPUT_CLASS} />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
              <div>
                <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} className={INPUT_CLASS} />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className={INPUT_CLASS} />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="border border-gray-200 rounded-2xl p-5 sm:p-6 bg-white shadow-sm">
            <h2 className="text-base font-bold mb-4">Shipping Address</h2>
            <div className="flex flex-col gap-4">
              <div>
                <input name="address" placeholder="Street Address" value={form.address} onChange={handleChange} className={INPUT_CLASS} />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input name="city" placeholder="City" value={form.city} onChange={handleChange} className={INPUT_CLASS} />
                  {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                </div>
                <input name="postalCode" placeholder="Postal Code (optional)" value={form.postalCode} onChange={handleChange} className={INPUT_CLASS} />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="border border-gray-200 rounded-2xl p-5 sm:p-6 bg-white shadow-sm">
            <h2 className="text-base font-bold mb-4">Payment Method</h2>
            <div className="flex gap-3 flex-wrap">
              <Button
                icon={<CreditCard size={16} />}
                text="Credit / Debit Card"
                onClick={() => setForm((p) => ({ ...p, paymentMethod: "card" }))}
                className={`px-5 py-3 rounded-xl border text-sm transition-all duration-300 ${
                  form.paymentMethod === "card"
                    ? "border-black bg-black text-white"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              />
              <Button
                icon={<Banknote size={16} />}
                text="Cash on Delivery"
                onClick={() => setForm((p) => ({ ...p, paymentMethod: "cash" }))}
                className={`px-5 py-3 rounded-xl border text-sm transition-all duration-300 ${
                  form.paymentMethod === "cash"
                    ? "border-black bg-black text-white"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              />
            </div>
            {form.paymentMethod === "card" && (
              <div className="mt-4 flex flex-col gap-4">
                <input placeholder="Card Number" className={INPUT_CLASS} />
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="MM / YY" className={INPUT_CLASS} />
                  <input placeholder="CVV" className={INPUT_CLASS} />
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-80 xl:w-96 shrink-0">
          <div className="border border-gray-200 rounded-2xl shadow-sm p-6 sticky top-24 bg-white">
            <h2 className="text-lg font-bold mb-5">Order Summary</h2>

            <div className="flex flex-col gap-3 mb-4 max-h-48 overflow-y-auto pr-1">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3 items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg shrink-0 flex justify-center items-center">
                    <img src={item.product.image} alt={item.product.title} className="max-h-full max-w-full object-contain p-1" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium line-clamp-1">{item.product.title}</p>
                    <p className="text-xs text-gray-500">x{item.quantity}</p>
                  </div>
                  <p className="text-sm font-semibold shrink-0">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="h-px bg-gray-200 mb-4"></div>

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>
                <span className="font-semibold">${shipping.toFixed(2)}</span>
              </div>
              <div className="h-px bg-gray-200"></div>
              <div className="flex justify-between text-base font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Button
              text="Place Order"
              onClick={handleSubmit}
              className="w-full mt-6 py-3 bg-black text-white rounded-full text-sm hover:bg-[#D4AF37] hover:text-black transition-colors duration-300 justify-center"
            />
          </div>
        </div>

      </div>
    </div>
  );
}