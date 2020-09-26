const inquirer = require("inquirer");

function updateEmployeeRole(connection, start) {
     connection.query("SELECT * FROM employee", function (err, res) {
            for (var i = 0; i < res.length; i++){
                res.forEach( function() {
                    employeeList = [];
                    // console.log(res[i].first_name)
                    employeeList.res[i].first_name + " " + res[i].last_name
                    console.log(employeeList.res[i].id)
                

            if (err) throw err;

            inquirer
            .prompt({
    
                    name: 'employee',
                    type: 'list',
                    message: "Which employee's role woudld you like to update?",
                    choices: employeeList
                    
                }).then(function (answer){
                connection.query("UPDATE roles SET title = ? WHERE title = ? ", function (err, result){
                    if (err) throw err;
                    console.log(result);
                    start();
                })
                })
            })
        }
    }
)
}


    
// }

    
    
    
    //     // another connection.query select * employees
    
    //     // inquirere time ask which emplyoee to update ? then shwo choices aka results from selct* employess conenciton query
    
    //     // in the .then of inquiere you do your last conenct.query and u do an update statment!! with the answers they did from inquirere

    module.exports = updateEmployeeRole;