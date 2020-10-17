// View All Employees
function viewEmployee(connection, start) {
    connection.query("SELECT * FROM employee", function (err, empResult) {
        if (err) throw err;

        console.table(empResult);
        start();
    })
};


module.exports = viewEmployee;
