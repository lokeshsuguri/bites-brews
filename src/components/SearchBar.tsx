import { useState } from "react";
import { Search, X } from "lucide-react";
import { menuItems } from "@/data/menu";
import FoodCard from "./FoodCard";
import { motion, AnimatePresence } from "framer-motion";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const results = query.trim()
    ? menuItems.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const showResults = query.trim().length > 0;

  return (
    <div className="px-4 py-3">
      <div className="relative">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder="Search for dishes..."
          className="w-full pl-11 pr-10 py-3 rounded-2xl border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring shadow-soft transition text-sm"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-accent transition-colors"
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
                <p className="text-xs text-muted-foreground px-1">
                  {results.length} result{results.length > 1 ? "s" : ""} found
                </p>
                {results.map(item => (
                  <FoodCard key={item.id} item={item} />
                ))}
              </>
            ) : (
              <p className="text-center text-muted-foreground text-sm py-6">
                No dishes found for "{query}"
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
