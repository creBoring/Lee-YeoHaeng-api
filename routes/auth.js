const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');


/* Login Logic */
router.post('/login', authController.postLogin);
// router.post('/register', authController.postRegister);
// router.get('/pwReset',   authController.getPwReset);

router.get('/test', authController.getTest);


module.exports = router;
