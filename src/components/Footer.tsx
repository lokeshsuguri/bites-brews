import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border px-4 py-10 mt-8">
      <div className="max-w-lg mx-auto text-center space-y-4">
        <h3 className="font-bold text-foreground font-display text-lg">🍽️ Bugle Rock Bites</h3>
        <div className="space-y-2.5 text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <MapPin size={14} className="text-primary" />
            Bugle Rock, Basavanagudi
          </p>
          <p className="flex items-center justify-center gap-2">
            <Phone size={14} className="text-primary" />
            <a href="tel:9182132773" className="text-primary font-semibold hover:underline">
              9182132773
            </a>
          </p>
          <p className="flex items-center justify-center gap-2">
            <Clock size={14} className="text-primary" />
            Open: 7 AM – 10 PM
          </p>
        </div>
        <p className="text-xs text-muted-foreground pt-3 border-t border-border">
          © {new Date().getFullYear()} Bugle Rock Bites. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
