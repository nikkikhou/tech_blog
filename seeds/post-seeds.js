const { Post } = require('../models');

const postData = [
  {
    title: 'blog post 1',
    body: 'test123'
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
