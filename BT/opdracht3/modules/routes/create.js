var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/photo/new-photo", function (req, res, next) {
  res.render("create");
});

module.exports = router;
