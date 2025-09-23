"use client";

import Link from "next/link";

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold text-green-600">✅ Payment Successful!</h1>
      <p className="text-gray-600">Thank you for your payment.</p>
      <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
        Back to Home
      </Link>
    </div>
  );
};

export default SuccessPage;
