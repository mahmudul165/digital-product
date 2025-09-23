  

// import { NextResponse } from "next/server";
// import axios from "axios";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     console.log("Backend received body:", body);

//     // Destructure fields from body
//     const { fullname, email, amount, metadata, webhook_url, success_url, cancel_url } = body;

//     const response = await axios.post(
//       "https://payment.rupantorpay.com/api/payment/checkout",
//       {
//         fullname,
//         email,
//         amount,
//         success_url,
//         cancel_url,
//         webhook_url: webhook_url || "https://digital-product-orpin.vercel.app",
//         metadata: {
//           phone: metadata?.phone,
//           notes: metadata?.notes,
//           cartItems: metadata?.cartItems,
//         },
//       },
//       {
//         headers: {
//           accept: "application/json",
//           "X-API-KEY": process.env.RUPANTORPAY_API_KEY, // safe in backend
//           "content-type": "application/json",
//         },
//       }
//     );

//     console.log("Payment Gateway Response:", response.data);

//     return NextResponse.json(response.data, { status: 200 });
//   } catch (error) {
//     console.error("Payment API Error:", error.response?.data || error.message);
//     return NextResponse.json(
//       { error: "Payment request failed" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import axios from "axios";

// POST /api/payment/checkout
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Backend received body:", body);

    const { fullname, email, amount, metadata, webhook_url, success_url, cancel_url } = body;

    // Prepare payload for RupantorPay
    const payload = {
      fullname,
      email,
      amount,
      success_url: success_url || `${process.env.NEXT_PUBLIC_BASE_URL}/`, // redirect to home if not provided
      cancel_url: cancel_url || `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      webhook_url: webhook_url || `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment-webhook`,
      metadata: {
        phone: metadata?.phone,
        notes: metadata?.notes,
        cartItems: metadata?.cartItems,
      },
    };

    // Call RupantorPay Checkout API
    const response = await axios.post(
      "https://payment.rupantorpay.com/api/payment/checkout",
      payload,
      {
        headers: {
          accept: "application/json",
          "X-API-KEY": process.env.RUPANTORPAY_API_KEY, // safe on backend
          "content-type": "application/json",
        },
      }
    );

    console.log("Payment Gateway Response:", response.data);

    return NextResponse.json(response.data, { status: 200 });
  } catch (error: any) {
    console.error("Payment API Error:", error.response?.data || error.message);
    return NextResponse.json(
      { error: "Payment request failed" },
      { status: 500 }
    );
  }
}

