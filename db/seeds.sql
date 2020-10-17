-- Roles inserts
INSERT INTO roles ("title", "salary", "department_id") VALUES
("Account Manager", 200000, 3)
("Sales Lead", 100000, 1)
("Salesperson", 80000, 1)
("Lead Engineer", 80000, 2)
("Software Engineer", 120000, 2)
("Legal Team Lead", 250000, 4)
("Lawyer", 190000, 4)
("Accountant", 120000, 3)
("Designer", 90000, 5)
("Jr Designer", 60000, 5)
("Sr Designer", 120000, 5)
("Landscaper", 40000, 6)
("Quality Assurance", 80000, 7)

INSERT INTO department ("name") VALUES
("Sales")
("Engineering")
("Finance")
("Legal")
("Graphic Design")
("Landscape Design")
("Quality Control")

INSERT INTO employee ("first_name", "last_name", "role_id") VALUES
("Brian", "Gearty", 2)
("Ben", "Hall", 3)
("Dan", "Hertling", 5)
("Rob", "Rosano", 7)
("Brian", "Morgan", 6)
("Berge", "Parigian", 4)
("Sean", "Ogrady", 5)
("Paul", "Johnson", 3)


