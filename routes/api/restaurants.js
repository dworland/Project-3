const router = require("express").Router();
const RestaurantController = require("../../controllers/RestaurantController");

// Matches with "/api/restaurants"
router.route("/")
  .get(RestaurantController.findAll);
  // .post(RestaurantController.create);


module.exports = router;