var express = require('express');
var router = express.Router();
const username = "rahul";
const password = "123";
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('login');
});

router.post('/login', (req, res) => {
  if (username == req.body.username && password == req.body.password) {
    res.redirect('/index')
  } else {
    res.redirect('/login')
  }
})

module.exports = router;
