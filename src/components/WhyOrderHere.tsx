import { motion } from "framer-motion";
import { Clock, Flame, BadgePercent } from "lucide-react";

const reasons = [
  { icon: Clock, title: "No Waiting", desc: "Order before you arrive" },
  { icon: Flame, title: "Fresh Food", desc: "Prepared instantly for you" },
  { icon: BadgePercent, title: "No Extra Charges", desc: "Direct from hotel" },
];

const WhyOrderHere = () => {
  return (
    <section className="px-4 py-6">
      <h2 className="text-xl font-bold text-foreground font-display mb-4">
        🚀 Why Order Here?
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            className="bg-card rounded-2xl shadow-card p-4 text-center flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <r.icon size={20} className="text-accent-foreground" />
            </div>
            <h3 className="text-xs font-bold text-card-foreground leading-tight">{r.title}</h3>
            <p className="text-[10px] text-muted-foreground leading-tight">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyOrderHere;
