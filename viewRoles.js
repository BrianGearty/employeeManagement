// View All Roles
function viewAllRoles(connection, start) {
    connection.query("SELECT * FROM roles", function (err, res) {
        if (err) throw err;

        console.table(res);
        start();
    })
};

module.exports = viewAllRoles;
