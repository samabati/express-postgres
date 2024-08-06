const getStudents = "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE ID = $1";
const checkEmailExists = "SELECT * FROM students WHERE email = $1";
const addStudent =
  "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const removeStudent = "DELETE FROM students WHERE id=$1";
const updateStudent = "UPDATE students SET name = $2 WHERE id = $1";

module.exports = {
  getStudents,
  getStudentById,
  checkEmailExists,
  addStudent,
  removeStudent,
  updateStudent,
};
