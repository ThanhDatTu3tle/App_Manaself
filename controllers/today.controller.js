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

// postCreate
module.exports.postCreate = (req, res) => {
    const id = shortid.generate();
    req.body.id = id;
    
    db.get('todays').push(req.body).write();
    
    res.redirect('/today');
};

// removeCreate
module.exports.removeCreate = (req, res) => {  
    const idRemove = req.params.id;
    
    db.get('todays').remove({ id:idRemove }).write();

    res.redirect('/today');
};
