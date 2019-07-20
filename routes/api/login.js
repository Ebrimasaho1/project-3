const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/login"
router.route("/")
  .post(usersController.create);

// Matches with "/api/login/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update);

module.exports = router;