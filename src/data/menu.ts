import paneerButterMasala from "@/assets/paneer-butter-masala.jpg";
import vegBiryani from "@/assets/veg-biryani.jpg";
import rotiCurryCombo from "@/assets/roti-curry-combo.jpg";
import gobiManchurian from "@/assets/gobi-manchurian.jpg";
import masalaDosa from "@/assets/masala-dosa.jpg";
import idli from "@/assets/idli.jpg";
import gheeRice from "@/assets/ghee-rice.jpg";
import paneerChilli from "@/assets/paneer-chilli.jpg";
import butterNaan from "@/assets/butter-naan.jpg";
import filterCoffee from "@/assets/filter-coffee.jpg";
import gulabJamun from "@/assets/gulab-jamun.jpg";
import vegFriedRice from "@/assets/veg-fried-rice.jpg";
import alooMasala from "@/assets/aloo-masala.jpg";
import mixVeg from "@/assets/mix-veg.jpg";
import rasmalai from "@/assets/rasmalai.jpg";
import iceCream from "@/assets/ice-cream.jpg";
import tea from "@/assets/tea.jpg";
import buttermilk from "@/assets/buttermilk.jpg";
import plainDosa from "@/assets/plain-dosa.jpg";
import jeeraRice from "@/assets/jeera-rice.jpg";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isMostOrdered?: boolean;
}

export const menuItems: MenuItem[] = [
  // Most Ordered
  { id: "paneer-butter-masala", name: "Paneer Butter Masala", price: 100, image: paneerButterMasala, category: "Curries", isMostOrdered: true },
  { id: "veg-dum-biryani", name: "Veg Dum Biryani", price: 85, image: vegBiryani, category: "Meals & Rice", isMostOrdered: true },
  { id: "roti-curry-combo", name: "Roti Curry Combo", price: 75, image: rotiCurryCombo, category: "Breads & Combos", isMostOrdered: true },
  { id: "gobi-manchurian", name: "Gobi Manchurian", price: 65, image: gobiManchurian, category: "Chinese", isMostOrdered: true },

  // Meals & Rice
  { id: "ghee-rice", name: "Ghee Rice", price: 80, image: gheeRice, category: "Meals & Rice" },
  { id: "jeera-rice", name: "Jeera Rice", price: 80, image: jeeraRice, category: "Meals & Rice" },

  // Tiffin
  { id: "idli", name: "Idli", price: 30, image: idli, category: "Tiffin" },
  { id: "masala-dosa", name: "Masala Dosa", price: 60, image: masalaDosa, category: "Tiffin" },
  { id: "plain-dosa", name: "Plain Dosa", price: 40, image: plainDosa, category: "Tiffin" },

  // Chinese
  { id: "paneer-chilli", name: "Paneer Chilli", price: 110, image: paneerChilli, category: "Chinese" },
  { id: "veg-fried-rice", name: "Veg Fried Rice", price: 80, image: vegFriedRice, category: "Chinese" },

  // Breads & Combos
  { id: "roti", name: "Roti", price: 20, image: rotiCurryCombo, category: "Breads & Combos" },
  { id: "butter-naan", name: "Butter Naan", price: 40, image: butterNaan, category: "Breads & Combos" },

  // Curries
  { id: "aloo-masala", name: "Aloo Masala", price: 70, image: alooMasala, category: "Curries" },
  { id: "mix-veg-curry", name: "Mix Veg Curry", price: 75, image: mixVeg, category: "Curries" },

  // Drinks
  { id: "filter-coffee", name: "Filter Coffee", price: 20, image: filterCoffee, category: "Drinks" },
  { id: "tea", name: "Tea", price: 15, image: tea, category: "Drinks" },
  { id: "buttermilk", name: "Buttermilk", price: 20, image: buttermilk, category: "Drinks" },

  // Desserts
  { id: "gulab-jamun", name: "Gulab Jamun", price: 18, image: gulabJamun, category: "Desserts" },
  { id: "ice-cream", name: "Ice Cream", price: 40, image: iceCream, category: "Desserts" },
  { id: "rasmalai", name: "Rasmalai", price: 30, image: rasmalai, category: "Desserts" },
];

export const categories = [
  "Meals & Rice",
  "Tiffin",
  "Chinese",
  "Breads & Combos",
  "Curries",
  "Drinks",
  "Desserts",
];

export const categoryEmojis: Record<string, string> = {
  "Meals & Rice": "🍛",
  "Tiffin": "🥞",
  "Chinese": "🥡",
  "Breads & Combos": "🫓",
  "Curries": "🍲",
  "Drinks": "☕",
  "Desserts": "🍮",
};
