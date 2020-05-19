const inquirer = require("inquirer");
const consoleTable = require("console.table");
const dB = require("./db");

async function viewEmployees () {
    const employees = await dB.findEmployees();
    console.table(employees);
};

async function viewRoles () {
    const roles = await dB.findRoles();
    console.table(roles);
};

async function viewDepartments () {
    const departments = await dB.findDepartments();
    console.table(departments);
};

viewEmployees();
viewRoles();
viewDepartments();

//Ask user what they want to do
//Add employees, department, roles
//To add employees, i have to get roles
//To add roles, i need department id
//To update employees roles, i need roles
//Update employee roles
