const express = require('express');

const router = express.Router();

const controller = require('../controllers/today.controller');

// localhost:3000/today
router.get('/', controller.index);

// localhost:3000/today/create
router.get('/create', controller.create);

// localhost:3000/today/create
router.post('/create', controller.postCreate);

// localhost:3000/today
router.post('/', controller.removeCreate);

// localhost:3000/today/:id
router.get('/:id', controller.removeCreate);



module.exports = router;
