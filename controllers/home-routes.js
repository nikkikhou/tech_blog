const router = require("express").Router();
const { Post, Comment, User } = require("../models");

// get all
router.get('/', async (req, res) => {
// post findAll
// map through data, serialize
// render appropriate view
try {
    const categoryData = await Category.findAll({
      // include: [{ model: Product, through: ProductTag, as: 'planned_trips' }]
    });
    res.status(200).json(categoryData);
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

// // get login
// router.get('/login', async (req, res) => {
//     // activity  18 home-routes.js

// });

// // get signup
// router.get('/signup', async (req, res) => {
//     // activity  18 home-routes.js

// });

module.exports = router;


