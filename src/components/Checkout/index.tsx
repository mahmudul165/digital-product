// "use client";
// import React from "react";
// import { useState } from "react";
// import Breadcrumb from "../Common/Breadcrumb";
// import Login from "./Login";
// import Shipping from "./Shipping";
// import ShippingMethod from "./ShippingMethod";
// import PaymentMethod from "./PaymentMethod";
// import Coupon from "./Coupon";
// import Billing from "./Billing";
// import axios from "axios"; 

// const Checkout = () => {

//   const [loading, setLoading] = useState(false);

//   const handlePayment = async () => {
//     setLoading(true);
//     try {
//       const { data } = await axios.post("/api/payment", {
//         fullname: "Mahmud",
//         email: "m@gmail.com",
//         phone: "017XXXXXXXX",
//         amount: 5
//       });

//       if (data?.checkout_url) {
//         window.location.href = data.checkout_url; // Redirect to RupantorPay
//       } else {
//         alert("Payment initiation failed.");
//       }
//     } catch (err) {
//       console.error("Payment Error:", err.response?.data || err.message);
//       alert("Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };
//   const orderItems = [
//     { name: "iPhone 14 Plus, 6/128GB", price: 899 },
//     { name: "Asus RT Dual Band Router", price: 129 },
//     { name: "Havit HV-G69 USB Gamepad", price: 29 },
//     { name: "Shipping Fee", price: 15 },
//   ];

//   const totalPrice = orderItems.reduce((sum, item) => sum + item.price, 0);




//   return (
//     <>
//       <Breadcrumb title="Checkout" pages={["checkout"]} />

//       <section className="overflow-hidden py-20 bg-gray-2">
//         <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
//           <form>
//             <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-11">
//               {/* Left Column */}
//               <div className="lg:max-w-[670px] w-full space-y-7.5">
//                 <Login />
//                 <Billing />
//                 <Shipping />

//                 {/* Other Notes */}
//                 <div className="bg-white shadow-1 rounded-[10px] p-4 sm:p-8.5">
//                   <label htmlFor="notes" className="block mb-2.5">
//                     Other Notes (optional)
//                   </label>
//                   <textarea
//                     name="notes"
//                     id="notes"
//                     rows={5}
//                     placeholder="Notes about your order, e.g. special notes for delivery."
//                     className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full p-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
//                   ></textarea>
//                 </div>
//               </div>

//               {/* Right Column */}
//               <div className="max-w-[455px] w-full space-y-7.5">
//                 {/* Order Summary */}
//                 <div className="bg-white shadow-1 rounded-[10px]">
//                   <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
//                     <h3 className="font-medium text-xl text-dark">Your Order</h3>
//                   </div>

//                   <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5 space-y-5">
//                     {/* Titles */}
//                     <div className="flex items-center justify-between py-5 border-b border-gray-3">
//                       <h4 className="font-medium text-dark">Product</h4>
//                       <h4 className="font-medium text-dark text-right">Subtotal</h4>
//                     </div>

//                     {/* Order Items */}
//                     {orderItems.map((item, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center justify-between py-5 border-b border-gray-3"
//                       >
//                         <p className="text-dark">{item.name}</p>
//                         <p className="text-dark text-right">${item.price.toFixed(2)}</p>
//                       </div>
//                     ))}

//                     {/* Total */}
//                     <div className="flex items-center justify-between pt-5">
//                       <p className="font-medium text-lg text-dark">Total</p>
//                       <p className="font-medium text-lg text-dark text-right">
//                         ${totalPrice.toFixed(2)}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <Coupon />
//                 {/* <ShippingMethod /> */}
//                 {/* <PaymentMethod /> */}

//                 {/* Checkout Button */}
//                 <button
//                   type="submit"
//                   onClick={handlePayment}
//                   className="w-full flex justify-center font-medium text-white bg-blue py-3 px-6 rounded-md ease-out duration-200 hover:bg-blue-dark"
//                 >
//                   Proceed to Checkout
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Checkout;








// "use client";

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import Breadcrumb from "../Common/Breadcrumb";
// import Login from "./Login";
// import Shipping from "./Shipping";
// import ShippingMethod from "./ShippingMethod";
// import PaymentMethod from "./PaymentMethod";
// import Coupon from "./Coupon";
// import Billing from "./Billing";

// const Checkout = () => {
//   const [loading, setLoading] = useState(false);

//   const handlePayment = async () => {
//     const options = {
//       method: "POST",
//       url: "https://payment.rupantorpay.com/api/payment/checkout",
//       headers: {
//         accept: "application/json",
//         "X-API-KEY": process.env.RUPANTORPAY_API_KEY,
//         "content-type": "application/json",
//       },
//       data: {
//         success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
//         cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
//         fullname: "mahmud",
//         amount: "35",
//         email: "mah@gmail.com",
//         webhook_url: "https://digital-product-orpin.vercel.app",
//         metadata: { phone: "01568109275" },
//       },
//     };

//     try {
//       console.log("check options", options);
//       const res = await axios.request(options);
//       console.log("test response", res);
//       console.log("test data", res?.data);
//       console.log("test status", res?.data?.payment_url);

