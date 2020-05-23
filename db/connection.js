require("dotenv").config();
const mysql = require("mysql");
const PORT = process.env.PORT || 3306;
const util = require("util");

const connection = mysql.createConnection({
    host: "localhost",
    port: PORT,
    user: "root",
    password: process.env.PASSWORD,
    database: "employeeDB"
  });

  connection.connect(function(err) {
    if (err) throw err;
    //console.log("database connected");
  });

  connection.query = util.promisify(connection.query);
  module.exports = connection