
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  cuisine: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  rating: { type: Number, required: true },
  price: { type: String, required: true },
});

const Restaurants = mongoose.model("restaurants", restaurantSchema);

module.exports = Restaurants;