
// Task 1 - Creating a Department Structure


const company = {
    departments: [
        {
            departmentName: 'Operations',
            employees: [
                {
                    name: 'Tash',
                    salary: 100000,
                    subordinates: [
                            {
                                name: 'Anna',
                                salary: 80000,
                                subordinates: [
                                    {
                                    name: 'Najani',
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Branto',
                    salary: 90000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Audit',
            employees: [
                {
                    name: 'Emma',
                    salary: 85000,
                    subordinates: [
                        {
                            name: 'Lottie',
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Daphne',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
};

console.log(company);
   



// Task 2 - Creating a Recursive Function to Calculate Total Salary for a Department


function calculateDepartmentSalary (department) {
    let totalSalary = 0;

  // Loop through the department's employees and suming up their salaries
  department.employees.forEach (employee => { 
  totalSalary += employee.salary;

  //Calling recursive function to add any subordinate salary as well
  if (employee.subordinates.length > 0) {
    totalSalary += calculateDepartmentSalary({employees: employee.subordinates});
}

} );
return totalSalary
};


let auditDepartment = company.departments.find(department => department.departmentName === "Audit");
let operationsDepartment = company.departments.find(department => department.departmentName === "Operations");

console.log(`Total salary for the Operations department: $${calculateDepartmentSalary (operationsDepartment)}`);
console.log(`Total salary for the Audit department: $${calculateDepartmentSalary (auditDepartment)}`);



// Task 3 - Creating a Function to Calculate the Total Salary for All Departments

function calculateCompanySalary(company) {
  let totalCompanySalary = 0;

    company.departments.forEach(department => {

        totalCompanySalary += calculateDepartmentSalary(department);
    });

    console.log(`Total company salary: $${totalCompanySalary}`);
    return totalCompanySalary;
}
console.log(calculateCompanySalary(company));

