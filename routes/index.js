var express = require('express');
var router = express.Router();

var title = '찬피온 사이버 빌리지'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: title, subtitle: '소개' });
});

router.get('/members', function(req, res, next) {
  res.render('members', { title: title, subtitle: '구성원' });
});

router.get('/constitution', function(req, res, next) {
  res.render('constitution', { title: title, subtitle: '헌법' });
});

router.get('/history', function(req, res, next) {
  res.render('history', { title: title, subtitle: '역사' });
});

module.exports = router;
