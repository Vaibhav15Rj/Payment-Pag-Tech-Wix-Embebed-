
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import IndianPaymentOption from "./IndianPaymentOption";
import InternationalPaymentOption from "./InternationalPaymentOption";
import { Check } from "lucide-react";

const PaymentPage = () => {
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);
  const { toast } = useToast();
  
  const handlePaymentComplete = () => {
    setPaymentSubmitted(true);
    toast({
      title: "Payment Marked as Complete",
      description: "Thank you! We'll verify your payment shortly.",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-4">
      <div className="max-w-4xl mx-auto py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2">
            Complete Your Payment
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your preferred payment method based on your location
          </p>
        </div>

        {paymentSubmitted ? (
          <Card className="border-0 shadow-lg bg-payment-light-blue">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <div className="h-16 w-16 bg-payment-success rounded-full flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-white" strokeWidth={3} />
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
        ) : (
          <>
            <Tabs defaultValue="india" className="w-full">
              <div className="flex justify-center mb-6">
                <TabsList className="bg-gray-100">
                  <TabsTrigger 
                    value="india" 
                    className="data-[state=active]:bg-white data-[state=active]:text-payment-blue"
                  >
                    Paying from India
                  </TabsTrigger>
                  <TabsTrigger 
                    value="international" 
                    className="data-[state=active]:bg-white data-[state=active]:text-payment-blue"
                  >
                    Paying from Outside India
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="india">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Payment Options for India</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <IndianPaymentOption />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="international">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Payment Options for International Users</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <InternationalPaymentOption />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="mt-10 text-center">
              <div className="bg-gray-50 rounded-lg p-4 mb-6 mx-auto max-w-md">
                <p className="text-sm text-gray-500 mb-2">
                  After completing your payment using one of the methods above, please mark your payment as completed.
                </p>
              </div>
              
              <Button
                onClick={handlePaymentComplete}
                className="bg-payment-blue hover:bg-blue-700 text-white px-6 py-6 text-lg rounded-lg shadow-md transition-transform hover:scale-105"
              >
                Payment Completed
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
