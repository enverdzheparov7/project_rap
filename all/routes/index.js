var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Эминема */
router.get('/emi', function(req, res, next) {    
  res.send("<h1>Страница Эминема</h1>")
});

  /* Страница oxxy */
router.get('/oxxy', function(req, res, next) {    
  res.send("<h1>Страница Oxxymirona</h1>")
});

  /* Страница 2paca */
router.get('/2pac', function(req, res, next) {    
  res.send("<h1>Страница 2Paca</h1>")
});

module.exports = router;
