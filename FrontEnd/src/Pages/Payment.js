import React from "react";

function Product() {
  const amount = 500; // ₹500
  const currency = "INR";
  const receiptId = "qwsaq1";

  const paymentHandler = async (e) => {
    e.preventDefault();

    console.log("Clicked paymentHandler");

    // Step 1: Create order from backend
    const response = await fetch("http://localhost:4000/api/v1/payment/createOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, currency, receipt: receiptId }),
    });

    const order = await response.json();
    console.log("Backend order response:", order);

    if (!order?.id) {
      console.error("Order ID missing from backend!");
      return;
    }

    // Step 2: Configure Razorpay
    const options = {
      key: "rzp_test_w6A24kdDEo8QYt", // Razorpay test key
      amount: amount, // in paise (500 = ₹500)
      currency,
      name: "Demo Store",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, // ✅ use backend id
      handler: async function (response) {
        console.log("Payment success response:", response);

        // Step 3: Validate payment (optional)
        const validateRes = await fetch("http://localhost:4000/api/v1/validateOrder", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response),
        });

        const jsonRes = await validateRes.json();
        console.log("Validation response:", jsonRes);
        alert("Payment successful! Check console for details.");
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9000000000",
      },
      notes: { address: "Razorpay Corporate Office" },
      theme: { color: "#3399cc" },
    };

    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", function (response) {
      console.error("Payment failed:", response);
      alert("Payment failed! Check console for details.");
    });

    rzp.open();
  };

  return (
    <div className="product bg-slate-200 pt-32 text-center">
      <h2 className="text-xl font-bold mb-2">T-Shirt</h2>
      <p className="mb-4">Solid blue cotton T-Shirt</p>
      <button
        onClick={paymentHandler}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Pay ₹{amount}
      </button>
    </div>
  );
}

export default Product;
