var express = require("express");
var router = express.Router();
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./scratch");
}

/* GET home page. */
router.get("/", function (req, res, next) {
  let items = [];
  for (var i = 0; i < localStorage.length; i++) {
    items.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }

  items.forEach((item) => {
    console.log(item.image);
  });

  res.render("index", {
    title: "Express",
    items: items,
  });
});

module.exports = router;
