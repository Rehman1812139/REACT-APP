var express = require('express');
var router = express.Router();


const login_controller=require('../controllers/Login.controller');


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


// router.get('/login', login_controller.fetchloginform);  //fetches the login form, meaning login.ejs


router.post('/authenticate', login_controller.loginchk );  //when user and password authentication is submitted


router.get('/logout', login_controller.logout); //here this route will destroy all sessions.

// router.get('/dashboard', login_controller.redirectLogin,user_controller.dashboard);


module.exports = router;
