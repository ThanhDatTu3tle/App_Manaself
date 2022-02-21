const express = require('express');

const router = express.Router();

const controller = require('../controllers/projects.controller');

// localhost:3000/projects
router.get('/', controller.index);

// localhost:3000/projects/create
router.get('/create', controller.create);

// localhost:3000/projects/create
router.post('/create', controller.postCreate);

// localhost:3000/projects/idProject/detailsProject
router.get('/:idProject/detailsProject', controller.details);

// localhost:3000/projects/idProject/details/create
router.get('/:idProject/details/create', controller.detailsCreate);

// localhost:3000/projects/idProject/details/create
router.post('/:idProject/details/create', controller.postDetailsCreate);

module.exports = router;
