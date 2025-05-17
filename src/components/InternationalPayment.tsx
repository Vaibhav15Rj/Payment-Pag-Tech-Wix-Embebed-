
import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

// Replace this with your actual Razorpay payment link
const RAZORPAY_LINK = "https://pages.razorpay.com/pl_QVqdshsEY7fnwy/view";

const InternationalPayment = () => {
  const handleRazorpayClick = () => {
    // Open Razorpay link in a new tab
    window.open(RAZORPAY_LINK, "_blank");
  };

  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-6">
        <img 
          src="https://placehold.co/200x80/EEF2FF/0047AB?text=Razorpay" 
          alt="Razorpay Logo" 
          className="h-20 object-contain"
        />
      </div>
      <h3 className="text-xl font-medium mb-2">Pay via Razorpay</h3>
      <p className="text-gray-600 mb-6">
        For international payments, we use Razorpay which accepts all major 
        credit cards, debit cards, and other payment methods.
      </p>
      
      <Button 
        onClick={handleRazorpayClick}
        className="bg-[#0047AB] hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-md shadow-md transition-all flex items-center gap-2"
      >
        Pay with Razorpay
        <ExternalLink size={18} />
      </Button>
    </div>
  );
};

export default InternationalPayment;
