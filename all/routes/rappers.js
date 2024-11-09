var express = require('express');
var router = express.Router();
var Rap = require('../models/rap').Rap;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с rappers');
});
router.get("/:nick", async function(req, res, next) {
  var rap = await Rap.find({nick: req.params.nick});
  console.log(rap)
  if(!rap.length) return next(new Error("Нет такого рэпера"))
  var raps = rap[0];
  res.render('raps', {
  title: raps.title,
  picture: raps.avatar,
  desc: raps.desc
  })
  });
  
  
module.exports = router;
