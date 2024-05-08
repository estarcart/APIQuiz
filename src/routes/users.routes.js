const userController = require('../controllers/users.controller');

const express = require('express');
const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/login-auth', userController.loginAuth);
router.get('/user-profile', userController.userProfile);

module.exports = router;