//       // If status is true, redirect to payment_url
//       if (res?.data) {
//         window.location.href = res.data?.payment_url;
//       } else {
//         alert("Failed to create payment. Please try again.");
//       }
//     } catch (error) {
//       console.error("Payment Error:", error);
//       alert("Something went wrong while processing payment.");
//     }
//   };
  


//   // const handlePayment = async () => {
//   //   try {
//   //     const res = await axios.post("/api/payment", {
//   //       fullname: "mahmud",
//   //       amount: "35",
//   //       email: "mah@gmail.com",
//   //       phone: "01568109275",
//   //     });

//   //     console.log("API Response:", res.data);

//   //     if (res.data?.status) {
//   //       window.location.href = res.data.payment_url; // redirect user
//   //     } else {
//   //       alert("Failed to create payment. Please try again.");
//   //     }
//   //   } catch (error) {
//   //     console.error("Payment Error:", error);
//   //     alert("Something went wrong while processing payment.");
//   //   }
//   // };

//   // useEffect(() => {
//   //   // Optional: Trigger payment on page load for testing
//   //   // handlePayment();
//   // }, []);
//   const orderItems = [
//     { name: "iPhone 14 Plus, 6/128GB", price: 899 },
//     { name: "Asus RT Dual Band Router", price: 129 },
//     { name: "Havit HV-G69 USB Gamepad", price: 29 },
//     { name: "Shipping Fee", price: 15 },
//   ];

//   const totalPrice = orderItems.reduce((sum, item) => sum + item.price, 0);

//   return (
//     <>
//       {/* <Breadcrumb title="Checkout" pages={["checkout"]} /> */}

//       <section className="overflow-hidden py-20 bg-gray-2">
//         <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
//           <form>
//             <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-11">
//               {/* Left Column */}
//               <div className="lg:max-w-[670px] w-full space-y-7.5">
//                 {/* <Login /> */}
//                 {/* <Billing />
//                 <Shipping /> */}

//                 {/* Other Notes */}
//                 {/* <div className="bg-white shadow-1 rounded-[10px] p-4 sm:p-8.5">
//                   <label htmlFor="notes" className="block mb-2.5">
//                     Other Notes (optional)
//                   </label>
//                   <textarea
//                     name="notes"
//                     id="notes"
//                     rows={5}
//                     placeholder="Notes about your order, e.g. special notes for delivery."
//                     className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full p-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
//                   ></textarea>
//                 </div> */}
//               </div>

//               {/* Right Column */}
//               <div className="max-w-[455px] w-full space-y-7.5">
//                 {/* Order Summary */}
//                 <div className="bg-white shadow-1 rounded-[10px]">
//                   <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
//                     <h3 className="font-medium text-xl text-dark">Your Order</h3>
//                   </div>

//                   <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5 space-y-5">
//                     {/* Titles */}
//                     <div className="flex items-center justify-between py-5 border-b border-gray-3">
//                       <h4 className="font-medium text-dark">Product</h4>
//                       <h4 className="font-medium text-dark text-right">Subtotal</h4>
//                     </div>

//                     {/* Order Items */}
//                     {/* {orderItems.map((item, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center justify-between py-5 border-b border-gray-3"
//                       >
//                         <p className="text-dark">{item.name}</p>
//                         <p className="text-dark text-right">${item.price.toFixed(2)}</p>
//                       </div>
//                     ))} */}

//                     {/* Total */}
//                     <div className="flex items-center justify-between pt-5">
//                       <p className="font-medium text-lg text-dark">Total</p>
//                       {/* <p className="font-medium text-lg text-dark text-right">
//                         ${totalPrice.toFixed(2)}
//                       </p> */}
//                     </div>
//                   </div>
//                 </div>

//                 {/* <Coupon /> */}
//                 {/* <ShippingMethod /> */}
//                 {/* <PaymentMethod /> */}

//                 {/* Checkout Button */}
//                 <button
//                  type="submit"
//                   onClick={handlePayment}
//                   disabled={loading}
//                   // className={`w-full flex justify-center font-medium text-white bg-blue py-3 px-6 rounded-md ease-out duration-200 hover:bg-blue-dark ${
//                   //   loading ? "opacity-70 cursor-not-allowed" : ""
//                   // }`}
//                 >
//                   {/* {loading ? "Processing..." : "Proceed to Checkout"} */}
//                   pay
//                 </button>

//                 <button onClick={handlePayment} className="bg-blue-500 text-white p-2 rounded">
//         Pay Now
//       </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Checkout;










"use client";

import React, { useState } from "react";

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
          cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
          amount: 100, // your amount

          fullname: 'mahmud',

    email: 'mah@gmail.com',
        }),
      });

      const data = await res.json();
      console.log("Payment Response:", data);

      if (data.checkout_url) {
        // Redirect user to the payment page
        window.location.href = data.checkout_url;
      } else {
        alert("Payment creation failed");
      }
    } catch (err) {
      console.error("Payment Error:", err);
      alert("Payment Error. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-5">
      <h1>Checkout Page</h1> <h1>Checkout Page</h1> <h1>Checkout Page</h1> <h1>Checkout Page</h1> <h1>Checkout Page</h1> <h1>Checkout Page</h1> <h1>Checkout Page</h1> <h1>Checkout Page</h1>
      <button onClick={handlePayment} disabled={loading}>
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
};

export default Checkout;