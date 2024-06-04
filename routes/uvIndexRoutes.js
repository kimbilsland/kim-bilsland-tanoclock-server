const express = require("express");
const axios = require("axios");
const router = express.Router();

const api_Key = "openuv-1a19edrlwgmu11p-io";
const UVINDEX_URL = `https://api.openuv.io/api/v1/uv`;

router.get("/api/uvindex", async (req, res) => {
  const lat = 37;
  const long = -122;

  try {
    const response = await axios.get(`${UVINDEX_URL}?lat=${lat}&lng=${long}`, {
      headers: {
        "x-access-token": api_Key,
      },
    });
    res.json(response.data);
    console.log(data)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

// const express = require("express");
// const axios = require("axios");
// const router = express.Router();

// const api_Key = "a642d374f3ea39e8d581f52b4cfde825";
// const UVINDEX_URL = `https://api.openweathermap.org/data/2.5/uvi`;

// router.get("/api/uvindex", async (req, res) => {
//   const lat = 37;
//   const lon = -122;

//   try {
//     const response = await axios.get(UVINDEX_URL, {
//       params: {
//         lat,
//         lon,
//         appid: api_Key
//       }
//     });
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;


