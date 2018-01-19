const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  name: { type: String, required: true },
  restaurant: { type: String, required: true },
  time: { type: Date, required: true },
  seats: { type: String, required: true }
});

const Reservations = mongoose.model("Reservations", reservationSchema);

module.exports = Reservations;