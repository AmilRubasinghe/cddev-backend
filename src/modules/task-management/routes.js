const express = require("express");

const Controller = require("./controller");

const router = express.Router();

const validator = require("./validator");

router.route("/").get(Controller.getTasksData);

router.route("/").post(validator.create, Controller.createTaskData);

router.route("/:id").get(Controller.getTaskData);

router.route("/:id").put(validator.update, Controller.updateTaskData);

router.route("/:id").delete(Controller.deleteTaskData);

module.exports = router;
