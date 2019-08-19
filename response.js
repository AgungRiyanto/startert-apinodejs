'use strict';

exports.success = function(message, payload, res) {
    var data = {
        "status": 200,
        "message": message,
        'payload': payload
    };
    res.json(data);
    res.end();
};

exports.error = function(message, payload, res, code) {
    var data = {
        "status": code,
        "message": message,
        'payload': payload
    };
    res.json(data);
    res.end();
}