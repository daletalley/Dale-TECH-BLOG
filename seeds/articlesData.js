const { Articles } = require('../models');

const articlesData = [
    {
        title: 'running is fun',
        content: 'run all day',
        user_id: 1,
    },
    {
        title: 'i love the holidays',
        content: 'holiday season is the best',
        user_id: 2,
    },
    {
        title: 'lets go to the beach',
        content: 'lets go to the beach and have some fun',
        user_id: 3,
    }
];

const seedArticles = () => Articles.bulkCreate(articlesData);

module.exports = seedArticles;