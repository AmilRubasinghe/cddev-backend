const _setCode = (code, httpCode) => ({
  code: code, // custom_code
  hc: httpCode, // http_code
});

const Codes = {
  SUC_CODES: {
    ..._setCode(200, 200),
    message: "Successfully retrieve tasks",
  },
  CREATE_SUC_CODES: {
    ..._setCode(201, 201),
    message: "Successfully Added",
  },
  UPDATE_SUC_CODES: {
    ..._setCode(200, 200),
    message: "Successfully Updated",
  },
  DELETE_SUC_CODES: {
    ..._setCode(200, 200),
    message: "Successfully Deleted",
  },
};

module.exports = { Codes };
