const path = require("path");
const router = require("express").Router();

const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
<<<<<<< HEAD
  //res.sendFile(path.join(__dirname, "../client/build/index.html"));
  res.sendStatus(404);
=======
  res.sendStatus(404);
  // res.sendFile(path.join(__dirname, "../client/build/index.html"));
>>>>>>> mark
});

module.exports = router;
