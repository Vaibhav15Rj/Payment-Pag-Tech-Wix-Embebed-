
import React from "react";

const QR_CODE_URL = "/images/qr-code.jpg";

const UPI_ID = "turtle.ml@axl";

const QRCodeAndUPI = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-4 rounded-lg mb-4">
        <img 
          src={QR_CODE_URL} 
          alt="Payment QR Code" 
          className="w-64 h-64 object-cover"
        />
      </div>
      <p className="text-center text-gray-600">
        Scan to pay via UPI
      </p>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500 mb-1">Or pay using UPI ID</p>
        <p className="text-lg font-semibold text-[#0047AB]">{UPI_ID}</p>
      </div>
    </div>
  );
};

export default QRCodeAndUPI;
