var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.json([
    { id: "0", title: "aaa", description: "bbb" },
    { id: "1", title: "aaa", description: "bbb" },
    { id: "2", title: "aaa", description: "bbb" },
    { id: "3", title: "aaa", description: "bbb" },
    { id: "4", title: "aaa", description: "bbb" },
  ]);
});

module.exports = router;
