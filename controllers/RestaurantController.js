const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Restaurants
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //   findByCuisine: function(req, res) {
  //   db.Book
  //     .findByCuisine(req.params.cuisine)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};