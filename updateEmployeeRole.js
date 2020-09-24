const inquirer = require("inquirer");

console.log("suck me off")

function updateEmployeeRole(connection, start) {
     connection.query("SELECT * FROM employee", function (err, res) {
            
            console.table(res);
            if (err) throw err;
        })
        inquirer
        .prompt({

                name: 'employee',
                type: 'list',
                message: "Which employee's role woudld you like to update?",
                choices: ["blowme", "suckme"]
                
            }).then(function (answer){
            connection.query("Update roles where id= () set title = (?) ", function (err, result){
                if (err) throw err;
                console.log(result);
                start();
            })
        })
}

    
// }

    
    
    
    //     // another connection.query select * employees
    
    //     // inquirere time ask which emplyoee to update ? then shwo choices aka results from selct* employess conenciton query
    
    //     // in the .then of inquiere you do your last conenct.query and u do an update statment!! with the answers they did from inquirere

    module.exports = updateEmployeeRole;