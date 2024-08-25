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

router.get("/myProfile", function (req, res) {
  res.render("myProfile");
});

router.get("/postdetail", function (req, res) {
  res.render("postDetail");
});

router.get("/blank", function (req, res) {
  res.render("blank");
});

router.get("/editprofile", function (req, res) {
  res.render("editprofile");
});

router.get("/reply", function (req, res) {
  res.render("reply");
});

router.get("/OthersProfile", function (req, res) {
  res.render("OthersProfile");
});

router.get("/AllPosts", function (req, res) {
  res.render("AllPosts");
});

router.get("/notification", function (req, res) {
  res.render("notification");
});

router.get("/forgotPassword", function (req, res) {
  res.render("forgotPassword");
}); 

router.get("/AllReels", function (req, res) {
  res.render("AllReels");
});

router.get("/ComfirmCode", function (req, res) {
  res.render("ComfirmCode");
});

router.get("/following", function (req, res) {
  res.render("following");
});

router.get("/follower", function (req, res) {
  res.render("follower");
});

router.get("/editprofile", function (req, res) {
  res.render("editprofile");
});

router.get("/successful", function(req, res){
  res.render("successful");
});

router.get("/newPassword", function(req, res){
  res.render("newPassword");
});

router.get("/verifyCode", function(req, res){
  res.render("verifyCode");
});

router.get("/createReel", function (req, res) {
  res.render("createreel");
});
module.exports = router;
