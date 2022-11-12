const router = require("express").Router();
const { Post, Comment } = require("../../models");

// get all post
router.get("/", async (req, res) => {
  // find all categories
  try {
    const postData = await Post.findAll({
      include: Comment,
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

// get single post with comments
router.get("/:id", async (req, res) => {
  // find all categories
  try {
    const postData = await Post.findByPk(req.params.id, {include: Comment});
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

// create a post
router.post("/", async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete post
router.delete("/:id", async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
