const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController')


/* Login Logic */
router.post('/login', loginController.postLogin);
// router.post('/register', loginController.postRegister);
// router.get('/pwReset',   loginController.getPwReset);


module.exports = router;
