"use client";

import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 bg-red-50">
      <h1 className="text-4xl font-bold text-red-600">❌ Payment Canceled</h1>
      <p className="text-gray-700">Your payment was not completed. Please try again.</p>
      <Link
        href="/checkout"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
      >
        Try Again
      </Link>
    </div>
  );
}
