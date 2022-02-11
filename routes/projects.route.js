const express = require('express');

const router = express.Router();

const controller = require('../controllers/projects.controller');

// localhost:3000/projects
router.get('/', controller.index);

module.exports = router;