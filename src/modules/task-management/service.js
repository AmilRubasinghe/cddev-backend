const DataBase = require("./database");

const { to, TE } = require("../../helper");

const generator = require("generate-password");

const _getTaskById = async (filter) => {
  const getRecode = await DataBase.findOneByQuery(filter);

  if (!getRecode) TE("Id not found");

  return getRecode;
};

const getTasksData = async (params) => {
  return await DataBase.findByQuery(params);
};

const getTask = async (filter) => {
  const getRecode = await _getTaskById(filter);
  return getRecode;
};

const createTaskData = async (data) => {
  let storeData = data;

  if (!storeData.id)
    storeData.id = generator.generate({
      length: 6,
      numbers: true,
      uppercase: false,
      lowercase: false,
    });

  const createSingleRecode = DataBase.createSingleRecode(storeData);

  return createSingleRecode;
};

const updateTaskData = async (filter, updateData) => {
  const getRecode = await _getTaskById(filter);

  const updateRecode = await DataBase.updateRecode(
    { _id: getRecode._id },
    updateData
  );

  return updateRecode;
};

const deleteTaskData = async (data) => {
  const getRecode = await _getTaskById(data);

  const deleteRecode = await DataBase.deleteSingleRecode({
    _id: getRecode._id,
  });

  return deleteRecode;
};

module.exports = {
  getTasksData,

  getTask,

  createTaskData,

  updateTaskData,

  deleteTaskData,
};
