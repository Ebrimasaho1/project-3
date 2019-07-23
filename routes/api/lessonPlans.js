const router = require("express").Router();
const lessonPlansController = require("../../controllers/lessonPlansController");

// Matches with "/api/lessonPlans"
router.route("/")
  .get(lessonPlansController.findAll)
  .post(lessonPlansController.create);

// Matches with "/api/lessonPlans/:id"
router
  .route("/:id")
  .get(lessonPlansController.findById)
  .put(lessonPlansController.update)
  .delete(lessonPlansController.remove);

module.exports = router;
