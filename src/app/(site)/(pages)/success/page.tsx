"use client";

import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 bg-green-50">
      <h1 className="text-4xl font-bold text-green-600">✅ Payment Successful</h1>
      <p className="text-gray-700">Thank you for your payment, your order is confirmed.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
