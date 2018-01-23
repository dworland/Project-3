import axios from "axios";

export default {

  getRestaurants: function() {
    return axios.get("/api/restaurants");
  },

  getRestaurantsByCuisine: function (cuisine) {
    return axios.get(`/api/restaurants/${cuisine}`)
  },

  getReservations: function() {
    return axios.get("/api/reservations");
  },

  // Gets the Reservation with the given id
  getReservationById: function(id) {
    return axios.get("/api/reservations/" + id);
  },

  // Deletes the Reservation with the given id
  deleteReservation: function(id) {
    return axios.delete("/api/reservations/" + id);
  },

  // Saves a Reservation to the database
  saveReservation: function(resData) {
    return axios.post("/api/reservations", resData);
  }
};
