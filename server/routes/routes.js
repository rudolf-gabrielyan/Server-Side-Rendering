const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController');
const WelcomeController = require('../controllers/WelcomeController');




router.get('/', WelcomeController.welcome)
router.get('/signup', AuthController.signup)
router.get('/login', AuthController.login)




module.exports = router;