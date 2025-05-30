require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const { connect } = require("http2");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();


// Middleware to handle CORS
app.use(cors({origin: process.env.CLIENT_URL || "*", methods: ["GET", "POST", "PUT", "DELETE"], allowedHeaders: ["Content-Type","Authorization"],}));

app.use(express.json());

const PORT = process.env.PORT || 5000;

connectDB();

app.use("/api/v1/auth", authRoutes)


app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));