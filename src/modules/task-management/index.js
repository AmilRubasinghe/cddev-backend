const Controller = require("./controller");

const Service = require("./service");

const Routes = require("./routes");

const Task = require("./task");

module.exports = {
  TaskService: Service,

  TaskController: Controller,

  TaskRoutes: Routes,

  Task: Task,
};
