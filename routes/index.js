var express = require('express');
var router = express.Router();

var title = '찬피온 사이버 빌리지'

/*

	메뉴를 추가하거나 수정할 시에 
	menubar.ejs를 반드시 수정해야함.

*/

// 홈페이지
router.get('/', function(req, res, next) {
  res.render('index', { title: title, subtitle: '', currentPage: 'index'});
});

// 구성원 페이지
router.get('/members', function(req, res, next) {
  res.render('members', { title: title, subtitle: '구성원', currentPage: 'members'});
});

// 헌법 페이지
router.get('/constitution', function(req, res, next) {
  res.render('constitution', { title: title, subtitle: '헌법', currentPage: 'constitution'});
});

// 역사 페이지
router.get('/history', function(req, res, next) {
  res.render('history', { title: title, subtitle: '역사', currentPage: 'history'});
});

module.exports = router;
