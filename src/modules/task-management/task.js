const mongoose = require("mongoose");

const connection = require("../../../config/database");

const Schema = mongoose.Schema;

mongoose.connection = connection;

const taskSchema = new Schema(
  {
    id: { type: String, required: true, index: true, unique: true },

    title: { type: String, required: true, unique: true },

    description: { type: String, required: true },

    isCompleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("task", taskSchema);
