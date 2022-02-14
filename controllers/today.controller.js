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
    
    var today = db.get('todays').find({ id: id }).value();
    console.log(today);
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
    
    console.log(req.body);
    db.get('todays').push(req.body).write();
    res.redirect('/today');
};

// removeCreate
module.exports.removeCreate = (req, res) => {  
    const id = req.params.id;    

    db.get('todays').remove(id).write();
    res.redirect('/today');
};
