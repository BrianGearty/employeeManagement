const mysql = require("mysql");
const inquirer = require("inquirer");
const addRole = require("./addRole.js");
const viewEmployee = require("./viewEmployee.js");
const viewAllRoles = require("./viewRoles.js");
const employeeByDepartment = require("./employeeByDepartment.js");
const addEmployee = require("./addEmployee.js");
const updateEmployeeRole = require("./updateEmployeeRole.js");



// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Gurd253breen!",
    database: "employeeTracker_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

// function which prompts the user for what action they should take
function start() {
    inquirer
        .prompt({
            name: "main",
            type: "list",
            message: "Would you like to do?",
            choices: ["View All Employees", "View All Employees By Department", "Add Employee", "Update Employee Role", "View All Roles", "Add Role"]
        })
        .then(function (answer) {
            // based on their answer, choose from the following
            if (answer.main === "View All Employees") {
                viewEmployee(connection, start);
            } else if (answer.main === "View All Employees By Department") {
                employeeByDepartment(connection, start);
            } else if (answer.main === "Add Employee") {
                addEmployee(connection, start);
            } else if (answer.main === "Update Employee Role") {
                updateEmployeeRole(connection, start);
            } else if (answer.main === "View All Roles") {
                viewAllRoles(connection, start);
            } else if (answer.main === "Add Role") {
                addRole(connection, start);
            } else {
                connection.end();
            }
        });
}

module.exports = start;