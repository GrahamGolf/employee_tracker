const inquirer = require("inquirer");
const cTable = require("console.table");
const dB = require("./db");

async function viewEmployees () {
    const employees = await dB.findEmployees();
    console.table(employees);
    promptUser()
};

async function viewRoles () {
    const roles = await dB.findRoles();
    console.table(roles);
    promptUser()
};

async function viewDepartments () {
    const departments = await dB.findDepartments();
    console.table(departments);
    promptUser()
};

async function departmentAddNew () {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the name of the department you would like to add",
                name: "name"
            }
        ])
        .then(async function (answer){
            console.log(answer)
            const newDept = await dB.addDepartment(answer);
            console.log(newDept);
            viewDepartments();
        })
};

async function roleAddNew () {
    console.log("role function start")
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the name of the role you would like to add',
                name: 'title'
            },
            {
                type: 'input',
                message: 'What is the salary for this role?',   
                name: 'salary' 
            },
            {
                type: 'input',
                message: 'Which department id is this role for?',
                name: 'department_id'
            },
        ])
        .then(async function (answer){
            console.log(answer)
            const newRole = await dB.addRole(answer);
            console.log(newRole);
            viewRoles();
        })
};

async function employeeAddNew () {
    inquirer
        .prompt([
            {
            type: "input",
            message: "What is the first name of the employee you would like to add",
            name: "first_name"
            },
            {
            type: "input",
            message: "What is the last name of the employee you would like to add",
            name: "last_name"
            },
            {
            type: "input",
            message: "What is the employee's role id?",
            name: "role_id"
            },
            {
            type: "input",
            message: "What is the employee's manager's id?",
            name: "manager_id"
            },
        ])
        .then(async function (answer){
            console.log(answer)
            const newEmployee = await dB.addEmployee(answer);
            console.log(newEmployee);
            viewEmployees();
        })
};

async function updateEmplRole () {
    const employees = await dB.findEmployees();
    const employeeListing = [];
    for (let index = 0; index < employees.length; index++) {
        let employee = {};
        employee.value = employees[index].id;
        employee.name = employees[index].last_name + ", " + employees[index].first_name;
        employeeListing.push(employee)
    }

    const roles = await dB.findRoles();
    const rolesListing = [];
    for (let index = 0; index < roles.length; index++) {
        let roleObject = {};
        roleObject.value = roles[index].id;
        roleObject.name = roles[index].title;
        rolesListing.push(roleObject)
    }

    console.log(rolesListing)

    inquirer
        .prompt([
            {
                type: "list",
                message: "Which employee would you like to update?",
                choices: employeeListing,
                name: "id"
            },
            {
                type: "list",
                message: "What is the new role id?",
                choices: rolesListing,
                name: "role_id"
            }
        ]).then(async function (answer){
            console.log(answer)
            const updRole = await dB.updateEmployeeRole(answer.role_id, answer.id);
            console.log(updRole);
            viewEmployees();
        })
};


function promptUser() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do? \n Choose 'Exit' to close the program.\n",
                choices: [
                    "----------------------------------------",
                    "VIEW Employees",
                    "VIEW Roles",
                    "VIEW Departments",
                    "----------------------------------------",
                    "ADD New Employee",
                    "ADD New Role",
                    "ADD New Department",
                    "UPDATE Employee Role",
                    "----------------------------------------",
                    "Exit"
                ],
                name: "start",
            },
        ])
        .then(function (answer) {
            console.log("\n", answer);
            message = answer.start;
            switch (answer.start) {
                case "----------------------------------------":
                    console.clear();
                    break;

                case "VIEW Employees":
                    viewEmployees();
                    break;

                case "VIEW Roles":
                    viewRoles();
                    break;

                case "VIEW Departments":
                    viewDepartments();
                    break;

                case "ADD New Employee":
                    employeeAddNew();
                    break;
                
                case "ADD New Role":
                    roleAddNew();
                    break;

                case "ADD New Department":
                    departmentAddNew();
                    break;
                
                case "UPDATE Employee Role":
                    updateEmplRole();
                    break;

                case "Exit":
                    connection.end();
                    break;
            }
        })    
    }
promptUser()