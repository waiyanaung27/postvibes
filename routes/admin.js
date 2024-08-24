var express = require("express");
var router = express.Router();

router.get("/alog", function (req, res) {
    res.render("admin/alog");
});

router.get("/create", function (req, res) {
    res.render("admin/create");
});

router.get("/blank", function (req,res){
    res.render("admin/blank");
});

router.get("/uaccountlist", function (req,res){
    res.render("admin/uaccountlist");
});

router.get("/accountdetail", function (req,res){
    res.render("admin/accountdetail");
});

router.get("/banpostlist", function(req,res){
    res.render("admin/banpostlist");
});

router.get("/banpostdetail", function(req,res){
    res.render("admin/banpostdetail");
});

router.get("/accountDetails", function(req, res){
    res.render("admin/accountDetails");
  });

router.get("/banAccount", function(req, res){
    res.render("admin/banAccount");
  });

module.exports = router;