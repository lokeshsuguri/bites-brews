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
    if (!name || !phone || !address) return;

    const orderId = generateOrderId();
    const orderLines = items.map(i => `• ${i.name} × ${i.quantity} = ₹${i.price * i.quantity}`).join("\n");
    const message = `🍽️ *New Order - Bugle Rock Bites*\n\n` +
      `🆔 *Order ID:* ${orderId}\n` +
      `👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n📍 *Address:* ${address}\n\n` +
      `🛒 *Order:*\n${orderLines}\n\n` +
      `💰 *Total: ₹${totalPrice}*\n\nThank you! 🙏`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919182132773?text=${encoded}`, "_blank");
    clearCart();
    navigate("/");
  };

  const handleCallOrder = () => {
    window.open("tel:9182132773", "_self");
  };

  if (items.length === 0) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-card border-b border-border px-4 py-3 flex items-center gap-3 shadow-soft">
        <button onClick={() => navigate("/cart")} className="p-2 rounded-full hover:bg-accent transition-colors">
          <ArrowLeft size={20} className="text-foreground" />
        </button>
        <h1 className="text-lg font-bold text-foreground font-display">Checkout</h1>
      </div>

      <div className="px-4 py-6 max-w-lg mx-auto space-y-6">
        {/* Order summary */}
        <motion.div
          className="bg-card rounded-xl shadow-card p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="font-bold text-card-foreground font-display mb-2">Order Summary</h3>
          {items.map(item => (
            <div key={item.id} className="flex justify-between text-sm text-muted-foreground py-1">
              <span>{item.name} × {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
          <div className="border-t border-border mt-2 pt-2 flex justify-between font-bold text-foreground">
            <span>Total</span>
            <span className="text-primary">₹{totalPrice}</span>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          className="bg-card rounded-xl shadow-card p-4 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="font-bold text-card-foreground font-display">Delivery Details</h3>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="Your phone number"
              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">Address</label>
            <textarea
              value={address}
              onChange={e => setAddress(e.target.value)}
              placeholder="Delivery address"
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
            />
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="bg-accent/50 rounded-xl p-4 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <div className="flex items-center gap-2 text-sm text-accent-foreground">
            <ShieldCheck size={16} />
            <span>📞 We will confirm your order via call</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-accent-foreground">
            <Clock size={16} />
            <span>⏱️ Preparation time: 15–20 mins</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-accent-foreground">
            <Wallet size={16} />
            <span>💰 Pay at hotel / pickup</span>
          </div>
        </motion.div>

        {/* Order buttons */}
        <div className="space-y-3">
          <motion.button
            onClick={handleWhatsAppOrder}
            disabled={!name || !phone || !address}
            className="w-full flex items-center justify-center gap-3 bg-whatsapp text-whatsapp-foreground py-4 rounded-2xl font-bold text-lg shadow-elevated disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110 active:scale-[0.98] transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <MessageCircle size={24} />
            📲 Order on WhatsApp
          </motion.button>

          <motion.button
            onClick={handleCallOrder}
            className="w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground py-4 rounded-2xl font-bold text-lg shadow-elevated hover:brightness-110 active:scale-[0.98] transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <Phone size={24} />
            📞 Call to Order
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
