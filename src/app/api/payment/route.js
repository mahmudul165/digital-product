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


import axios from "axios";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.fullname || !body.email || !body.amount) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    if (isNaN(body.amount) || Number(body.amount) <= 0) {
      return new Response(JSON.stringify({ error: "Amount must be a positive number" }), { status: 400 });
    }

    const data = {
      fullname: body.fullname,
      email: body.email,
      phone: body.phone || undefined,
      amount: Number(body.amount),
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    };

    const options = {
      method: "POST",
      url: "https://payment.rupantorpay.com/api/payment/checkout",
      headers: {
        accept: "application/json",
        "X-API-KEY": process.env.RUPANTORPAY_API_KEY || "",
        "content-type": "application/json",
      },
      data,
    };

    const response = await axios.request(options);

    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (err) {
    console.error("Payment Error:", err.response?.data || err.message);
    return new Response(JSON.stringify({ error: "Payment initiation failed" }), { status: 500 });
  }
}