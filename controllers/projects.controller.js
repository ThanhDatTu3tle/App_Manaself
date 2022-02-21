const db = require('../db');
const shortid = require('shortid');

// index
const index = (req, res) => {
    res.render('projects/index', {
        projects: db.get('projects').value()
    });
};

// create 
const create = (req, res) => {
    res.render('projects/create');
};

// postCreate 
const postCreate = (req, res) => {
    const idProject = shortid.generate();
    req.body.idProject = idProject;

    const quests = [];
    req.body.quests = quests;

    db.get('projects').push(req.body).write();

    res.redirect('/projects');
};

// details
const details = (req, res) => {
    const idDetails = req.params.idProject;

    const project = db.get('projects').find({ idProject: idDetails }).value();
    const quests = project.quests;
    res.render('projects/details/detailsProject', {
        project,
        quests
    });
};

// detailsCreate
const detailsCreate = (req, res) => {
    const id = req.params.idProject;
    res.render('projects/details/create', {
        id
    });
};

// postDetailsCreate
const postDetailsCreate =  (req, res) => {
    const idQuest = shortid.generate();
    req.body.idQuest = idQuest;
    // const {idQuest} = req.body;
    //const {idProject} = req.params
    const idDetailsCreate = req.params.idProject;
    // const project = db.get('projects').find({ idProject: idDetailsCreate }).value();

    db.get('projects').find({ idProject: idDetailsCreate }).get('quests').push(req.body).write();

    res.redirect(`/projects/${idDetailsCreate}`); 
};



module.exports = {
    index,
    create,
    postCreate,
    details,
    detailsCreate,
    postDetailsCreate
}
