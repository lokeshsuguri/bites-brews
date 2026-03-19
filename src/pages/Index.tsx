import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import WhyOrderHere from "@/components/WhyOrderHere";
import MostOrdered from "@/components/MostOrdered";
import MenuSection from "@/components/MenuSection";
import FloatingCart from "@/components/FloatingCart";
import Footer from "@/components/Footer";

const Index = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <HeroSection onStartOrdering={scrollToMenu} />
      <SearchBar />
      <WhyOrderHere />
      <MostOrdered />
      <div ref={menuRef}>
        <MenuSection />
      </div>
      <Footer />
      <FloatingCart />
    </div>
  );
};

export default Index;
