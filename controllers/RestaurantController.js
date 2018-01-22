const db = require("../models/Restaurants");

module.exports = {
  findAll: function(req, res) {
    db.Restaurants
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // findByCuisine: function(req, res) {
  //   var cuisineID = req.param.cuisine;
  //   db.Book
  //     .findByCuisine({cuisineID: })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};