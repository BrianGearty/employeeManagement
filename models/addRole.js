const inquirer = require("inquirer");



// Add Role
function addRole(connection, start){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'roleTitle',
                message: "What is the job title you would like to add?"
            },
            {
                type: 'input',
                name: 'salary',
                message: "What is the salary of this job title?"
            },
            {
                type: 'input',
                name: 'department',
                message: "What department would this job title fit under?"
            }
        ]).then(function (answer) {
            connection.query('insert into department (name) values (?)', answer.department, function (err, results) {
                    
                        if (err) throw err;
                    connection.query(`select * from department where name= ? `, answer.department,  function (err, res) {
                        let department_id = res[0].id;
                    connection.query("insert into roles (title, salary, department_id) values (?, ?, ?)", [answer.roleTitle, answer.salary, department_id], function (err, result){
                        if (err) throw err;
                        console.table(results)
                        start();
                    })
                })
            })
        })
    }

    module.exports = addRole;