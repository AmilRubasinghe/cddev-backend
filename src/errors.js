const _getStrError = (err) => {
  if (typeof err === "string") return err;

  if (err.message) return err.message;

  if (typeof error === "object") {
    return JSON.stringify(err);
  }

  console.log(err);

  return "";
};

const _getSuccess = (cc) => {
  if (!cc) return {};

  return { code: cc.code, message: cc.message };
};

const _getError = (err, code) => {
  if (!err) return {};

  return {
    code: code,
    message: _getStrError(err),
  };
};

const UN_SUCCESS = { success: false };

const HTTP_CODE = {
  _200: {
    httpCode: 200,
    type: "SUCCESS",
    code: 200,
    message: "ok",
    success: true,
  },
  _201: {
    httpCode: 201,
    type: "SUCCESS",
    code: 201,
    message: "ok",
    success: true,
  },
  _400: {
    httpCode: 400,
    type: "BAD_REQUEST",
    code: 400,
    message: "bad request",
    ...UN_SUCCESS,
  },
  _401: {
    httpCode: 401,
    type: "UNAUTHORIZED",
    code: 401,
    message: "unauthorized",
    ...UN_SUCCESS,
  },
  _404: {
    httpCode: 404,
    type: "NOT_FOUND",
    code: 404,
    message: "not found",
    ...UN_SUCCESS,
  },
  _500: {
    httpCode: 500,
    type: "INTERNAL_SERVER_ERROR",
    code: 500,
    message: "server error",
    ...UN_SUCCESS,
  },
};

const CUSTOM_CODE = {
  _200: (data, cc) => ({ ...HTTP_CODE._200, ..._getSuccess(cc), data: data }),

  _201: (data, cc) => ({ ...HTTP_CODE._201, ..._getSuccess(cc), data: data }),

  _400: (e) => ({ ...HTTP_CODE._400, ..._getError(e, 400) }),

  _401: (e) => ({ ...HTTP_CODE._401, ..._getError(e, 401) }),

  _404: (e) => ({ ...HTTP_CODE._404, ..._getError(e, 404) }),

  _500: (e) => ({ ...HTTP_CODE._500, ..._getError(e, 500) }),
};

module.exports = {
  HTTP_CODE,

  CUSTOM_CODE,
};
