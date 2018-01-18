
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  restaurant: { type: String, required: true },
  cuisine: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  rating: { type: Number, required: true },
  price: { type: String, required: true },
});

const Restaurants = mongoose.model("Restaurants", restaurantSchema);

module.exports = Restaurants;