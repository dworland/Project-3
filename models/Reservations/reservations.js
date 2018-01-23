const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
	date: { type: String, required: true },
  name: { type: String, required: true },
  time: { type: String, required: true },
  seats: { type: String, required: true }
});

const Reservations = mongoose.model("reservations", reservationSchema);

module.exports = Reservations;