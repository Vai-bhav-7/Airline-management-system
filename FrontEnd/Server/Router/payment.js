const express = require("express");
const router = express.Router();

// FAKE PAYMENT CREATE ORDER
router.post("/createOrder", (req, res) => {
  const { amount, currency, receipt } = req.body;

  console.log("Create Order called:", req.body);

  // Fake order ID for Razorpay popup
  const fakeOrderId = "order_TEST_" + Date.now();

  res.status(200).json({
    success: true,
    id: fakeOrderId, // ✅ This is what frontend will use
    amount,
    currency,
    receipt,
    message: "Payment Successful (Test Mode)",
  });
});

// FAKE VALIDATE PAYMENT (optional)
router.post("/validateOrder", (req, res) => {
  console.log("Validate called with:", req.body);
  res.status(200).json({
    success: true,
    message: "Payment validated (Test Mode)",
  });
});

module.exports = router;
