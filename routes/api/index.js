const router = require("express").Router();
const restaurantRoutes = require("./restaurants");
const reservationRoutes = require("./reservations");

router.use("/restaurants", restaurantRoutes);
router.use("/reservations", reservationRoutes);

module.exports = router;