let express = require("express");
let router = express.Router();
let methodOverride = require("method-override");
router.use(methodOverride("_method"));

/* GET 1 PICUTRE. */
router.get("/photo/:id", function (req, res, next) {
  let { id } = req.params;
  console.log(id);

  let items = [];
  for (let i = 0; i < localStorage.length; i++) {
    items.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
  let detailItem = items.find((i) => i.id === id);
  res.render("detail", { detailItem: detailItem, title: "Detail" });
});

// DELETE THIS ITEM
router.delete("/photo/:id", (req, res) => {
  let { id } = req.params;
  localStorage.removeItem(id);

  res.redirect("/");
});
module.exports = router;
