let express = require("express");
let router = express.Router();
let methodOverride = require("method-override");
router.use(methodOverride("_method"));

/* GET 1 PICUTRE. */
router.get("/photo/:id", function (req, res, next) {
  let { id } = req.params; // ID by image
  console.log(id);

  let items = [];
  for (let i = 0; i < localStorage.length; i++) {
    items.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
  let detailItem = items.find((i) => i.image === id);
  res.render("detail", { detailItem: detailItem, title: "Detail" });
});

// DELETE THIS ITEM
router.delete("/photo/:id", async (req, res) => {
  let { id } = req.params;

  let item = [];
  for (let i = 0; i < localStorage.length; i++) {
    localStorage.removeItem(localStorage.key(i));
  }

  console.log(item);
  res.redirect("/");
});
module.exports = router;
