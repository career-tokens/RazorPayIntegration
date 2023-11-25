const express = require("express")
const router = express.Router();
const {payment,paymentVerification}=require("../controllers/paymentControllers")

router.route("/payment").post(payment);
router.route("/paymentverification").post(paymentVerification);

module.exports = router;