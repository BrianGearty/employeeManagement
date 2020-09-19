const mysql = require("mysql");
const inquirer = require("inquirer");


// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
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
            choices: ["View All Employees", "View All Employees By Department", "View All Employees BY Manager", "Add Employee", "Update Emplyee Role", "Update Employee Manager", "View All Roles", "Add Role", "Remove Role"]
        })
        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            if (answer.main === "View All Employees") {
                viewEmployee();
            } else if (answer.main === "View All Employees By Department") {
                employeeByDepartment();
            } else if (answer.main === "View All Employees BY Manager") {
                employeeByManager();
            } else if (answer.main === "Add Employee") {
                addEmployee();
            } else if (answer.main === "Update Emplyee Role") {
                updateEmployeeRole();
            } else if (answer.main === "Update Employee Manager") {
                updateEmployeeManager();
            } else if (answer.main === "View All Roles") {
                viewAllRoles();
            } else if (answer.main === "Add Role") {
                addRole();
            } else if (answer.main === "Remove Role") {
                removeRole();
            } else {
                connection.end();
            }
        });
}
// View Employee
function viewEmployee() {
    connection.query("SELECT * FROM employee", function (err, results) {
        if (err) throw err;

        console.table(results);
    })
}
// View All Roles
function viewAllRoles() {
    connection.query("SELECT * FROM roles", function (err, results) {
        if (err) throw err;

        console.table(results);
    })
}
// View All Employees by Department (not able to do until we add Employees)
function employeeByDepartment() {
    connection.query("SELECT * FROM department", function (err, results) {
        if (err) throw err;

        console.table(results);
    })
}

// Add Employee
function addEmployee() {
let roleQuery = connection.query("Select title, id from roles", function (err, results) {
        if (err) throw err;
        console.log(results);
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'first_name',
                message: "What is employee's first name?"
            },
            {
                type: 'input',
                name: 'last_name',
                message: "What is employee's last name?"
            },
            {
                type: 'list',
                name: 'title',
                message: "What is employee's job title?",
                choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer']
            },

        ]).then(function(answer) {
            for (var i = 0; i < results.length; i++){
                if(results[i].title === answer.title){
                let roleId = results[i].id;
                
                connection.query(
                "Insert into employees (first_name, last_name, role_id) Values (`${}`) ?", function (err, results) {
                    if (err) throw err,
                    console.log([answer.first_name, answer.last_name, roleId])
                    [{
                            first_name: answer.first_name,
                            last_name: answer.last_name,
                            title: roleId
                    }],
                        function (err) {
                            if (err) throw err;

                        };
                        
                        start();
                    })
                }
            }    
        });
}
    )};




