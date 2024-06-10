const knex = require("knex")(require("../knexfile"));
const express = require("express");
const router = require("express").Router();
const cors = require("cors");

router.use(cors());
router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const data = await knex.select("*").from("products");
    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const products = await knex("products").where("id", id).first();

    if (!products) {
      return res.status(404).json({ error: "Inventory was not found." });
    } else {
      return res.status(200).json(products);
    }
  } catch (error) {
    console.error("Error", error);
    return res.status(500).json({ error: "Internal server error." });
  }
});

router.post("/:id/reviews", async (req, res) => {
  const { products_id, name, content, rating } = req.body;

  if (!products_id || !name || !content) {
    return res.status(400).json({ error: "fields are required." });
  }

  try {
    const reviewIds = await knex("reviews").insert({
      products_id,
      name,
      content,
      rating,
    });
    const reviewId = reviewIds[0];
    const review = await knex("reviews").where("id", reviewId).first();

    res.status(201).json({ review });
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

module.exports = router;
