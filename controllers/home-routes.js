const router = require("express").Router();
const { Post, Comment, User } = require("../models");
const withAuth = require("../utils/auth");

// get all
router.get("/", async (req, res) => {
  // post findAll
  // map through data, serialize
  // render appropriate view
  try {
    const postData = await Post.findAll({
      // include: [{ model: User }],
    });
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// // get single post
// router.get('/post/:id', async (req, res) => {
//     // find by PK
//     // serialize
//     // render appropriate view

// });

router.get('/post/:id', withAuth, async (req, res) => {
  try {
      const commentData = await Comment.findAll({
          where: {
              post_id: req.params.id 
          },
          include: [ { model: User }, { model: Post }]
      });

      const postData = await Post.findByPk(req.params.id, {
          // include: [ { model: User } ],
      });
      
      const post = postData.get({ plain: true });

      const comments = commentData.map((comment) => comment.get({ plain: true }));

      res.render('single-post', {
          ...post,
          comments,
          loggedIn: req.session.loggedIn
      });
  } catch (err) {
      res.status(500).json(err);
  }
});

// // get login
// router.get('/login', async (req, res) => {
//     // activity  18 home-routes.js

// });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
      res.redirect('/');
      return;
  }
  res.render('login');
});

// // get signup
// router.get('/signup', async (req, res) => {
//     // activity  18 home-routes.js

// });

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
      res.redirect('/');
      return;
  }
  res.render('signup');
});

module.exports = router;
