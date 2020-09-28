const inquirer = require("inquirer");
const viewAllRoles = require("./viewRoles.js");

employeeList = [];
employeeRole = viewAllRoles(Results);

function updateEmployeeRole(connection, start) {
     connection.query("SELECT * FROM employee", function (err, res) {
            for (var i = 0; i < res.length; i++){
                    employeeList.push(res[i].role_id + res[i].first_name + " " + res[i].last_name)
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
                    message: "What is this employees new role?",
                    choices: employeeRole  
                }

            ]).then(function (answer){
                connection.query("UPDATE roles SET title = ? WHERE title = ? ", function (err, result){
                    if (err) throw err;
                    console.log(result);
                    start();
                })
                })
            
        // }
    })
}


    
// }

    
    
    
    //     // another connection.query select * employees
    
    //     // inquirere time ask which emplyoee to update ? then shwo choices aka results from selct* employess conenciton query
    
    //     // in the .then of inquiere you do your last conenct.query and u do an update statment!! with the answers they did from inquirere

    module.exports = updateEmployeeRole;