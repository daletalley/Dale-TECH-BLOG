const { Users } = require('../models');

const usersData = [
    {
        user_name: 'ricky',
        email: 'rick@rick.com',
        password: 'rick123'
    },
    {
        user_name: 'lebron',
        email: 'lebron@lebron.com',
        password: 'lebron123'
    },
    {
        user_name: 'lucy',
        email: 'lucy@lucy.com',
        password: 'lucy123'
    }
];

const seedUsers = () => Users.bulkCreate(usersData);

module.exports = seedUsers;