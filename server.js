const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');


const cookieParser = require("cookie-parser");
const uvIndexRoutes = require("./routes/uvIndexRoutes");
const spotifyRoutes = require("./routes/spotifyRoutes");
const skinToneRoutes = require("./routes/skinToneRoutes");
const productRoutes = require("./routes/productRoutes");
const fs = require("fs");

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "https://tanoclock.netlify.app";
// const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173";

// Middleware
app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(cookieParser());
app.use(express.static("public/images"));

// Basic Routes
app.get("/", (req, res) => {
  res.send("TanO'Clock server has been set up.");
});

app.get("/skintones", (req, res) => {
  const file = fs.readFileSync("./data/skintones.json");
  const skintones = JSON.parse(file);

  res.json(skintones);
});

app.use("/skintones", skinToneRoutes);
app.use("/api/uvindex", uvIndexRoutes);
app.use("/api/spotify", spotifyRoutes);
app.use("/api/products", productRoutes);
app.use("/api/products/:id", productRoutes);

// Start server
app.listen(port, () => {
  console.log(
    `Server is running on ${
      process.env.BACKEND_URL || `http://localhost:${port}`
    }`
  );
});
