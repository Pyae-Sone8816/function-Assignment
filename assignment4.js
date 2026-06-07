const queues = [
  { id: 1, name: "Aung Aung", type: "Normal" },
  { id: 2, name: "Su Su", type: "VIP" },
  { id: 3, name: "Kyaw Kyaw", type: "Normal" },
  { id: 4, name: "Hnin Yu", type: "VIP" },
  { id: 5, name: "Mya Mya", type: "Normal" },
];

// addUser(name)
function addUser(name) {
  const newUser = {
    id: queues.length + 1,
    name: "Si Thu",
    type: "Normal",
  };
  queues.push(newUser);
  return newUser;
}
console.log(addUser());
console.log(queues);

// addVIPUser(name) for add VIP User
console.log(
  "=================addVIPUser(name) for add VIP User======================",
);

function addVIPUser(name) {
  const newVIPUser = {
    id: 1,
    name: "John Terry",
    type: "VIP",
  };
  queues.unshift(newVIPUser);
  for (let i = 1; i < queues.length; i++) {
    queues[i].id = i + 1;
  }
  return newVIPUser;
}
console.log(addVIPUser());
console.log(queues);

// serveUser() for serve user
console.log(
  "=================serveUser() for serve user======================",
);

function serveUser() {
  return queues.shift();
}
console.log(serveUser());
console.log(queues);

// Remove Last User (Cancel case)
console.log("================Remove Last User (Cancel case)================");

function removeLastUser() {
  return queues.pop();
}
console.log(removeLastUser());
console.log(queues);

// Search User
console.log("=====================Search User==============");

function searchUser() {
  return queues.filter((queue) => queue.name.startsWith("Aung"));
}
console.log(searchUser());

// Filter VIP Users
console.log("========================Filter VIP Users=======================");

function searchVIPUser() {
  return queues.filter((queue) => queue.type.includes("VIP"));
}
console.log(searchVIPUser());

// countUsers() for count waiting users
console.log(
  "=========================countUsers() for count waiting users=============",
);

function countWaitingUsers() {
  return queues.length;
}
console.log(countWaitingUsers());
console.log(queues);
