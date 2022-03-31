var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/photo/:id", function (req, res, next) {
  res.render("detail");
});

module.exports = router;
