
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

// Replace this with your actual Razorpay payment link
const RAZORPAY_LINK = "https://rzp.io/your-payment-link";

const InternationalPaymentOption = () => {
  const handleRazorpayClick = () => {
    // Open Razorpay link in a new tab
    window.open(RAZORPAY_LINK, "_blank");
  };

  return (
    <div className="flex flex-col items-center">
      <Card className="bg-payment-light-blue border-0 w-full mb-8">
        <CardContent className="pt-6 pb-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <img 
                src="https://placehold.co/200x80/EEF2FF/4F46E5?text=Razorpay" 
                alt="Razorpay Logo" 
                className="h-20 object-contain"
              />
            </div>
            <h3 className="text-xl font-medium mb-2">Pay via Razorpay</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              For international payments, we use Razorpay which accepts all major 
              credit cards, debit cards, and other payment methods.
            </p>
            
            <Button 
              onClick={handleRazorpayClick}
              className="bg-payment-blue hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg shadow-md transition-all hover:shadow-lg flex items-center gap-2"
            >
              Pay with Razorpay
              <ExternalLink size={18} />
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600 max-w-md text-center">
        <p>
          After completing your payment via Razorpay, you'll be redirected back to this page. 
          If not, please click the "Payment Completed" button below.
        </p>
      </div>
    </div>
  );
};

export default InternationalPaymentOption;
