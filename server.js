const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser')
const uvIndexRoutes = require("./routes/uvIndexRoutes");
const spotifyRoutes = require("./routes/spotifyRoutes");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN;

// Middleware
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());

// Basic Routes
app.get("/", (req, res) => {
  res.send("TanO'Clock server has been set up.");
});

app.use("/api/uvindex", uvIndexRoutes);
app.use("/api/spotify", spotifyRoutes);

// Start server
app.listen(port, () => {
  console.log(
    `Server is running on ${
      process.env.BACKEND_URL || `http://localhost:${port}`
    }`
  );
});
