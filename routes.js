'use strict';

module.exports = function(app) {
    var controller = require('./controller');

    app.route('/')
        .get(controller.index);

    // person
    app.route('/person')
        .get(controller.getPerson);

    app.route('/person/create')
        .post(controller.createPerson);
        
    app.route('/person/delete')
        .post(controller.deletePerson);
    
};