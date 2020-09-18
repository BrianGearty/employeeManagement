drop database if exists employeeTracker_db;

create database employeeTracker_db;

use employeeTracker_db;


create table employee (
id int not null auto_increment,
first_name varchar(30) not null,
last_name varchar(30) not null,
role_id int not null,
manager_id int not null,

primary key (id),
foreign key (role_id) references roles(id)
);

create table department (
    id int not null auto_increment,
    name varchar(30) not null,

    primary key (id)
);

create table roles (
    id int not null auto_increment,
    title varchar(30) not null,
    salary decimal not null,
    department_id int not null,

    primary key (id),
    foreign key (department_id) references department(id)

);





select roles.title, roles.id, employee.role_id from orders, employee inner join employee on roles.id = employee.role_id;

select roles.title, roles.id, employee.role_id, employee.first_name, employee.last_name from employee, roles where employee.role_id = roles.id