// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Function to collect employee data
const collectEmployees = function() {
    const employees = [];

    // Loop to continue prompting until the user cancels
    while (true) {
        const firstName = prompt("Enter the first name of the employee:");
        const lastName = prompt("Enter the last name of the employee:");
        const salary = prompt("Enter the salary of the employee:");
        const newEmployee = confirm("Would you like to add another employee?");

        // Validate if the user entered all required details
        if (firstName && lastName && salary) {
            // Create and push an employee object to the array
            employees.push({
                firstName: firstName,
                lastName: lastName,
                salary: parseFloat(salary) // Convert salary to float
            });
        } else {
            // If any required detail is missing, show an alert and continue the loop
            alert("Please enter all details of the employee.");
            continue;
        }

        // Break the loop if the user doesn't want to add another employee
        if (!newEmployee) {
            break;
        }
    }

    // Return the array of employee objects
    return employees;
}




// Function to display the average salary
const displayAverageSalary = function(employeesArray) {
    // Calculate and display the average salary
    if (employeesArray.length > 0) {
        const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
        const averageSalary = totalSalary / employeesArray.length;
        alert("Average Salary: " + averageSalary.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        }));
    } else {
        // If there are no employees, display a message
        alert("No employees to calculate average salary.");
    }
}

// Function to select a random employee
const getRandomEmployee = function(employeesArray) {
    // Select and display a random employee
    if (employeesArray.length > 0) {
        const randomIndex = Math.floor(Math.random() * employeesArray.length);
        const randomEmployee = employeesArray[randomIndex];
        alert("Random Employee: " + randomEmployee.firstName + " " + randomEmployee.lastName);
    } else {
        // If there are no employees, display a message
        alert("No employees to select a random employee from.");
    }
}

// Function to display employee data in an HTML table
const displayEmployees = function(employeesArray) {
    // Get the employee table
    const employeeTable = document.querySelector('#employee-table');

    // Clear the employee table
    employeeTable.innerHTML = '';

    // Loop through the employee data and create a row for each employee
    for (let i = 0; i < employeesArray.length; i++) {
        const currentEmployee = employeesArray[i];

        const newTableRow = document.createElement("tr");

        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = currentEmployee.firstName;
        newTableRow.append(firstNameCell);

        const lastNameCell = document.createElement("td");
        lastNameCell.textContent = currentEmployee.lastName;
        newTableRow.append(lastNameCell);

        const salaryCell = document.createElement("td");
        // Format the salary as currency
        salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });

        newTableRow.append(salaryCell);

        employeeTable.append(newTableRow);
    }
}

// Function to track employee data
const trackEmployeeData = function() {
    const employees = collectEmployees();

    // Display average salary and a random employee
    displayAverageSalary(employees);
    getRandomEmployee(employees);

    // Sort employees by last name and display them
    employees.sort(function(a, b) {
        if (a.lastName < b.lastName) {
            return -1;
        } else {
            return 1;
        }
    });

    displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);


// script.js

// // Function to handle the click event of the "Add Employee" button
// document.getElementById("add-employees-btn").addEventListener("click", function() {
//     // Display a prompt to enter employee details
//     var firstName = prompt("Enter the first name of the employee:");
//     var lastName = prompt("Enter the last name of the employee:");
//     var salary = prompt("Enter the salary of the employee:");

//     // Validate if the user entered all required details
//     if (firstName && lastName && salary) {
//         // Create a new row in the employee table with the entered details
//         var newRow = document.createElement("tr");
//         newRow.innerHTML = "<td>" + firstName + "</td><td>" + lastName + "</td><td>" + salary + "</td>";
        
//         // Append the new row to the employee table
//         document.getElementById("employee-table").appendChild(newRow);
//     } else {
//         // If any required detail is missing, show an alert
//         alert("Please enter all details of the employee.");
//     }
// });
