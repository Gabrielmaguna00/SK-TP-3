const Post = require("../db/Post");

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

const updatePost = (userId, postId, newData) => {
  const updatedPost = Post.updatePost(userId, postId, newData);
  return updatedPost;
};

const deletePost = (userId, postId) => {
  const deletedPost = Post.deletePost(userId, postId);
  return deletedPost;
};

module.exports = {
  getAllPosts,
  getOnePost,
  createNewPost,
  updatePost,
  deletePost,
};
