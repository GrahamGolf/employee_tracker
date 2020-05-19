require("dotenv").config();
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const PORT = process.env.PORT || 3306;

const connection = mysql.createConnection({
    host: "localhost",
    port: PORT,
    user: "root",
    password: process.env.PASSWORD,
    database: "employee_trackerDB"
  });

  connection.connect(function(err) {
    if (err) throw err;
    queryUser();
  });