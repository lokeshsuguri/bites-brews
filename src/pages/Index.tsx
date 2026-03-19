import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import MostOrdered from "@/components/MostOrdered";
import MenuSection from "@/components/MenuSection";
import FloatingCart from "@/components/FloatingCart";

const Index = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <HeroSection onStartOrdering={scrollToMenu} />
      <MostOrdered />
      <div ref={menuRef}>
        <MenuSection />
      </div>
      <FloatingCart />
    </div>
  );
};

export default Index;
