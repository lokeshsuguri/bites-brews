import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MessageCircle, Phone, Clock, ShieldCheck, Wallet } from "lucide-react";
import { motion } from "framer-motion";

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const generateOrderId = () => `BRB-${Date.now().toString(36).toUpperCase()}`;

  const handleWhatsAppOrder = () => {
    if (!name || !phone || !address) {
      alert("Please fill all details");
      return;
    }

    const orderId = generateOrderId();
    const orderLines = items.map(i => `• ${i.name} × ${i.quantity} = ₹${i.price * i.quantity}`).join("\n");
    const message = `🍽️ *New Order - Bugle Rock Bites*\n\n` +
      `🆔 *Order ID:* ${orderId}\n` +
      `👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n📍 *Address:* ${address}\n\n` +
      `🛒 *Order:*\n${orderLines}\n\n` +
      `💰 *Total: ₹${totalPrice}*\n\nThank you! 🙏`;

    const encoded = encodeURIComponent(message);
    clearCart();
    window.location.href = `https://wa.me/919182132773?text=${encoded}`;
  };

  const handleCallOrder = () => {
    window.location.href = "tel:9182132773";
  };

  if (items.length === 0) {
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
            onClick={handleWhatsAppOrder}
            disabled={!isFormValid}
            className="w-full flex items-center justify-center gap-3 bg-whatsapp text-whatsapp-foreground py-4.5 rounded-2xl font-bold text-lg shadow-elevated disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-110 active:scale-[0.98] transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <MessageCircle size={24} />
            Order on WhatsApp
          </motion.button>

          <motion.button
            onClick={handleCallOrder}
            className="w-full flex items-center justify-center gap-3 gradient-hero text-primary-foreground py-4.5 rounded-2xl font-bold text-lg shadow-elevated hover:brightness-110 active:scale-[0.98] transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <Phone size={24} />
            Call to Order
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
