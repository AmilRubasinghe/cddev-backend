const { CUSTOM_CODE } = require("./errors");

const to = (promise) => {
  return promise

    .then((data) => {
      return [null, data];
    })
    .catch((err) => [err]);
};

const TE = (err) => {
  throw err;
};

const SUCCESS = (res, codeObj, data) => {
  const { hc, code, message } = codeObj;

  let response = CUSTOM_CODE._200(data);

  if (hc && code && message) {
    response = CUSTOM_CODE[`_${hc}`](data, codeObj);
  }

  res.status(response.httpCode).json(response);

  return response;
};

const ERROR = (res, err) => {
  try {
    const error = err.error ? err.error : err;

    let response = CUSTOM_CODE._500(error);

    if (error && error.hc && error.message) {
      response = CUSTOM_CODE[`_${error.hc}`](error);
    }

    return res.status(response.httpCode).json(response);
  } catch (catchErr) {
    console.log("****", catchErr);

    const response = CUSTOM_CODE._400(err);

    return res.status(response.httpCode).json(response);
  }
};

const VALIDATION_ERROR = (res, err) => {
  try {
    const error = err.error ? err.error : err;

    let response = CUSTOM_CODE._400(error);

    return res.status(response.httpCode).json(response);
  } catch (catchErr) {
    console.log("****", catchErr);

    const response = CUSTOM_CODE._400(err);

    return res.status(response.httpCode).json(response);
  }
};

module.exports = {
  to,
  TE,
  SUCCESS,
  ERROR,
  VALIDATION_ERROR,
};
