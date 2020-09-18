function addRole(){

    inquirer
    .prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'What is your first_name?'
        },
        {
            type: 'list',
            name: 'department_name',
            message: 'What is their department',
            choices: ['Legal' , 'Sales', 'Engineering', "Finance"]
        }, 
    
    ]).then(function(answers) {
        console.log('answers form prompt ??', answers)

        // go to DB and get department ID!! we have the name from answer but we need id!! annother ocnnection.query!!

        // SELECT * from department where anme = answer.department_name

        connection.query("SELECT * FROM department where name =" + answers.department_name, function(err, deptRes) {
            console.log('this is our id!!!', deptRes.id)
            connection.query("Insert INTO roles (title,salary,department_id) VALUES (?,?,?)" ,['quality assurance' ,50000.00, 1], function(err, results) {
                if (err) throw err;
        
                console.table(results);
            });    
        })
    })
}