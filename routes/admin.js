var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.render("admin/index");
});
router.get("/login", function (req, res) {
  res.render("admin/login");
});

router.get("/register", function (req, res) {
  res.render("admin/register");
});

router.get("/blank", function (req, res) {
  res.render("admin/blank");
});

router.get("/uaccountlist", function (req, res) {
  res.render("admin/uaccountlist");
});

router.get("/accountdetail", function (req, res) {
  res.render("admin/accountdetail");
});

router.get("/banpostlist", function (req, res) {
  res.render("admin/banpostlist");
});

router.get("/banpostdetail", function (req, res) {
  res.render("admin/banpostdetail");
});

router.get("/banAccount", function (req, res) {
  res.render("admin/banAccount");
});

module.exports = router;
