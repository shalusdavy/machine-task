const express = require("express");
const router = express.Router();
const { createTask,getTasks,deleteTask } = require("./taskListController");


router.route("/").post(createTask).get(getTasks);
router.route("/:id").delete(deleteTask);

module.exports = router;

