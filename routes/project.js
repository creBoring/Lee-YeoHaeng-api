const express = require('express');
const router = express.Router();

const projectController = require('../controllers/projectController');

/* Login Logic */
router.post('/createProject', projectController.postCreateProject);


module.exports = router;
