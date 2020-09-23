const mysql = require("mysql");
const inquirer = require("inquirer");
const addRole = require("./addRole.js");


// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
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
            choices: ["View All Employees", "View All Employees By Department", "Add Employee", "Update Emplyee Role", "View All Roles", "Add Role"]
        })
        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            if (answer.main === "View All Employees") {
                viewEmployee();
            } else if (answer.main === "View All Employees By Department") {
                employeeByDepartment();
            } else if (answer.main === "Add Employee") {
                addEmployee();
            } else if (answer.main === "Update Empolyee Role") {
                updateEmployeeRole();
            } else if (answer.main === "View All Roles") {
                viewAllRoles();
            } else if (answer.main === "Add Role") {
                addRole();
            } else {
                connection.end();
            }
        });
}

module.exports.connection = connection;
module.exports.start = start;
// // View All Employees
// function viewEmployee() {
//     connection.query("SELECT * FROM employee", function (err, results) {
//         if (err) throw err;

//         console.table(results);
//         start();
//     })
// }
// // View All Roles
// function viewAllRoles() {
//     connection.query("SELECT * FROM roles", function (err, results) {
//         if (err) throw err;

//         console.table(results);
//         start();
//     })
// }
// // View All Employees by Department (not able to do until we add Employees)
// function employeeByDepartment() {
//     connection.query("SELECT employee.first_name, employee.last_name, department.name as Department FROM employee INNER JOIN roles ON roles.id = employee.role_id INNER JOIN department ON department.id = roles.department_id", function (err, results) {
//         if (err) throw err;

//         console.table(results);
//         start();
//     })
// }
// function updateEmployeeRole() {


//     // another connection.query select * employees

//     // inquirere time ask which emplyoee to update ? then shwo choices aka results from selct* employess conenciton query

//     // in the .then of inquiere you do your last conenct.query and u do an update statment!! with the answers they did from inquirere
// }

// // Add Employee
// function addEmployee() {
//     inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 name: 'first_name',
//                 message: "What is employee's first name?"
//             },
//             {
//                 type: 'input',
//                 name: 'last_name',
//                 message: "What is employee's last name?"
//             },
//             {
//                 type: 'list',
//                 name: 'role_id',
//                 message: "What is employee's job title?",
//                 choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer']
//             },

//         ]).then(function (answer) {
//             connection.query("Select title, id from roles", function (err, results) {
//                 if (err) throw err;
//                 console.log(results);
//                 for (var i = 0; i < results.length; i++) {
//                     console.log('we are comparing ', results[i].title, 'to ', answer.role_id)
//                     if (results[i].title === answer.role_id) {
//                         let roleId = results[i].id;

//                         connection.query(
//                             `Insert into employee (first_name, last_name, role_id) values (?,?,?)`,
//                             [answer.first_name, answer.last_name, roleId],
//                             function (err, results) {
//                                 if (err) throw err
//                                 console.log(results.affectedRows + "employee inserted!\n");
//                             })
//                     }
//                 }
//                 start();
//             });
//         })

// };




