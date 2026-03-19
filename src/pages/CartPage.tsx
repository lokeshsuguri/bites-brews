import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const CartPage = () => {
  const { items, updateQuantity, removeItem, totalPrice, totalItems } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
        <ShoppingBag size={64} className="text-muted-foreground mb-4" />
        <h2 className="text-xl font-bold text-foreground font-display">Your cart is empty</h2>
        <p className="text-muted-foreground mt-2">Add some delicious items to get started!</p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-3 gradient-hero text-primary-foreground rounded-full font-semibold shadow-glow"
        >
          Browse Menu
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-card border-b border-border px-4 py-3 flex items-center gap-3 shadow-soft">
        <button onClick={() => navigate("/")} className="p-2 rounded-full hover:bg-accent transition-colors">
          <ArrowLeft size={20} className="text-foreground" />
        </button>
        <h1 className="text-lg font-bold text-foreground font-display">Your Cart ({totalItems})</h1>
      </div>

      {/* Items */}
      <div className="px-4 py-4 space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-card rounded-xl shadow-card p-3 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-card-foreground text-sm truncate">{item.name}</h3>
              <p className="text-primary font-bold text-sm">₹{item.price * item.quantity}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-accent rounded-full px-1.5 py-1">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-primary text-primary-foreground"
                >
                  <Minus size={14} />
                </button>
                <span className="w-5 text-center font-bold text-sm text-accent-foreground">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-primary text-primary-foreground"
                >
                  <Plus size={14} />
                </button>
              </div>
              <button onClick={() => removeItem(item.id)} className="p-1.5 text-destructive hover:bg-destructive/10 rounded-full transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bill */}
      <div className="px-4 mt-4">
        <div className="bg-card rounded-xl shadow-card p-4">
          <h3 className="font-bold text-card-foreground font-display mb-3">Bill Summary</h3>
          {items.map(item => (
            <div key={item.id} className="flex justify-between text-sm text-muted-foreground py-1">
              <span>{item.name} × {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
          <div className="border-t border-border mt-3 pt-3 flex justify-between font-bold text-foreground">
            <span>Total</span>
            <span className="text-primary text-lg">₹{totalPrice}</span>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-background/80 backdrop-blur-sm border-t border-border">
        <button
          onClick={() => navigate("/checkout")}
          className="w-full max-w-lg mx-auto flex items-center justify-center gap-2 gradient-hero text-primary-foreground py-4 rounded-2xl font-bold text-lg shadow-glow"
        >
          Proceed to Checkout · ₹{totalPrice}
        </button>
      </div>
    </div>
  );
};

export default CartPage;
