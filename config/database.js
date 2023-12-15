const mongoose = require("mongoose");

const { APPLICATION } = require("./config");

const PORT = APPLICATION.DB_PORT;
const database = APPLICATION.DB_NAME;
const DB_URL = APPLICATION.DB_URL;

const dbURL = `${DB_URL.replace("<DB_NAME>", database)}`;

const connection = mongoose.connect(dbURL);

module.exports = connection;
