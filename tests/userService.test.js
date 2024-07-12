const userService = require('../services/userService');
const { UserNotFound } = require('../errors/userError');

describe('User Service', () => {
    afterAll(() => {
        jest.clearAllMocks();
    });
    
    afterEach(() => {
        jest.clearAllTimers();
    });
    
    it('should return a user when found', async () => {
        const user = await userService.getUser(1);
        expect(user).toEqual({ id: 1, name: 'John Doe', email: 'john.doe@example.com' });
    });

    it('should throw UserNotFound error when user is not found', async () => {
        await expect(userService.getUser(999)).rejects.toThrow(UserNotFound);
    });
});
