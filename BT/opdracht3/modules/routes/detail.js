var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/photo/:id", function (req, res, next) {
  let { id } = req.params; // ID by image
  let items = [];

  for (var i = 0; i < localStorage.length; i++) {
    items.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
  let detailItem = items.find((i) => i.image === id);
  console.log(detailItem);
  res.render("detail");
});

module.exports = router;
