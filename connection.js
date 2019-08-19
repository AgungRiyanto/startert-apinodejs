var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "marlinbooking",
  database: "api_nodejs"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;