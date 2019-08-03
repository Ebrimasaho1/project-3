const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

// Matches with "/api/projects"
router.route("/")
  .get(projectsController.findAll)
  .post(projectsController.create);

// Matches with "/api/projects/:id"
router
  .route("/:id")
  .get(projectsController.findById)
  .delete(projectsController.remove);

  // Matches with "/api/projects/search/:words"
router
  .route("/search/:words")
  .get(projectsController.findByName);

module.exports = router;
