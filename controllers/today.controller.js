const db = require('../db');
const shortid = require('shortid');

// index
module.exports.index = (req, res) => {
    res.render('today/index', {
        todays: db.get('todays').value()
    });
};

// create
module.exports.create = (req, res) => {
    res.render('today/create');
};

// get id
module.exports.get = (req, res) => {
    var id = req.params.id;

    var today = db.get('todays').find({ id: id }).value();

    // res.render('users/view', {
    //     user: user
    // });
};

// postCreate
module.exports.postCreate = (req, res) => {
    req.body.id = shortid.generate();

    db.get('todays').push(req.body).write();
    res.redirect('/today');
};
