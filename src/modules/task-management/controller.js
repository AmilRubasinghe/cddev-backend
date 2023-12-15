const Service = require("./service");

const { SUCCESS, ERROR } = require("../../helper");

const { SUC_CODES, CREATE_SUC_CODES, UPDATE_SUC_CODES, DELETE_SUC_CODES } =
  require("./constants").Codes;

const getTasksData = async (req, res) => {
  try {
    const result = await Service.getTasksData(req.query);

    SUCCESS(res, SUC_CODES, result);
  } catch (error) {
    ERROR(res, error);
  }
};

const getTaskData = async (req, res) => {
  try {
    const result = await Service.getTask(req.params);

    SUCCESS(res, SUC_CODES, result);
  } catch (error) {
    ERROR(res, error);
  }
};

const createTaskData = async (req, res) => {
  try {
    const result = await Service.createTaskData(req.body);

    SUCCESS(res, CREATE_SUC_CODES, result);
  } catch (error) {
    console.log(error);

    ERROR(res, error);
  }
};

const updateTaskData = async (req, res) => {
  try {
    const result = await Service.updateTaskData(req.params, req.body);

    SUCCESS(res, UPDATE_SUC_CODES, result);
  } catch (error) {
    console.log(error);

    ERROR(res, error, res.span);
  }
};

const deleteTaskData = async (req, res) => {
  try {
    const result = await Service.deleteTaskData(req.params);

    SUCCESS(res, DELETE_SUC_CODES, result);
  } catch (error) {
    console.log(error);

    ERROR(res, error, res.span);
  }
};

module.exports = {
  getTasksData,

  getTaskData,

  createTaskData,

  updateTaskData,

  deleteTaskData,
};
