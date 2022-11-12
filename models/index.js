// import models
const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');


// user has many post
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// user has many comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// post belongs to user
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});


// post has many cars
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

// comment belongs to user
Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

// comment belongs to post
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

module.exports = {
    Comment,
    Post,
    User,
  };
