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
// import toast, { Toaster } from "react-hot-toast";

// import { selectTotalPrice } from "@/redux/features/cart-slice";
// import { useAppSelector } from "@/redux/store"; 
// import { useSelector } from "react-redux";
// import axios from "axios";

// import Breadcrumb from "../Common/Breadcrumb";
// import Login from "./Login";
// import Shipping from "./Shipping";
// import ShippingMethod from "./ShippingMethod";
// import PaymentMethod from "./PaymentMethod";
// import Coupon from "./Coupon";
// import Billing from "./Billing";
// import Discount from "../Cart/Discount";
// import OrderSummary from "../Cart/OrderSummary";

// const Checkout = () => {
  
//   const [loading, setLoading] = useState(false);
//   const cartItems = useAppSelector((state) => state.cartReducer.items);
//   const totalPrice = useSelector(selectTotalPrice);

//   const handlePayment = async () => {
//     setLoading(true);

//     try {
//       const res = await fetch("/api/payment", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
//           cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
//           amount: 5, // your amount
//           fullname: 'Mahmud',
//           email: 'mahmudulh883@gmail.com',
//           webhook_url: 'https://digital-product-orpin.vercel.app',
//           metadata: {phone: '01745130175'}
//         }),
//       });

//       const data = await res.json();
//       console.log("Payment Response:", data);

//       if (data?.payment_url
//         ) {
//           toast.success("Redirecting to payment gateway...");
//         // Redirect user to the payment page
//         window.location.href = data.payment_url;
//       } else {
//         toast.error("Payment creation failed. Try again.");
//       }
//     } catch (err) {
//       console.error("Payment Error:", err);
//       toast.error("Unexpected error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };
 
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
//                 {/* <Billing /> */}
//                 {/* <Shipping /> */}
//                 {/* billing */}
//                 <div className="mt-9">
//       <h2 className="font-medium text-dark text-xl sm:text-2xl mb-5.5">
//         Billing details
//       </h2>

//       <div className="bg-white shadow-1 rounded-[10px] p-4 sm:p-8.5">
//         <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
//           {/* Full Name */}
//           <div className="w-full lg:w-1/2">
//             <label htmlFor="fullname" className="block mb-2.5 font-medium">
//               Full Name  <span className="text-red">*</span>
//             </label>
//             <input
//               type="text"
//               name="fullname"
//               id="fullname"
//               placeholder="Sadman Sakib"
//               className="rounded-md border border-gray-300 bg-gray-50 placeholder:text-gray-500 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue-400/40"
//             />
//           </div>

//           {/* Email */}
//           <div className="w-full lg:w-1/2">
//             <label htmlFor="email" className="block mb-2.5 font-medium">
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               placeholder="support@gmail.com"
//               className="rounded-md border border-gray-300 bg-gray-50 placeholder:text-gray-500 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue-400/40"
//             />
//           </div>
//         </div>
//         <div className="mb-5">
//           <label htmlFor="phone" className="block mb-2.5">
//             Phone (Whatsapp) <span className="text-red">*</span>
//           </label>

//           <input
//             type="text"
//             name="phone"
//             placeholder="01568109275"
//             id="phone"
//             className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
//           />
//         </div>
//       </div>
//     </div>
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
//                 <Discount />
//               </div>
            
//               {/* Right Column */}
//               <div className="max-w-[455px] w-full space-y-7.5">
//                 {/* Order Summary */}
//                 {/* <ShippingMethod /> */}
//                 {/* <PaymentMethod /> */}
//                 {/* start my  */}
//                 <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-11 mt-9">
             
//               {/* <OrderSummary /> */}
//                {/* <!-- title --> */}
//           <div className="flex items-center justify-between py-5 border-b border-gray-3">
//             <div>
//               <h4 className="font-medium text-dark">Product</h4>
//             </div>
//             <div>
//               <h4 className="font-medium text-dark text-right">Subtotal</h4>
//             </div>
//           </div>

//           {/* <!-- product item --> */}
//           {cartItems.map((item, key) => (
//             <div key={key} className="flex items-center justify-between py-5 border-b border-gray-3">
//               <div>
//                 <p className="text-dark">{item.title}</p>
//               </div>
//               <div>
//                 <p className="text-dark text-right">
//                 ৳ {item.discountedPrice * item.quantity}
//                 </p>
//               </div>
//             </div>
//           ))}

//           {/* <!-- total --> */}
//           <div className="flex items-center justify-between pt-5">
//             <div>
//               <p className="font-medium text-lg text-dark">Total</p>
//             </div>
//             <div>
//               <p className="font-medium text-lg text-dark text-right">
//               ৳ {totalPrice}
//               </p>
//             </div>
//           </div>
//             </div>
              
