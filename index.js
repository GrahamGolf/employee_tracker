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

async function departmentAddNew () {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the name of the department you would like to add",
                name: "name"
            }
        ]).then(async function (answer){
            console.log(answer)
            const newDept = await dB.addDepartment(answer);
            console.log(newDept)
        })
};

async function roleAddNew () {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the name of the role you would like to add',
                title: 'role'
            },
            {
                type: 'input',
                message: 'What is the salary for this role?',   
                salary: 'salary' 
            },
            {
                type: 'input',
                message: 'Which department id is this role for?',
                department_id: 'department_id'
            },
        ]).then(async function (answer){
            console.log(answer)
            const newRole = await dB.addRole(answer);
            console.log(newRole)
        })
};

async function employeeAddNew () {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the first name of the employee you would like to add",
                first_name: "first_name"
            },
            {
                type: "input",
                message: "What is the last name of the employee you would like to add",
                last_name: "last_name"
            },
            {
                type: "input",
                message: "What is the employee's role id?",
                role_id: "role_id"
            },
            {
                type: "input",
                message: "What is the employee's manager's id?",
                manager_id: "manager_id"
            },
        ]).then(async function (answer){
            console.log(answer)
            const newEmployee = await dB.addEmployee(answer);
            console.log(newEmployee)
        })
};


// * Update employee roles


// viewEmployees();
// viewRoles();
// viewDepartments();
// departmentAddNew();
// roleAddNew();
// employeeAddNew(); 


function promptUser() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do? \n Choose 'Exit' to close the program.\n",
                choices: [
                    "----------------------------------------",
                    "View ALL Employees",
                    "View ALL Employees by Department",
                    "View ALL Employees by Manager",
                    "----------------------------------------",
                    "ADD an Employee",
                    "REMOVE an Employee",
                    "UPDATE Employee Role",
                    "Update Employee Manager",
                    "Update Employee Department",
                    "----------------------------------------",
                    "View all Roles",
                    "Add a Role",
                    "Remove a Role",
                    "----------------------------------------",
                    "View all Managers",
                    "Add Manager",
                    "Remove a Manager",
                    "----------------------------------------",
                    "View all Departments",
                    "Add a Department",
                    "Remove a Department",
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

                case "View ALL Employees":
                    viewEmployees();
                    break;

                // case "View ALL Employees by Department":
                //     //empDpt(message);
                //     break;

                // case "View ALL Employees by Manager":
                //     empMgr();
                //     break;

                case "ADD an Employee":
                    addEmployee();
                    break;

                case "REMOVE an Employee":
                    removeEmployee();
                    break;

                case "UPDATE Employee Role":
                    updEmpRole();
                    break;

                // case "Update Employee Manager":
                //     updEmpMgr();
                //     break;

                // case "Update Employee Department":
                //     updEmpDept();
                //     break;

                case "View all Roles":
                    viewRoles();
                    break;

                case "Add a Role":
                    addRole();
                    break;

                case "Remove a Role":
                    removeRole();
                    break;

                // case "View all Managers":
                //     viewManagers();
                //     break;

                case "Add Manager":
                    addManager();
                    break;

                case "Remove a Manager":
                    removeMgr();
                    break;

                case "View all Departments":
                    viewDepartments();
                    break;

                case "Add a Department":
                    addDept();
                    break;

                case "Remove a Department":
                    removeDept();
                    break;

                case "Exit":
                    connection.end();
                    break;
            }
        })    
    }
    
//promptUser()


//Ask user what they want to do
//Add employees, department, roles
//To add employees, i have to get roles
//To add roles, i need department id
//To update employees roles, i need roles
//Update employee roles