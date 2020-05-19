DROP DATABASE IF EXISTS employeeDB;
CREATE database employeesDB;

USE employeeDB;

CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(30), --to hold department name
);

CREATE TABLE role (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  title VARCHAR(30), --to hold role title
  salary DECIMAL, --to hold role salary
  department_id INT --to hold reference to department role belongs to
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  first_name VARCHAR(30), --to hold employee first name
  last_name VARCHAR(30), --to hold employee last name
  role_id INT, --to hold reference to role employee has
  manager_id INT --to hold reference to another employee that manages the current employee. This field may be null if the employee has no manager
);

