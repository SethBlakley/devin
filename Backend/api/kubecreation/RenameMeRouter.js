const express = require("express");
// const Middleware = require("../Middleware");
const router = express.Router();
const Controller = require("./RenameMeController");

// Routes
router.post("/", (req, res, next) => {
  Controller.KreateController(req.body)
    .then((clusterConfig) => {
      res.status(200).json(clusterConfig);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
