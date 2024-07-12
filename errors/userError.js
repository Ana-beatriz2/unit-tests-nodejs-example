const { HttpCode, HttpError } = require('../utils/app.error');

class UserNotFound extends HttpError {
    constructor() {
        super({
            httpCode: HttpCode.NOT_FOUND,
            type: 'ERR_USER_NOT_FOUND',
            message: 'User not found'
        });
    }
}

module.exports = {
    UserNotFound
};
