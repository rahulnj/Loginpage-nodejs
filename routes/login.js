var express = require('express');
var router = express.Router();
const username = "Rahul";
const password = "123";
/* GET users listing. */
router.get('/', function (req, res, next) {
  if (req.session.loggedIn) {
    res.redirect('index')
  } else
    res.render('login');
});

router.post('/login', (req, res) => {
  if (username == req.body.username && password == req.body.password) {
    req.session.loggedIn = true;
    req.session.name = username;
    req.session.password = password;
    res.redirect('/index')

  } else {
    res.render('login', { error: "Invalid username or password" })
  }
})
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/')
})


module.exports = router;
