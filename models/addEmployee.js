const inquirer = require("inquirer");

// Add Employee
function addEmployee(connection, start) {
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
                name: 'role_id',
                message: "What is employee's job title?",
                choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer']
            },

        ]).then(function (answer) {
            connection.query("Select title, id from roles", function (err, results) {
                if (err) throw err;
                console.log(results);
                for (var i = 0; i < results.length; i++) {
                    console.log('we are comparing ', results[i].title, 'to ', answer.role_id)
                    if (results[i].title === answer.role_id) {
                        let roleId = results[i].id;

                        connection.query(
                            `Insert into employee (first_name, last_name, role_id) values (?,?,?)`,
                            [answer.first_name, answer.last_name, roleId],
                            function (err, results) {
                                if (err) throw err
                                console.log(results.affectedRows + "employee inserted!\n");
                                start();
                            })
                    }
                }
            });
        })
};

module.exports = addEmployee;



