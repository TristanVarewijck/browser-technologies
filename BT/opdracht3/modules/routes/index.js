var express = require("express");
var router = express.Router();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./scratch");
}

// MULTER
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    let ext = file.originalname.substring(
      file.originalname.lastIndexOf("."),
      file.originalname.length
    );
    cb(null, file.fieldname + "-" + Date.now() + ext);
  },
});
let upload = multer({ storage: storage }).single("file");

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

// POST to homepage and load them on the inde
router.post("/", upload, async (req, res) => {
  const newPhoto = {
    title: req.body.title,
    location: req.body.location,
    description: req.body.description,
    image: req.file.filename,
  };

  const jsonObj = JSON.stringify(newPhoto);
  localStorage.setItem(uuidv4(), jsonObj);

  let items = [];
  for (var i = 0; i < localStorage.length; i++) {
    items.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }

  res.render("index", {
    title: "Express",
    items: items,
  });
});

module.exports = router;
