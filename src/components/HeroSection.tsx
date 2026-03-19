import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";

interface HeroSectionProps {
  onStartOrdering: () => void;
}

const HeroSection = ({ onStartOrdering }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden rounded-b-2xl">
      <div className="absolute inset-0">
        <img src={heroBanner} alt="Delicious Indian food spread" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/20" />
      </div>

      <div className="relative px-5 pt-12 pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground font-display tracking-tight">
            🍽️ Bugle Rock Bites
          </h1>
        </motion.div>

        <motion.p
          className="mt-4 text-base md:text-lg text-primary-foreground/90 font-kannada leading-relaxed max-w-md mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ನಿಮ್ಮ ಊಟ ನಿಮ್ಮ ಸಮಯಕ್ಕೆ 🍛
          <br />
          ಇಲ್ಲಿ ಆರ್ಡರ್ ಮಾಡಿ, ಕಾಯದೇ ಸವಿಯಿರಿ!
        </motion.p>

        <motion.button
          onClick={onStartOrdering}
          className="mt-6 px-8 py-3.5 gradient-hero rounded-full font-semibold text-primary-foreground text-lg shadow-glow hover:scale-105 active:scale-95 transition-transform"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Ordering 🚀
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
