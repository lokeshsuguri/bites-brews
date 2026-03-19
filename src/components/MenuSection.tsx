import { useRef } from "react";
import { menuItems, categories, categoryEmojis } from "@/data/menu";
import FoodCard from "./FoodCard";
import { motion } from "framer-motion";

const MenuSection = () => {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToCategory = (cat: string) => {
    sectionRefs.current[cat]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="px-4 py-6">
      <h2 className="text-xl font-bold text-foreground font-display mb-4">
        🍛 Full Menu
      </h2>

      {/* Category pills */}
      <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide -mx-4 px-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => scrollToCategory(cat)}
            className="flex-shrink-0 px-4 py-2 bg-card rounded-full text-sm font-medium text-card-foreground shadow-soft border border-border hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap"
          >
            {categoryEmojis[cat]} {cat}
          </button>
        ))}
      </div>

      {/* Category sections */}
      {categories.map(cat => {
        const catItems = menuItems.filter(i => i.category === cat);
        return (
          <div
            key={cat}
            ref={el => { sectionRefs.current[cat] = el; }}
            className="mt-6"
          >
            <motion.h3
              className="text-lg font-bold text-foreground font-display mb-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {categoryEmojis[cat]} {cat}
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
