const { Comments } = require('../models');

const commentsData = [
    {
        content: 'hello world',
        user_id: 1,
        article_id: 3
    },
    {
        content: 'yo whats up',
        user_id: 2,
        article_id: 1
    },
    {
        content: 'hey guys',
        user_id: 3,
        article_id: 2
    }
];

const seedComments = () => Comments.bulkCreate(commentsData);

module.exports = seedComments;