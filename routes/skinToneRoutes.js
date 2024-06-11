const fs = require("fs");
const express = require("express");
const router = require("express").Router();
const cors = require("cors");

router.use(cors());
router.use(express.json());

function readTones() {
  const skinToneData = fs.readFileSync("./data/skintones.json");
  const parsedData = JSON.parse(skinToneData);
  return parsedData;
}

router.get("/skintones", (req, res) => {
  const skintones = readTones();
  res.json(skintones);
});

module.exports = router;
