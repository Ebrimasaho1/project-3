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

  //matches with "/api/lessonPlans/titleSearch/:words"
router
  .route("/titleSearch/:words")
  .get(lessonPlansController.findByTitle);

router
  .route("/orgSearch/:words")
  .get(lessonPlansController.findByOrganization);

router
  .route("/projSearch/:words")
  .get(lessonPlansController.findByProject);

module.exports = router;
