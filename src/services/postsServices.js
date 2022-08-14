const Post = require("../db/PostDB");

const getAllPosts = () => {
  const allPosts = Post.getAllPosts();
  return allPosts;
};

const getOnePost = (id) => {
  const post = Post.getOnePost(id);
  return post;
};

const createNewPost = (userId, newPost) => {
  const createdPost = Post.createNewPost(userId, newPost);
  return createdPost;
};

const createNewDraft = (userId, newDraft) => {
  const createdPost = Post.createNewDraft(userId, newDraft);
  return createdPost;
};

const updatePost = (postId, newData) => {
  const updatedPost = Post.updatePost(postId, newData);
  return updatedPost;
};

const deletePost = (postId) => {
  const deletedPost = Post.deletePost(postId);
  return deletedPost;
};

module.exports = {
  getAllPosts,
  getOnePost,
  createNewPost,
  createNewDraft,
  updatePost,
  deletePost,
};
