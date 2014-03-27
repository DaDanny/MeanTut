'use strict';
var mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = function(app) {
    
    // Home route
    var index = require('../controllers/index');
    app.get('/', index.render);
};
