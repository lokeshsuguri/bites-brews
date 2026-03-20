import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";

const FloatingCart = () => {
  const { totalItems, totalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <button
            onClick={() => navigate("/cart")}
            className="w-full max-w-lg mx-auto flex items-center justify-between gradient-hero text-primary-foreground px-5 py-4 rounded-2xl shadow-glow active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <ShoppingCart size={22} />
                <span className="absolute -top-2.5 -right-2.5 bg-card text-primary text-xs font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-soft">
                  {totalItems}
                </span>
              </div>
              <span className="font-semibold text-sm">
                {totalItems} item{totalItems > 1 ? "s" : ""} added
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg">₹{totalPrice}</span>
              <ChevronRight size={18} className="opacity-80" />
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCart;
