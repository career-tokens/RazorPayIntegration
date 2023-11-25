const express = require("express");
const cors = require("cors");
const paymentRouter = require("./routes/paymentRoutes.js");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors({
    origin: process.env.ORIGIN
}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/getKey", (req, res) => {
    res.status(200).json({
        key: process.env.RAZORPAY_API_KEY
    })
});

app.use("/api", paymentRouter);

mongoose.connect(process.env.MONGODB_URI).then(console.log("Database connected"));


app.listen(3001, () => {
    console.log("Server listening on 3001");
});
