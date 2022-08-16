const express = require("express");
const router = express.Router();

const postController = require("../../controllers/postsController");

router
  .get("/", postController.getAllPosts)
  .get("/:id", postController.getOnePost)
  .post("/:category/:userId", postController.createNewPost)
  .post("/:category/draft/:userId", postController.createNewDraft)
  .put("/:postId", postController.updatePost)
  .put("/publish/draft/:draftId", postController.publishDraft)
  .delete("/:postId", postController.deletePost);

module.exports = router;
