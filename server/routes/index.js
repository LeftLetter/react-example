var express = require("express");
var router = express.Router();

const cards = [
  { id: "0", title: "一番目", description: "一番目の説明" },
  { id: "1", title: "二番目", description: "二番目の説明" },
  { id: "2", title: "三番目", description: "三番目の説明" },
  { id: "3", title: "四番目", description: "四番目の説明" },
  { id: "4", title: "五番目", description: "五番目の説明" },
];

router.get("/", function (req, res, next) {
  res.json(cards);
});

router.delete("/", function (req, res, next) {
  const newCards = cards.filter((e) => {
    e.id !== res.id;
  });
  res.json(newCards);
});

module.exports = router;
