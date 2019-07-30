const router = require("express").Router();
const lessonPlansController = require("../../controllers/lessonPlansController");

// Matches with "/api/search:words"
router.route("/:words")
  .get(lessonPlansController.findByTitle);

// router.route("/:words")
// .get(organizationsController.findAll);

// router.route("/:words")
// .get()
  module.exports = router;