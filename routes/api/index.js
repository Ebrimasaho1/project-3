const router = require("express").Router();
const userRoutes = require("./login");
const lessonPlansRoutes = require("./lessonPlans");
const organizationsRoutes = require("./organizations");

router.use("/login", userRoutes);
router.use("/lessonPlans", lessonPlansRoutes);
router.use("/organizations", organizationsRoutes);
router.use("/projects", projectsRoutes);

module.exports = router;