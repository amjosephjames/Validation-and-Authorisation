const express = require("express");
const router = express.Router();
const {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
} = require("../controller/studentController");

router.route("/student").post(createStudent).get(getStudent);

router
  .route("/student/:id")
  .get(getStudent)
  .patch(updateStudent)
  .delete(deleteStudent);

module.exports = router;
