// src/app/(site)/payment/page.js
"use client";
import { useState } from "react";

export default function PaymentPage() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: "Mahmud",
          email: "m@gmail.com",
          amount: 100,
          phone: "017XXXXXXXX",
        }),
      });

      const data = await res.json();
      console.log("Payment Response:", data);

      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      } else {
        alert("Checkout URL not received!");
      }
    } catch (err) {
      console.error(err);
      alert("Payment failed!");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Pay with SSLCommerz (sandbox)</h1>
      <button
        onClick={handlePayment}
        disabled={loading}
        className="mt-4 px-4 py-2 rounded bg-blue-600 text-white"
      >
        {loading ? "Processing..." : "Pay 1000 BDT"}
      </button>
    </div>
  );
}
