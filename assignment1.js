const todos = [
  { id: 1, title: "Learn JavaScript", completed: false, priority: "High" },
  { id: 2, title: "Build Small Project", completed: true, priority: "Medium" },
  { id: 3, title: "Practice Array Methods", completed: false, priority: "Low" },
  { id: 4, title: "Study React Basics", completed: true, priority: "High" },
  { id: 5, title: "Complete UI Design", completed: false, priority: "Medium" },
  { id: 6, title: "Fix Login Bug", completed: true, priority: "High" },
  { id: 7, title: "Read API Documentation", completed: false, priority: "Low" },
];

// addTodo adding ID

function addTodo(title) {
  const newID = {
    id: todos.length + 1,
    title: "Array method",
    completed: false,
    priority: "low",
  };
  todos.push(newID);
  return newID;
}
console.log(addTodo());
console.log(todos);

// searching words
console.log("========search Todo=========");

function searchTodo(word) {
  return todos.filter((todo) => todo.title.includes(word));
}

console.log(searchTodo("Learn"));

// completedTodos?
console.log("========completed Todo=========");

function getCompletedTodos() {
  return todos.filter((todo) => todo.completed === true);
}

console.log(getCompletedTodos());

// getpendingtodo
console.log("===============getPendingTodos===============");

function getPendingTodos() {
  return todos.filter((todo) => todo.completed !== true);
}

console.log(getPendingTodos());

// delete todo
console.log("=================Delete ID===================");

function deleteTodo(id) {
  const index = todos.findIndex((todo) => todo.id === id);
  todos.splice(index, 1);
}
deleteTodo(6);
console.log(todos);

// countCompletedtasks
console.log(
  "===========================Count length===================================================",
);

function countCompletedTodos() {
  return todos.filter((todo) => todo.completed).length;
}
console.log(countCompletedTodos());
