const db = require("../models/Reservations");

module.exports = {
  findAll: function(req, res) {
    db.Reservations
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Reservations
      .create(req.body)
      .then(dbModel => {res.json(dbModel)})
      .catch(err => {
      	res.status(422).json(err)
      });
  },
  findById: function(req, res) {
    db.Reservations
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Reservations
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Reservations
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};