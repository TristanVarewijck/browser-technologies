var express = require("express");
var router = express.Router();
let methodOverride = require("method-override");
router.use(methodOverride("_method"));

/* GET 1 PICUTRE. */
router.get("/photo/:id", function (req, res, next) {
  let { id } = req.params; // ID by image
  console.log(id);
  let items = [];

  for (var i = 0; i < localStorage.length; i++) {
    items.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
  let detailItem = items.find((i) => i.image === id);
  res.render("detail", { detailItem });
});

// DELETE THIS ITEM
router.delete("/photo/:id", async (req, res) => {
  for (let i = 0; i < localStorage.length; i++) {
    localStorage.removeItem(localStorage.key(i));
  }
  res.redirect("/");
});
module.exports = router;
