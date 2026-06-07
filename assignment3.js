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
  return employees.filter((employee) => employee.department.includes("HR"));
}
console.log(filterByDepartment());

// increaseSalary(percent)
console.log("======================increaseSalary(percent)===============");
function increaseSalary(percent) {
  for (let i = 0; i < employees.length; i++) {
    employees[i].salary =
      employees[i].salary + (employees[i].salary * percent) / 100;
  }
}
increaseSalary(10);
console.log(employees);

// calculateTotalSalary()
console.log(
  "============================calculateTotalSalary()========================",
);

let totalSalary = 0;
function calculateTotalSalary() {
  for (let i = 0; i < employees.length; i++) {
    totalSalary += employees[i].salary;
  }
  return totalSalary;
}
console.log(calculateTotalSalary());

// highestSalaryEmployee()
console.log(
  "====================highestSalaryEmployee()============================",
);

let highest = employees[0];
function highestSalaryEmployee() {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > highest.salary) {
      highest = employees[i];
    }
  }
  return highest;
}
console.log(highestSalaryEmployee());

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
