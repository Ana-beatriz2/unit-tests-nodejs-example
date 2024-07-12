const userController = require('../controllers/userController');
const userService = require('../services/userService');
const { UserNotFound } = require('../errors/userError');

jest.mock('../services/userService');

describe('User Controller', () => {
    afterAll(() => {
        jest.clearAllMocks();
    });
    
    afterEach(() => {
        jest.clearAllTimers();
    });
    
    it('should return a user when found', async () => {
        const req = { params: { id: 1 } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const user = { id: 1, name: 'John Doe', email: 'john.doe@example.com' };
        userService.getUser.mockResolvedValue(user);

        await userController.getUser(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ user });
    });

    it('should return 404 when user is not found', async () => {
        const req = { params: { id: 999 } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        userService.getUser.mockRejectedValue(new UserNotFound());

        await userController.getUser(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ code: 404, message: 'User not found', type: 'ERR_USER_NOT_FOUND' });
    });
});
