const employees = [
  { id: 1, name: "Aung Aung", department: "IT", salary: 1200, active: true },
  { id: 2, name: "Su Su", department: "HR", salary: 900, active: true },
  {
    id: 3,
    name: "Kyaw Kyaw",
    department: "Finance",
    salary: 1500,
    active: false,
  },
  {
    id: 4,
    name: "Mya Mya",
    department: "Marketing",
    salary: 1100,
    active: true,
  },
  { id: 5, name: "Zaw Zaw", department: "IT", salary: 1400, active: true },
  { id: 6, name: "Thida", department: "HR", salary: 950, active: false },
  { id: 7, name: "Min Min", department: "Finance", salary: 1600, active: true },
  {
    id: 8,
    name: "May Thu",
    department: "Marketing",
    salary: 1000,
    active: true,
  },
  { id: 9, name: "Ko Ko", department: "IT", salary: 1350, active: false },
  { id: 10, name: "Hnin Yu", department: "HR", salary: 980, active: true },
  { id: 11, name: "Ye Lin", department: "Finance", salary: 1700, active: true },
  {
    id: 12,
    name: "Cherry",
    department: "Marketing",
    salary: 1050,
    active: false,
  },
];

function addEmployee(name, department, salary) {
  const newEmployee = {
    id: employees.length + 1,
    name: "Alice",
    department: "HR",
    salary: 760,
    active: false,
  };
  employees.push(newEmployee);
  return newEmployee;
}
console.log(addEmployee());
console.log(employees);

// update Department
console.log(
  "=========================Update Department=============================",
);

function updateDepartment(id) {
  const index = employees.findIndex((employee) => employee.id === id);
  if (index !== -1) {
    let updateData = employees.map((employee) => {
      if (employee.id === id) {
        return { ...employee, department: "Sales and Marketing" };
      } else {
        return employee;
      }
    });
    return updateData;
  } else {
    return "Not Found";
  }
}
let updateData = updateDepartment(4);
console.log(updateData);

// searchEmployee
console.log(
  "===================searchEmployee================================",
);

function searchEmployee(search) {
  return employees.filter((employee) => employee.name.startsWith("M"));
}
console.log(searchEmployee());

// filterByDepartment
console.log(
  "==============================filterByDepartment=================",
);

function filterByDepartment(department) {
  return employees.filter((employee) =>
    employee.department.includes(department),
  );
}
console.log(filterByDepartment("HR"));

// increaseSalary(percent)
console.log("======================increaseSalary(percent)===============");
function increaseSalary(percent) {
  return employees.map((employee) => {
    return {
      ...employee,
      salary: employee.salary + (employee.salary * percent) / 100,
    };
  });
}

console.log(increaseSalary(10));

// calculateTotalSalary()
console.log(
  "============================calculateTotalSalary()========================",
);

function calculateTotalSalary() {
  let totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0,
  );
  return totalSalary;
}
console.log(calculateTotalSalary());

// highestSalaryEmployee()
console.log(
  "====================highestSalaryEmployee()============================",
);

let highestEmployee = employees[0];

employees.forEach((employee) => {
  if (highestEmployee.salary < employee.salary) highestEmployee = employee;
});
console.log(highestEmployee);

// getActiveEmployees()
console.log(
  "=========================getActiveEmployees()=========================",
);

function getActiveEmployees() {
  return employees.filter((employee) => employee.active === true);
}
console.log(getActiveEmployees());

// deleteEmployee(id)
console.log("=======================deleteEmployee(id)=======================");

function deleteEmployee(id) {
  let index = employees.findIndex((employee) => employee.id === id);
  employees.splice(index, 1);
}
deleteEmployee(3);
console.log(employees);
