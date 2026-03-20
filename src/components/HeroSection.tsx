import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";

interface HeroSectionProps {
  onStartOrdering: () => void;
}

const HeroSection = ({ onStartOrdering }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBanner} alt="Delicious Indian food spread" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/60 to-foreground/30" />
      </div>

      <div className="relative px-6 pt-16 pb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-4xl mb-2">🍽️</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground font-display tracking-tight leading-tight">
            Bugle Rock Bites
          </h1>
        </motion.div>

        <motion.p
          className="mt-5 text-base md:text-lg text-primary-foreground/85 font-kannada leading-relaxed max-w-sm mx-auto"
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
          className="mt-8 px-10 py-4 gradient-hero rounded-full font-bold text-primary-foreground text-lg shadow-glow hover:scale-105 active:scale-95 transition-transform"
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
