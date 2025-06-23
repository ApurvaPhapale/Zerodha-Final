require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const bcrypt = require("bcrypt");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require('./model/OrdersModel');
const { UserModel } = require('./model/UserModel');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Debug URI
console.log("🔍 MongoDB URI:", uri);

// Routes
app.get('/allHoldings', async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

app.get('/allPositions', async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

app.post('/newOrder', async (req, res) => {
  try {
    const newOrder = new OrdersModel(req.body);
    await newOrder.save();
    res.send("Order Saved");
  } catch (err) {
    res.status(500).send("Error saving order");
  }
});

// Signup
app.post("/signup", async (req, res) => {
  if (!req.body || typeof req.body !== "object") {
    return res.status(400).json({ success: false, message: "Invalid request body" });
  }

  const { email, password } = req.body;

  try {
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ success: true, message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Login
app.post("/login", async (req, res) => {
  if (!req.body || typeof req.body !== "object") {
    return res.status(400).json({ success: false, message: "Invalid request body" });
  }

  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    res.json({ success: true, message: "Login successful" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Connect to DB
mongoose.connect(uri)
  .then(() => {
    console.log("✅ MongoDB connected!");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
