import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, Clock, ShieldCheck, Wallet, PartyPopper, Send, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import UpiPayment from "@/components/UpiPayment";

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"hotel" | "upi">("hotel");

  const generateOrderId = () => `BRB-${Date.now().toString(36).toUpperCase()}`;

  const handlePlaceOrder = () => {
    if (!name.trim() || !phone.trim() || !address.trim()) {
      alert("Please fill all details");
      return;
    }
    const id = generateOrderId();
    setOrderId(id);
    setShowConfirmation(true);
  };

  const getWhatsAppUrl = () => {
    const orderLines = items.map(i => `• ${i.name} × ${i.quantity} = ₹${i.price * i.quantity}`).join("\n");
    const message = `🍽️ *New Order - Bugle Rock Bites*\n\n` +
      `🆔 *Order ID:* ${orderId}\n` +
      `👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n📍 *Address:* ${address}\n\n` +
      `🛒 *Order:*\n${orderLines}\n\n` +
      `💰 *Total: ₹${totalPrice}*\n\nThank you! 🙏`;
    return `https://wa.me/919182132773?text=${encodeURIComponent(message)}`;
  };

  const handleSendToRestaurant = () => {
    const url = getWhatsAppUrl();
    clearCart();
    window.location.href = url;
  };

  const handleCallOrder = () => {
    window.location.href = "tel:9182132773";
  };

  if (items.length === 0 && !showConfirmation) {
    navigate("/");
    return null;
  }

  const isFormValid = name.trim() && phone.trim() && address.trim();

  const inputClass = "w-full px-4 py-3.5 rounded-2xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition text-sm font-medium";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-card/95 backdrop-blur-md border-b border-border px-4 py-3 flex items-center gap-3 shadow-soft">
        <button onClick={() => navigate("/cart")} className="p-2 -ml-1 rounded-full hover:bg-accent transition-colors active:scale-90">
          <ArrowLeft size={20} className="text-foreground" />
        </button>
        <h1 className="text-lg font-bold text-foreground font-display">Checkout</h1>
      </div>

      <div className="px-4 py-6 max-w-lg mx-auto space-y-5">
        {/* Order summary */}
        <motion.div
          className="bg-card rounded-2xl shadow-card p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="font-bold text-card-foreground font-display mb-3">Order Summary</h3>
          {items.map(item => (
            <div key={item.id} className="flex justify-between text-sm text-muted-foreground py-1.5">
              <span>{item.name} × {item.quantity}</span>
              <span className="font-medium">₹{item.price * item.quantity}</span>
            </div>
          ))}
          <div className="border-t border-border mt-3 pt-3 flex justify-between font-bold text-foreground">
            <span>Total</span>
            <span className="text-primary text-lg">₹{totalPrice}</span>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          className="bg-card rounded-2xl shadow-card p-5 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="font-bold text-card-foreground font-display">Your Details</h3>

          <div>
            <label className="block text-sm font-semibold text-muted-foreground mb-1.5">Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your full name" className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-semibold text-muted-foreground mb-1.5">Phone</label>
            <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Your phone number" className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-semibold text-muted-foreground mb-1.5">Address</label>
            <textarea value={address} onChange={e => setAddress(e.target.value)} placeholder="Delivery address" rows={3} className={`${inputClass} resize-none`} />
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="bg-accent/60 rounded-2xl p-4 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          {[
            { icon: ShieldCheck, text: "We will confirm your order via call" },
            { icon: Clock, text: "Preparation time: 15–20 mins" },
            { icon: Wallet, text: "Pay at hotel / pickup" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 text-sm text-accent-foreground font-medium">
              <Icon size={18} className="text-primary flex-shrink-0" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        {/* Order buttons */}
        <div className="space-y-3 pb-6">
          <motion.button
            onClick={handlePlaceOrder}
            disabled={!isFormValid}
            className="w-full flex items-center justify-center gap-3 gradient-hero text-primary-foreground py-4.5 rounded-2xl font-bold text-lg shadow-elevated disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-110 active:scale-[0.98] transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Place Order 🚀
          </motion.button>

          <motion.button
            onClick={handleCallOrder}
            className="w-full flex items-center justify-center gap-3 bg-card border-2 border-primary text-primary py-4 rounded-2xl font-bold text-lg hover:bg-primary/5 active:scale-[0.98] transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <Phone size={22} />
            Call to Order
          </motion.button>
        </div>
      </div>

      {/* Confirmation Popup */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-card rounded-3xl shadow-elevated p-8 max-w-sm w-full text-center space-y-5"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="w-20 h-20 rounded-full bg-success/15 flex items-center justify-center mx-auto">
                <PartyPopper size={40} className="text-success" />
              </div>
              <h2 className="text-2xl font-extrabold text-card-foreground font-display">
                🎉 Order Confirmed!
              </h2>
              <p className="text-muted-foreground text-sm">
                Order ID: <span className="font-bold text-foreground">{orderId}</span>
              </p>
              <p className="text-muted-foreground text-sm">
                Send this order to the restaurant via WhatsApp to complete it.
              </p>

              <button
                onClick={handleSendToRestaurant}
                className="w-full flex items-center justify-center gap-3 bg-whatsapp text-whatsapp-foreground py-4 rounded-2xl font-bold text-lg shadow-elevated hover:brightness-110 active:scale-[0.98] transition-all"
              >
                <Send size={22} />
                Send Order to Restaurant
              </button>

              <button
                onClick={() => setShowConfirmation(false)}
                className="text-muted-foreground text-sm underline hover:text-foreground transition-colors"
              >
                Go back & edit
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CheckoutPage;
