import { NextResponse } from "next/server";

// bKash Credentials (Store these in .env.local)
const BKASH_HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
  username: process.env.BKASH_USERNAME!,
  password: process.env.BKASH_PASSWORD!,
};

const BKASH_URL = "https://checkout.sandbox.bka.sh/v1/checkout"; // Use 'proxy' for production

async function getBkashToken() {
  const response = await fetch(`${BKASH_URL}/token/grant`, {
    method: "POST",
    headers: BKASH_HEADERS,
    body: JSON.stringify({
      app_key: process.env.BKASH_APP_KEY,
      app_secret: process.env.BKASH_APP_SECRET,
    }),
  });
  const data = await response.json();
  return data.id_token;
}

export async function POST(req: Request) {
  try {
    const { amount, orderId } = await req.json();

    // 1. Get Authentication Token
    const idToken = await getBkashToken();

    // 2. Create Payment Request
    const paymentResponse = await fetch(`${BKASH_URL}/payment/create`, {
      method: "POST",
      headers: {
        ...BKASH_HEADERS,
        Authorization: idToken,
        "X-APP-Key": process.env.BKASH_APP_KEY!,
      },
      body: JSON.stringify({
        mode: "0011", // Immediate payment
        payerReference: orderId,
        callbackURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout/bkash/callback`,
        amount: amount,
        currency: "BDT",
        intent: "sale",
        merchantInvoiceNumber: orderId,
      }),
    });

    const paymentData = await paymentResponse.json();

    // 3. Return the bKash checkout URL to the frontend
    return NextResponse.json({ bkashURL: paymentData.bkashURL });
  } catch (error) {
    return NextResponse.json({ error: "Payment initiation failed" }, { status: 500 });
  }
}