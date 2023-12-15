const TaskSchema = require("./task");

const newOption = { new: true };

const createSingleRecode = async (singleRecode) => {
  return await TaskSchema.create(singleRecode);
};

const deleteSingleRecode = async (data) => {
  const result = await TaskSchema.findByIdAndDelete(data);
  return result;
};

const updateRecode = async (key, dataNeedToUpdate) =>
  await TaskSchema.findOneAndUpdate(
    key,
    { $set: { ...dataNeedToUpdate } },
    { ...newOption, runValidators: true }
  );

const findOneByQuery = async (query) => await TaskSchema.findOne(query);

const findByQuery = async (query) => {
  const { sortBy, sortOrder } = query;

  return await TaskSchema.find(query).sort({
    [sortBy ? sortBy : "createdAt"]: sortOrder ? sortOrder : -1,
  });
};

module.exports = {
  Schema: TaskSchema,

  updateRecode: updateRecode,

  findOneByQuery,

  findByQuery,

  createSingleRecode,

  deleteSingleRecode,
};
