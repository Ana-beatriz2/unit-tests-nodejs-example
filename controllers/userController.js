const userService = require('../services/userService');
const { HttpError } = require('../utils/app.error');

async function getUser(req, res) {
    try {
        const userId = req.params.id;
        const user = await userService.getUser(userId);
        res.status(200).json({ user });
    } catch (e) {
        if (e instanceof HttpError) {
            res.status(e.httpCode).json({ code: e.httpCode, message: e.message, type: e.type });
        } else {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

module.exports = {
    getUser
};