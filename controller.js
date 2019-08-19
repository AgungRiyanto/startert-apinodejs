'use strict';

var response = require('./response');
var connection = require('./connection');

exports.getPerson = function(req, res) {
    console.log(res)
    connection.query('SELECT * FROM person', function (error, rows, fields) {
        if(error){
            console.log(res)
        } else{
            response.success("Data person retrieved", rows, res);
        }
    });
};

exports.createPerson = function(req, res) {
    let data = [req.body.first_name];
    connection.query(`INSERT INTO person(first_name) values (?)`, data, function(error, rows, fields) {
        if(error){
            console.log(error)
        } else{
            response.success("Successfully create person data", rows, res);
        }
    });
}

exports.deletePerson = function(req, res) {
    connection.query(`DELETE from person WHERE id = ?`, req.body.id, function(error, rows, fields) {
        if(error){
            console.log(error)
        } else{
            response.success("Successfully delete person data", rows, res);
        }
    });
}

exports.index = function(req, res) {
    response.success("Hello from the Node JS RESTful side!", res)
};