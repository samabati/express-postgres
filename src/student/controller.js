const pool = require("../../db.js");
const queries = require("./queries.js");

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getStudentById, [id], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;

  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      return res.send("Email already exists");
    }

    pool.query(
      queries.addStudent,
      [name, email, age, dob],
      (error, results) => {
        if (error) throw error;

        return res.status(200).send("Student added successfully!");
      }
    );
  });
};

const removeStudent = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getStudentById, [id], (error, results) => {
    const noStudent = !results.rows.length;

    if (noStudent) {
      return res.status(400).send("Student does not exist in database");
    }

    pool.query(queries.removeStudent, [id], (error, results) => {
      if (error) throw error;

      return res
        .status(400)
        .send("Student removed from database successfully!");
    });
  });
};

const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getStudentById, [id], (error, results) => {
    const noStudent = !results.rows.length;
    let name = req.body.name || "";

    if (noStudent)
      return res.status(400).send("Student does not exist in database");

    pool.query(queries.updateStudent, [id, name], (error, results) => {
      if (error) throw error;
      return res.status(200).send("Student name updated successfully");
    });
  });
};

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  removeStudent,
  updateStudent,
};

``;
