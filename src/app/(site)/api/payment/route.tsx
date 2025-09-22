// // src/app/api/payment/route.js
// import axios from "axios";
// import { NextResponse } from "next/server";

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const amount = body.amount ?? 100; // set amount from client or default
//     const tran_id = "txn_" + Date.now();

//     const params = new URLSearchParams({
//       store_id: process.env.SSLC_STORE_ID,
//       store_passwd: process.env.SSLC_STORE_PASSWORD,
//       total_amount: String(amount),
//       currency: "BDT",
//       tran_id,
//       success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success?tran_id=${tran_id}`,
//       fail_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/fail?tran_id=${tran_id}`,
//       cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/cancel?tran_id=${tran_id}`,
//       ipn_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/ipn`,
//       cus_name: body.cus_name || "Customer",
//       cus_email: body.cus_email || "customer@example.com",
//       cus_phone: body.cus_phone || "01700000000",
//       product_name: body.product_name || "Test Product",
//       product_category: "General",
//       product_profile: "general"
//     });

//     const response = await axios.post(
//       "https://sandbox.sslcommerz.com/gwprocess/v4/api.php",
//       params.toString(),
//       { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
//     );

//     if (response.data && response.data.GatewayPageURL) {
//       return NextResponse.json({ gateway_url: response.data.GatewayPageURL, tran_id });
//     } else {
//       return NextResponse.json({ error: "Gateway URL not returned", data: response.data }, { status: 500 });
//     }
//   } catch (err) {
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }


// app/api/payment/route.js



import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  try {
    const body = await req.json();

    const response = await axios.post(
      "https://payment.rupantorpay.com/api/payment/checkout",
      {
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
        fullname: body.fullname,
        amount: body.amount,
        email: body.email,
        webhook_url: "https://digital-product-orpin.vercel.app",
        metadata: { phone: body.phone },
      },
      {
        headers: {
          accept: "application/json",
          "X-API-KEY": process.env.RUPANTORPAY_API_KEY, // safe in backend
          "content-type": "application/json",
        },
      }
    );

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error("Payment API Error:", error.response?.data || error.message);
    return NextResponse.json(
      { error: "Payment request failed" },
      { status: 500 }
    );
  }
}