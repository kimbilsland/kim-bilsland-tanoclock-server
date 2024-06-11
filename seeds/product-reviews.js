const productData = require("../seed-data/products");
const reviewData = require("../seed-data/reviews");

exports.seed = function (knex) {
  return knex("reviews")
    .del()
    .then(function () {
      return knex("products").del();
    })
    .then(function () {
      return knex("products").insert(productData);
    })
    .then(() => {
      return knex("reviews").insert(reviewData);
    });
};
