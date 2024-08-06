const { Router } = require("express");
const {
  getStudents,
  getStudentById,
  addStudent,
  removeStudent,
  updateStudent,
} = require("./controller");

const router = Router();

router.get("/", getStudents);
router.get("/:id", getStudentById);
router.post("/", addStudent);
router.delete("/:id", removeStudent);
router.put("/:id", updateStudent);

module.exports = router;