//                    {/* <!-- checkout button --> */}
//           <button
//             type="submit"
//             onClick={handlePayment} disabled={loading}
//             className="w-full flex justify-center font-medium text-white bg-blue py-3 px-6 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
//           >
//             Process to Checkout
//           </button>
                
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
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

import { selectTotalPrice } from "@/redux/features/cart-slice";
import { useAppSelector } from "@/redux/store";

import Breadcrumb from "../Common/Breadcrumb";
import Login from "./Login";
import Discount from "../Cart/Discount";

// Billing Form Component
const BillingDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mt-9">
      <h2 className="font-medium text-dark text-xl sm:text-2xl mb-5.5">
        Billing details
      </h2>
      <div className="bg-white shadow-1 rounded-[10px] p-4 sm:p-8.5">
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
          <div className="w-full lg:w-1/2">
            <label htmlFor="fullname" className="block mb-2.5 font-medium">
              Full Name <span className="text-red">*</span>
            </label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Sadman Sakib"
              className="rounded-md border border-gray-300 bg-gray-50 placeholder:text-gray-500 w-full py-2.5 px-5 outline-none focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue-400/40"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <label htmlFor="email" className="block mb-2.5 font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="support@gmail.com"
              className="rounded-md border border-gray-300 bg-gray-50 placeholder:text-gray-500 w-full py-2.5 px-5 outline-none focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue-400/40"
            />
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="phone" className="block mb-2.5">
            Phone (Whatsapp) <span className="text-red">*</span>
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="01568109275"
            className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
          />
        </div>
      </div>
    </div>
  );
};

// Notes Component
const OtherNotes = ({ formData, setFormData }) => (
  <div className="bg-white shadow-1 rounded-[10px] p-4 sm:p-8.5">
    <label htmlFor="notes" className="block mb-2.5">
      Other Notes (optional)
    </label>
    <textarea
      name="notes"
      id="notes"
      value={formData.notes}
      onChange={(e) =>
        setFormData((prev) => ({ ...prev, notes: e.target.value }))
      }
      rows={5}
      placeholder="Notes about your order, e.g. special notes for delivery."
      className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full p-5 outline-none focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
    />
  </div>
);

// Order Summary Component
const OrderSummary = ({ cartItems, totalPrice }) => (
  <div className="flex flex-col gap-5 mt-9 bg-white shadow-1 rounded-[10px] p-4 sm:p-8.5">
    <div className="flex items-center justify-between py-5 border-b border-gray-3">
      <h4 className="font-medium text-dark">Product</h4>
      <h4 className="font-medium text-dark text-right">Subtotal</h4>
    </div>
    {cartItems.map((item, key) => (
      <div key={key} className="flex items-center justify-between py-5 border-b border-gray-3">
        <p className="text-dark">{item.title}</p>
        <p className="text-dark text-right">৳ {item.discountedPrice * item.quantity}</p>
      </div>
    ))}
    <div className="flex items-center justify-between pt-5">
      <p className="font-medium text-lg text-dark">Total</p>
      <p className="font-medium text-lg text-dark text-right">৳ {totalPrice}</p>
    </div>
  </div>
);

const Checkout = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handlePayment = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.fullname || !formData.phone) {
      toast.error("Please fill in required fields!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
          cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
          amount: totalPrice,
          fullname: formData.fullname,
          email: formData.email,
          metadata: {
            phone: formData.phone,
            notes: formData.notes,
            cartItems,
          },
          webhook_url: "https://digital-product-orpin.vercel.app",

          
        }),
      });

      const data = await res.json();
      if (data?.payment_url) {
        toast.success("Redirecting to payment gateway...");
        window.location.href = data.payment_url;
      } else {
        toast.error("Payment creation failed. Try again.");
      }
    } catch (err) {
      console.error("Payment Error:", err);
      toast.error("Unexpected error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <Breadcrumb title="Checkout" pages={["checkout"]} />
      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <form
            onSubmit={handlePayment}
            className="flex flex-col lg:flex-row gap-7.5 xl:gap-11"
          >
            {/* Left Column */}
            <div className="lg:max-w-[670px] w-full space-y-7.5">
              <Login />
              <BillingDetails formData={formData} setFormData={setFormData} />
              <OtherNotes formData={formData} setFormData={setFormData} />
              <Discount />
            </div>

            {/* Right Column */}
            <div className="max-w-[455px] w-full space-y-7.5">
              <OrderSummary cartItems={cartItems} totalPrice={totalPrice} />
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center font-medium text-white bg-blue py-3 px-6 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Processing..." : "Process to Checkout"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Checkout;
