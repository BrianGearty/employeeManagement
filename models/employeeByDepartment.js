// View All Employees by Department (not able to do until we add Employees)
function employeeByDepartment(connection, start) {
    connection.query("SELECT employee.first_name, employee.last_name, department.name FROM employee INNER JOIN roles ON roles.id = employee.role_id INNER JOIN department ON department.id = roles.department_id", function (err, results) {
        if (err) throw err;

        console.table(results);
        start();
    })
    
};


module.exports = employeeByDepartment;