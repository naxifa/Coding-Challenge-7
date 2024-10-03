
// Task 1 - Creating a Department Structure


const company = {
    departments: [
        {
            departmentName: 'Engineering',
            employees: [
                {
                    name: 'Alice',
                    salary: 100000,
                    subordinates: [
                            {
                                name: 'Bob',
                                salary: 80000,
                                subordinates: [
                                    {
                                    name: 'Charlie',
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'David',
                    salary: 90000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Sales',
            employees: [
                {
                    name: 'Eve',
                    salary: 85000,
                    subordinates: [
                        {
                            name: 'Frank',
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Grace',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
};

   

// Task 2 - Creating a Recursive Function to Calculate Total Salary for a Department

function calculateDepartmentSalary (department) {
     let totalSalary = 0;

     // Loop through the department's employees and suming up their salaries
     department.employees.forEach(employee => { 
        totalSalary += employee.salary;

        //Calling recursive function to add any subordinate salary as well
        if (employee.subordinates.length > 0) {
            employee.subordinates.forEach(subordinate => {
                totalSalary += calculateDepartmentSalary({ employees:[subordinate] });
            });
        }
    });

    return totalSalary;
}


