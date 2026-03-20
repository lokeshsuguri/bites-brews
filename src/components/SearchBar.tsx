import { useState } from "react";
import { Search, X } from "lucide-react";
import { menuItems } from "@/data/menu";
import FoodCard from "./FoodCard";
import { motion, AnimatePresence } from "framer-motion";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const results = query.trim()
    ? menuItems.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const showResults = query.trim().length > 0;

  return (
    <div className="px-4 py-3">
      <div className="relative">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search for dishes..."
          className="w-full pl-11 pr-10 py-3.5 rounded-2xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent shadow-soft transition text-sm font-medium"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-accent transition-colors"
          >
            <X size={16} className="text-muted-foreground" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {showResults && (
          <motion.div
            className="mt-3 space-y-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {results.length > 0 ? (
              <>
                <p className="text-xs text-muted-foreground font-medium px-1">
                  {results.length} result{results.length > 1 ? "s" : ""} found
                </p>
                {results.map(item => (
                  <FoodCard key={item.id} item={item} />
                ))}
              </>
            ) : (
              <div className="text-center py-8">
                <span className="text-3xl block mb-2">🍽️</span>
                <p className="text-muted-foreground text-sm font-medium">
                  No dishes found for "{query}"
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
