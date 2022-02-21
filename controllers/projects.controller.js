const db = require('../db');
const shortid = require('shortid');

// index
module.exports.index = (req, res) => {
    res.render('projects/index', {
        projects: db.get('projects').value()
    });
};

// create 
module.exports.create = (req, res) => {
    res.render('projects/create');
};

// postCreate 
module.exports.postCreate = (req, res) => {
    const idProject = shortid.generate();
    req.body.idProject = idProject;

    const quests = [];
    req.body.quests = quests;

    db.get('projects').push(req.body).write();

    res.redirect('/projects');
};

// details
module.exports.details = (req, res) => {
    const idDetails = req.params.idProject;

    const project = db.get('projects').find({ idProject: idDetails }).value();

    res.render('projects/details/detailsProject', {
        project: project
    });
};

// detailsCreate
module.exports.detailsCreate = (req, res) => {
    res.render('projects/details/create');
};

// postDetailsCreate
module.exports.postDetailsCreate = (req, res) => {
    const idQuest = shortid.generate();
    req.body.idQuest = idQuest;

    const idDetailsCreate = req.params.idProject;

    // const project = db.get('projects').find({ idProject: idDetailsCreate }).value();

    db.get('projects').find({ idProject: idDetailsCreate }).get('quests').push(req.body).write();

    res.redirect('/projects');
};