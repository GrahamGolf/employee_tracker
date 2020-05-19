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
};



module.exports = new Db(connection);


