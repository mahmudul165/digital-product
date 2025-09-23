// import React from "react";
// import Checkout from "@/components/Checkout";

// import { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "Checkout Page | NextCommerce Nextjs E-commerce template",
//   description: "This is Checkout Page for NextCommerce Template",
//   // other metadata
// };

// const CheckoutPage = () => {
//   return (
//     <main>
//       <Checkout />
//     </main>
//   );
// };

// export default CheckoutPage;
 

import dynamic from "next/dynamic";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout Page | NextCommerce Nextjs E-commerce template",
  description: "This is Checkout Page for NextCommerce Template",
};

// Dynamic import without disabling SSR
const Checkout = dynamic(() => import("@/components/Checkout"), {
  loading: () => <p className="text-center py-10">Loading checkout...</p>,
});

export default function CheckoutPage() {
  return (
    <main>
      <Checkout />
    </main>
  );
}
