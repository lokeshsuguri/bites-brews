import { menuItems } from "@/data/menu";
import FoodCard from "./FoodCard";

const MostOrdered = () => {
  const mostOrdered = menuItems.filter(i => i.isMostOrdered);

  return (
    <section className="px-4 py-6">
      <h2 className="text-xl font-bold text-foreground font-display mb-4">
        🔥 Most Ordered
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {mostOrdered.map(item => (
          <FoodCard key={item.id} item={item} large />
        ))}
      </div>
    </section>
  );
};

export default MostOrdered;
