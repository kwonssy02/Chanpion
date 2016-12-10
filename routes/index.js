var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '찬피온', subtitle: '소개' });
});

router.get('/members', function(req, res, next) {
  res.render('members', { title: '찬피온', subtitle: '구성원' });
});

router.get('/constitution', function(req, res, next) {
  res.render('constitution', { title: '찬피온', subtitle: '헌법' });
});

module.exports = router;
