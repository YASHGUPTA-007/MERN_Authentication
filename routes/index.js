var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/home",function(){
  res.send("home");
})

router.get("/login",function(){
  res.send("login");
})
module.exports = router;
