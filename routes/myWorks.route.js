const express = require('express');

const router = express.Router();

const controller = require('../controllers/myWorks.controller');

// localhost:3000/myWorks
router.get('/', controller.index);

module.exports = router;