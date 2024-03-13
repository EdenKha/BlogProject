var express = require('express');
var router = express.Router();

router.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS");
  next();
});


/* GET home page. */
router.get('/api/message', function(req, res, next) {
  res.json( { title: 'Express' });
});

router.post('/api/message', function(req, res, next) {
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;
