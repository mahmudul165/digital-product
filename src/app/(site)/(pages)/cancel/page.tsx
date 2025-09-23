"use client";

import Link from "next/link";

const CancelPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold text-red-600">❌ Payment Canceled</h1>
      <p className="text-gray-600">Your payment was not completed.</p>
      <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
        Try Again
      </Link>
    </div>
  );
};

export default CancelPage;
