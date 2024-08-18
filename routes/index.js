var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/login", function (req, res) {
  res.render("login");
});

router.get("/register", function (req, res) {
  res.render("register");
});

router.get("/createPost", function (req, res) {
  res.render("createpost");
});

router.get("/profile", function (req, res) {
  res.render("profile");
});

router.get("/postdetail", function (req, res) {
  res.render("postDetail");
});

router.get("/blank", function (req, res) {
  res.render("blank");
});

router.get("/accountSetting", function (req, res) {
  res.render("accountSetting");
});

router.get("/reply", function (req, res) {
  res.render("reply");
});

module.exports = router;
