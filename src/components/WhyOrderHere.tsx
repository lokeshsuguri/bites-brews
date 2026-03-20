import { motion } from "framer-motion";
import { Clock, Flame, BadgePercent } from "lucide-react";

const reasons = [
  { icon: Clock, title: "No Waiting", desc: "Order before you arrive", color: "text-primary" },
  { icon: Flame, title: "Fresh Food", desc: "Prepared instantly", color: "text-primary" },
  { icon: BadgePercent, title: "No Extra Cost", desc: "Direct from hotel", color: "text-primary" },
];

const WhyOrderHere = () => {
  return (
    <section className="px-4 py-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🚀</span>
        <h2 className="text-xl font-bold text-foreground font-display">Why Order Here?</h2>
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            className="bg-card rounded-2xl shadow-card p-3.5 text-center flex flex-col items-center gap-2.5 border border-border/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center">
              <r.icon size={22} className={r.color} />
            </div>
            <div>
              <h3 className="text-xs font-bold text-card-foreground leading-tight">{r.title}</h3>
              <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyOrderHere;
