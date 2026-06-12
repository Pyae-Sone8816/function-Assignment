let students = [
  { id: 1, name: "Aung Aung", email: "aung@gmail.com", marks: 80 },
  { id: 2, name: "Su Su", email: "susu@gmail.com", marks: 45 },
  { id: 3, name: "Kyaw Kyaw", email: "kyaw@gmail.com", marks: 90 },
  { id: 4, name: "Hnin Yu", email: "kyikyi@gmail.com", marks: 75 },
  { id: 5, name: "Mya Mya", email: "myamya@gmail.com", marks: 60 },
  { id: 6, name: "Zaw Zaw", email: "zawzaw@gmail.com", marks: 55 },
  { id: 7, name: "Thida", email: "thida@gmail.com", marks: 88 },
];

function addStudentname(email, marks) {
  const newStudent = {
    id: students.length + 1,
    name: "John",
    email: "john@gmail.com",
    marks: 90,
  };
  students.push(newStudent);
  return newStudent;
}
console.log(addStudentname());
console.log(students);

// uptategmail
console.log(
  "=========================Update Email============================",
);
function updateEmail(id) {
  const index = students.findIndex((student) => student.id === id);
  if (index !== -1) {
    let updateData = students.map((student) => {
      if (student.id === id) {
        return { ...student, email: "John14424@gmail.com" };
      } else {
        return student;
      }
    });
    return updateData;
  } else {
    return "Not Found";
  }
}
let updateData = updateEmail(5);
console.log(updateData);

// search Student
console.log(
  "================================Search Student======================================================",
);

function searchStudents() {
  return students.filter((student) => student.name.startsWith("Kyaw"));
}
console.log(searchStudents());

// passed student
console.log(
  "======================Search Pass Student==========================",
);

function getPassedStudents() {
  return students.filter((student) => student.marks >= 60);
}
console.log(getPassedStudents());

// calculate averageMarks
console.log(
  "============================Average Marks==========================",
);

function calculateAverateMarks() {
  let totalMarks = students.reduce(
    (total, student) => total + student.marks,
    0,
  );
  console.log(totalMarks);
  let average = Math.round(totalMarks / students.length);
  return average;
}
console.log(calculateAverateMarks());

// removeStudentID
console.log(
  "======================Remove Student ID============================",
);
function removeStudent(id) {
  const index = students.findIndex((student) => student.id === id);
  students.splice(index, 1);
}
removeStudent(6);
console.log(students);
