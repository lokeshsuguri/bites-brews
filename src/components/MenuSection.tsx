import { useRef, useState } from "react";
import { menuItems, categories, categoryEmojis } from "@/data/menu";
import FoodCard from "./FoodCard";
import { motion } from "framer-motion";

const MenuSection = () => {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  const scrollToCategory = (cat: string) => {
    setActiveCategory(cat);
    sectionRefs.current[cat]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="px-4 py-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🍛</span>
        <h2 className="text-xl font-bold text-foreground font-display">Full Menu</h2>
      </div>

      {/* Category pills */}
      <div className="sticky top-0 z-30 bg-background/90 backdrop-blur-md -mx-4 px-4 py-3">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => scrollToCategory(cat)}
              className={`flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-semibold border transition-all whitespace-nowrap active:scale-95 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-glow"
                  : "bg-card text-card-foreground border-border shadow-soft hover:border-primary/30"
              }`}
            >
              {categoryEmojis[cat]} {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Category sections */}
      {categories.map(cat => {
        const catItems = menuItems.filter(i => i.category === cat);
        return (
          <div
            key={cat}
            ref={el => { sectionRefs.current[cat] = el; }}
            className="mt-8"
          >
            <motion.h3
              className="text-lg font-bold text-foreground font-display mb-3 flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-base">
                {categoryEmojis[cat]}
              </span>
              {cat}
            </motion.h3>
            <div className="space-y-3">
              {catItems.map(item => (
                <FoodCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default MenuSection;
