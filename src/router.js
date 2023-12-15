const express = require("express");

const { TaskRoutes } = require("./modules/task-management");

const router = express.Router();

router.use("/task-details", TaskRoutes);

module.exports = router;
