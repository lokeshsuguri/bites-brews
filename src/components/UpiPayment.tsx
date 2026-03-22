import { QRCodeSVG } from "qrcode.react";
import { Smartphone, Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface UpiPaymentProps {
  amount: number;
  orderId: string;
}

const UPI_ID = "yourname@upi"; // TODO: Replace with actual UPI ID

const UpiPayment = ({ amount, orderId }: UpiPaymentProps) => {
  const [copied, setCopied] = useState(false);

  const upiUrl = `upi://pay?pa=${UPI_ID}&pn=Bugle Rock Bites&am=${amount}&cu=INR&tn=Order ${orderId}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="bg-card rounded-2xl shadow-card p-5 space-y-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-2">
        <Smartphone size={20} className="text-primary" />
        <h3 className="font-bold text-card-foreground font-display">Pay via UPI</h3>
      </div>

      {/* QR Code */}
      <div className="flex flex-col items-center gap-3">
        <div className="bg-white p-4 rounded-2xl shadow-soft">
          <QRCodeSVG
            value={upiUrl}
            size={180}
            level="H"
            includeMargin={false}
            bgColor="#ffffff"
            fgColor="#1a1a1a"
          />
        </div>
        <p className="text-xs text-muted-foreground text-center">
          Scan with any UPI app (GPay, PhonePe, Paytm)
        </p>
      </div>

      {/* Amount */}
      <div className="bg-accent/60 rounded-xl p-3 text-center">
        <p className="text-sm text-muted-foreground">Amount to pay</p>
        <p className="text-2xl font-extrabold text-primary">₹{amount}</p>
      </div>

      {/* UPI ID */}
      <div className="flex items-center justify-between bg-muted/50 rounded-xl px-4 py-3">
        <div>
          <p className="text-xs text-muted-foreground">UPI ID</p>
          <p className="font-semibold text-sm text-foreground">{UPI_ID}</p>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors active:scale-95"
        >
          {copied ? (
            <>
              <CheckCircle2 size={14} />
              Copied!
            </>
          ) : (
            <>
              <Copy size={14} />
              Copy
            </>
          )}
        </button>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        After payment, send your order via WhatsApp for confirmation
      </p>
    </motion.div>
  );
};

export default UpiPayment;
