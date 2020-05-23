const connection = require("./connection");

class Db {
    constructor (connection) {
        this.connection = connection
    }
    findEmployees () {
        return this.connection.query ("SELECT * FROM employeedb.employee;")
    }
    findRoles () {
        return this.connection.query ("SELECT * FROM employeedb.role;")
    }
    findDepartments () {
        return this.connection.query ("SELECT * FROM employeedb.department;")
    }
    addDepartment (newDepartment) {
        return this.connection.query ("INSERT INTO employeedb.department SET ?", newDepartment)
    }
    addRole (newRole) {
        return this.connection.query ("INSERT INTO employeedb.role SET ?", newRole)
    }
    addEmployee (newEmployee) {
        return this.connection.query ("INSERT INTO employeedb.employee SET ?", newEmployee)
    }
    updateEmployeeRole (role_id, id) {
        return this.connection.query ("UPDATE employee SET role_id = ? WHERE id = ?", [role_id, id])
    }
};



module.exports = new Db(connection);


