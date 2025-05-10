
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";

const BANK_DETAILS = {
  accountName: "Your Business Name",
  accountNumber: "1234567890123456",
  ifscCode: "ABCD0123456",
  bankName: "Your Bank Name",
  branch: "Your Branch Location",
};

const BankTransferDetails = () => {
  const { toast } = useToast();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(fieldName);
      toast({
        title: "Copied to clipboard",
        description: `${fieldName} has been copied.`,
        duration: 2000,
      });
      
      setTimeout(() => {
        setCopiedField(null);
      }, 2000);
    });
  };

  return (
    <div className="space-y-4">
      {Object.entries(BANK_DETAILS).map(([key, value], index) => (
        <div key={key}>
          <div className="flex justify-between items-center py-2">
            <div className="text-gray-600 capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">{value}</span>
              <Button 
                variant="ghost" 
                size="sm"
                className="h-8 px-2"
                onClick={() => copyToClipboard(value.toString(), key)}
              >
                {copiedField === key ? (
                  <Check className="h-3 w-3 text-payment-success" />
                ) : (
                  "Copy"
                )}
              </Button>
            </div>
          </div>
          {index < Object.entries(BANK_DETAILS).length - 1 && <Separator />}
        </div>
      ))}
    </div>
  );
};

export default BankTransferDetails;
