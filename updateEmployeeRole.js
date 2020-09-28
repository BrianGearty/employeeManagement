const inquirer = require("inquirer");

employeeList = [];
employeeRole = [];

function updateEmployeeRole(connection, start) {
    connection.query("SELECT * FROM employee", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            employeeList.push({name: res[i].first_name + " " + res[i].last_name, value: res[i].role_id})
            if (err) throw err;
        }
            connection.query("SELECT * FROM roles", function (err, resRoles) {
                for (var i = 0; i < res.length; i++) {
                    employeeRole.push({ name: resRoles[i].title, value: resRoles[i].id })
                    
                    if (err) throw err;
                }
            

                    inquirer
                        .prompt([
                            {
                                name: 'employee',
                                type: 'list',
                                message: "Which employee's role would you like to update?",
                                choices: employeeList
                            },
                            {
                                name: 'role',
                                type: 'list',
                                message: "What is this employees new job?",
                                choices: employeeRole
                            }

                        ]).then(function (answer) {
                            connection.query("UPDATE roles SET id = ? WHERE id = ? ", [answer.role, answer.employee], function (err, result) {
                                if (err) throw err;
                                console.log(result);
                                start();
                            })
                        })

                })
        })
}



module.exports = updateEmployeeRole;