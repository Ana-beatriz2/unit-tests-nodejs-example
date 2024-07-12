const HttpCode = {
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
};

class HttpError extends Error {
    constructor({ httpCode, type, message }) {
        super(message);
        this.httpCode = httpCode;
        this.type = type;
    }
}

module.exports = { HttpCode, HttpError };
