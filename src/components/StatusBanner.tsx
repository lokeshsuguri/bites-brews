import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const StatusBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const check = () => {
      const now = new Date();
      const hour = now.getHours();
      setIsOpen(hour >= 7 && hour < 22);
    };
    check();
    const interval = setInterval(check, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`w-full py-2 px-4 text-center text-sm font-semibold flex items-center justify-center gap-2 ${isOpen ? "bg-green-600 text-white" : "bg-destructive text-destructive-foreground"}`}>
      <Clock size={14} />
      {isOpen ? "✅ We're Open! (7 AM – 10 PM)" : "🔴 We're Closed (Opens at 7 AM)"}
    </div>
  );
};

export default StatusBanner;
