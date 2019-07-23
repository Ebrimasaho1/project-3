const router = require("express").Router();
const organizationsController = require("../../controllers/organizationsController");

// Matches with "/api/organizations"
router.route("/")
  .get(organizationsController.findAll)
  .post(organizationsController.create);

// Matches with "/api/organizations/:id"
router
  .route("/:id")
  .get(organizationsController.findById)
  .delete(organizationsController.remove);

module.exports = router;
