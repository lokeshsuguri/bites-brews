const Footer = () => {
  return (
    <footer className="bg-card border-t border-border px-4 py-8 mt-6">
      <div className="max-w-lg mx-auto text-center space-y-3">
        <h3 className="font-bold text-foreground font-display text-lg">🍽️ Bugle Rock Bites</h3>
        <div className="space-y-1.5 text-sm text-muted-foreground">
          <p>📍 Bugle Rock, Basavanagudi</p>
          <p>
            📞{" "}
            <a href="tel:9182132773" className="text-primary font-medium hover:underline">
              9182132773
            </a>
          </p>
          <p>⏰ Open: 7 AM – 10 PM</p>
        </div>
        <p className="text-xs text-muted-foreground pt-2">
          © {new Date().getFullYear()} Bugle Rock Bites. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
