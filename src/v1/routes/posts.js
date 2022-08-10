const express = require("express");
const router = express.Router();

const postController = require("../../controllers/postsController");

router
  .get("/", postController.getAllPosts)
  .get("/:id", postController.getOnePost)
  .post("/", postController.createNewPost)
  .put("/:id", postController.updatePost)
  .delete("/:id", postController.deletePost)

module.exports = router;