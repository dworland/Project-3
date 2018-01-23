const router = require("express").Router();
const ReservationController = require("../../controllers/ReservationController");

router.route("/")
  .get(ReservationController.findAll)
  .post(ReservationController.create);

router.route("/:id")
  .get(ReservationController.findById)
  .put(ReservationController.update)
  .delete(ReservationController.remove);

module.exports = router;