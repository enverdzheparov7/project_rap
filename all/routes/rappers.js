var express = require('express');
var router = express.Router();
var Rapper = require('../models/rap').Rapper;
var checkAuth = require("../middlewares/checkAuth.js");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с rappers');
});
/*Страница рэперов*/
router.get("/:nick", checkAuth, async function(req, res, next) {
    var rappers = await Rapper.find({nick: req.params.nick});
    console.log(rappers)
    if(!rappers.length) {
      return next(new Error("Нет такого рэпера"))}
    var rapper = rappers[0];
    res.render('rapper', {
    title: rapper.title,
    picture: rapper.avatar,
    desc: rapper.desc
    })
    });
    


module.exports = router;