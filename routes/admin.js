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

module.exports = router;