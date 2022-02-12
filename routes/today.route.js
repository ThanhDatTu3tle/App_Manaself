const express = require('express');

const router = express.Router();

const controller = require('../controllers/today.controller');

// localhost:3000/today
router.get('/', controller.index);

// localhost:3000/today/create
router.get('/create', controller.create);

module.exports = router;
