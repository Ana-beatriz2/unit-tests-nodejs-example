const { UserNotFound } = require('../errors/userError');

async function getUser(userId) {
    const user = await findUserById(userId); //simular chamada a um banco de dados
    if (!user) {
        throw new UserNotFound();
    }
    return user;
}

function findUserById(userId) {
    const users = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' }
    ];
    return users.find(user => user.id === parseInt(userId));
}

module.exports = {
    getUser
};
