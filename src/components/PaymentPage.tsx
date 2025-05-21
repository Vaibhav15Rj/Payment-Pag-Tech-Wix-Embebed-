import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, IndianRupee } from "lucide-react";
import QRCodeAndUPI from "./QRCodeAndUPI";
import BankTransferDetails from "./BankTransferDetails";
import InternationalPayment from "./InternationalPayment";

const PaymentPage = () => {
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);
  const [paymentLocation, setPaymentLocation] = useState<"india" | "international">("india");
  const [paymentMethod, setPaymentMethod] = useState<"qr-upi" | "bank">("qr-upi");
  const { toast } = useToast();

  const handlePaymentComplete = () => {
    setPaymentSubmitted(true);
    toast({
      title: "Payment Marked as Complete",
      description: "Thank you! We'll verify your payment shortly.",
      duration: 5000,
    });
  };

  if (paymentSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
        <Card className="max-w-3xl w-full border-0 shadow-lg bg-payment-light-blue">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <div className="h-16 w-16 bg-payment-success rounded-full flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Complete!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for your payment. We'll process your order shortly.
              </p>
              <Button 
                variant="outline" 
                className="border-payment-blue text-payment-blue hover:bg-payment-blue hover:text-white"
                onClick={() => setPaymentSubmitted(false)}
              >
                Make Another Payment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="h-screen overflow-hidden flex flex-col items-center justify-center bg-white px-4 py-12">
      
      {/* Header Title */}
      <div className="w-full max-w-5xl flex items-center justify-between px-4 mb-8">
        <div className="flex-1 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#2EDEBE] sm:text-4xl mb-2">
            Complete Your Payment
          </h1>
        </div>
      </div>

      {/* Main Payment Card */}
      <Card className="max-w-3xl w-full border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Payment Location Selection */}
            <div>
              <h2 className="text-xl font-medium mb-4">Payment Option</h2>
              <div className="space-y-3">
                {/* India Option */}
                <div 
                  className={`flex items-center p-4 rounded-md border cursor-pointer transition-all ${
                    paymentLocation === "india" ? "border-[#0047AB] bg-[#EEF2FF]" : "border-gray-200"
                  }`}
                  onClick={() => setPaymentLocation("india")}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                    paymentLocation === "india" ? "bg-[#0047AB]" : "border border-gray-300"
                  }`}>
                    {paymentLocation === "india" && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                  <div className="flex items-center">
                    <IndianRupee className="h-5 w-5 text-[#0047AB] mr-2" />
                    <span>Paying from India</span>
                  </div>
                </div>
                
                {/* International Option */}
                <div 
                  className={`flex items-center p-4 rounded-md border cursor-pointer transition-all ${
                    paymentLocation === "international" ? "border-[#0047AB] bg-[#EEF2FF]" : "border-gray-200"
                  }`}
                  onClick={() => setPaymentLocation("international")}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                    paymentLocation === "international" ? "bg-[#0047AB]" : "border border-gray-300"
                  }`}>
                    {paymentLocation === "international" && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                  <div className="flex items-center">
                    <CreditCard className="h-5 w-5 text-[#0047AB] mr-2" />
                    <span>Paying from Outside India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method Section */}
            <div>
              {paymentLocation === "india" && (
                <>
                  <h2 className="text-xl font-medium mb-4">Payment Method</h2>
                  <div className="flex mb-6">
                    <button
                      className={`flex-1 py-2 transition-all ${
                        paymentMethod === "qr-upi" 
                          ? "bg-white border-t border-l border-r border-gray-200 text-[#0047AB]"
                          : "bg-gray-100 text-gray-600"
                      }`}
                      onClick={() => setPaymentMethod("qr-upi")}
                    >
                      QR Code & UPI
                    </button>
                    <button
                      className={`flex-1 py-2 transition-all ${
                        paymentMethod === "bank" 
                          ? "bg-white border-t border-l border-r border-gray-200 text-[#0047AB]"
                          : "bg-gray-100 text-gray-600"
                      }`}
                      onClick={() => setPaymentMethod("bank")}
                    >
                      Bank Transfer
                    </button>
                  </div>

                  {/* ✅ Bank Transfer Note */}
                  {paymentMethod === "bank" && (
                    <p className="text-sm text-gray-600 mb-4 text-center">
                      Please use the bank details below to transfer your payment via <strong>NEFT</strong> or <strong>RTGS</strong>.
                    </p>
                  )}

                  <div className="bg-white p-4 rounded-md border border-gray-200">
                    {paymentMethod === "qr-upi" ? <QRCodeAndUPI /> : <BankTransferDetails />}
                  </div>
                </>
              )}

              {paymentLocation === "international" && <InternationalPayment />}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentPage;
