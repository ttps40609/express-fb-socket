var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Socket.IO' });
});
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/logout', function(req, res, next) {
  res.render('logout');
});

module.exports = router;
