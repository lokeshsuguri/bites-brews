import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { MenuItem } from "@/data/menu";

interface FoodCardProps {
  item: MenuItem;
  large?: boolean;
}

const FoodCard = ({ item, large = false }: FoodCardProps) => {
  const { items, addItem, updateQuantity } = useCart();
  const cartItem = items.find(i => i.id === item.id);
  const quantity = cartItem?.quantity || 0;

  return (
    <motion.div
      className={`bg-card rounded-2xl shadow-card overflow-hidden flex ${large ? "flex-col" : "flex-row"} transition-shadow hover:shadow-elevated`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35 }}
    >
      <div className={large ? "w-full h-40" : "w-28 h-28 flex-shrink-0"}>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className={`flex-1 p-3 flex ${large ? "flex-col" : "flex-row items-center justify-between"}`}>
        <div className={large ? "mb-3" : ""}>
          <h3 className={`font-semibold text-card-foreground ${large ? "text-base" : "text-sm"} leading-snug`}>
            {item.name}
          </h3>
          <p className="text-primary font-bold mt-0.5">₹{item.price}</p>
        </div>

        <div className="flex-shrink-0">
          {quantity === 0 ? (
            <button
              onClick={() => addItem(item)}
              className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-deep active:scale-95 transition-all shadow-soft"
            >
              <Plus size={16} /> Add
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-accent rounded-full px-2 py-1">
              <button
                onClick={() => updateQuantity(item.id, quantity - 1)}
                className="w-7 h-7 flex items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-orange-deep transition-colors"
              >
                <Minus size={14} />
              </button>
              <span className="w-6 text-center font-bold text-accent-foreground text-sm">{quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, quantity + 1)}
                className="w-7 h-7 flex items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-orange-deep transition-colors"
              >
                <Plus size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;
