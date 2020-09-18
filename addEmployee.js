class AddEmployee {
    constructor(first_name, last_name, title) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.role = title;
    }
    getFirstName(){
        return this.first_name;
    }
    getLastName(){
        return this.last_name;
    }
    getTitle(){
        return this.title;
    }
    
}

module.exports = AddEmployee;



