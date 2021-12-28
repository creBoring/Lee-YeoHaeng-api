const express = require('express');
const router = express.Router();

const projectController = require('../controllers/projectController');

/* Login Logic */
router.post('/createProject', projectController.postCreateProject);
router.get('/listProject', projectController.getListProject);
router.get('/getProject', projectController.getGetProject);

module.exports = router;
