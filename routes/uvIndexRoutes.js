const express = require("express");
const axios = require("axios");
const router = express.Router();

const api_Key = "openuv-1a19edrlwgmu11p-io";
const UVINDEX_URL = `https://api.openuv.io/api/v1/uv`;

router.get("/", async (req, res) => {
  const lat = req.query.lat;
  const long = req.query.long;

  if (!lat || !long) {
    return res.status(400).json({ message: 'Latitude and longitude are required' });
  }

  try {
    const response = await axios.get(`${UVINDEX_URL}?lat=${lat}&lng=${long}`, {
      headers: {
        "x-access-token": api_Key,
      },
    });
    res.json(response.data);
    console.log(response.data)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;


