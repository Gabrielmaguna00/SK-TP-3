const express = require("express");
const router = express.Router();

const postController = require("../../controllers/postsController");

router
  .get("/:id/posts", postController.getAllPosts)
  .get("/:id/posts/:postId", postController.getOnePost)
  .post("/:id/posts", postController.createNewPost)
  .put("/:id/posts/:postId", postController.updatePost)
  .delete("/:id/posts/:postId", postController.deletePost)
  