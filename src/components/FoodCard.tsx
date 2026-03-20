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
      className={`bg-card rounded-2xl shadow-card overflow-hidden flex ${large ? "flex-col" : "flex-row"} transition-all duration-200 hover:shadow-elevated hover:-translate-y-0.5`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35 }}
    >
      <div className={`relative ${large ? "w-full h-44" : "w-[110px] h-[110px] flex-shrink-0"}`}>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {large && item.isMostOrdered && (
          <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full shadow-soft">
            🔥 Popular
          </span>
        )}
      </div>

      <div className={`flex-1 p-3.5 flex ${large ? "flex-col" : "flex-row items-center justify-between gap-2"}`}>
        <div className={large ? "mb-3" : "min-w-0 flex-1"}>
          <h3 className={`font-semibold text-card-foreground ${large ? "text-base" : "text-sm"} leading-snug truncate`}>
            {item.name}
          </h3>
          <p className="text-primary font-bold mt-1 text-base">₹{item.price}</p>
        </div>

        <div className="flex-shrink-0">
          {quantity === 0 ? (
            <button
              onClick={() => addItem(item)}
              className="flex items-center gap-1.5 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-bold hover:bg-orange-deep active:scale-95 transition-all shadow-soft"
            >
              <Plus size={16} /> Add
            </button>
          ) : (
            <div className="flex items-center gap-1.5 bg-accent rounded-full px-1.5 py-1 shadow-soft">
              <button
                onClick={() => updateQuantity(item.id, quantity - 1)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-orange-deep transition-colors active:scale-90"
              >
                <Minus size={14} />
              </button>
              <span className="w-7 text-center font-bold text-accent-foreground text-sm">{quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, quantity + 1)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-orange-deep transition-colors active:scale-90"
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
