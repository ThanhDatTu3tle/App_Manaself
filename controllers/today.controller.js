const db = require('../db');
const shortid = require('shortid');

// index
module.exports.index = (req, res) => {
    res.render('today/index', {
        todays: db.get('todays').value()
    });
};

// get id
module.exports.get = (req, res) => {
    var id = req.params.id;

    var todays = db.get('todays').find({ id: id }).value();

    res.render('today/view', {
        today: today
    });
};

// create
module.exports.create = (req, res) => {
    res.render('today/create');
};

// postCreate
module.exports.postCreate = (req, res) => {
    req.body.id = shortid.generate();
    
    db.get('todays').push(req.body).write();
    res.redirect('/today');
};

// removeCreate
module.exports.removeCreate = (req, res) => {
    

    db.get('todays').remove({ id: '7VLAUKmf4' }).write();
    res.redirect('/today');
};
