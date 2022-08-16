const Post = require("../db/PostDB");

const getAllPosts = () => {
  const allPosts = Post.getAllPosts();
  return allPosts;
};

const getOnePost = (id) => {
  const post = Post.getOnePost(id);
  return post;
};

const getPostFromOneUser = (userId) => {
  const userPosts = Post.getPostFromOneUser(userId);
  return userPosts;
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

const hidePostUsers = (id) => {
  const hidden = Post.hidePostUsers(id);
  return hidden;
};

const deletePost = (postId) => {
  const deletedPost = Post.deletePost(postId);
  return deletedPost;
};

const publishDraft = (id) => {
  const publishedDraft = Post.publishDraft(id);
  return publishedDraft;
};

module.exports = {
  getAllPosts,
  getOnePost,
  getPostFromOneUser,
  createNewPost,
  createNewDraft,
  updatePost,
  deletePost,
  hidePostUsers,
  publishDraft,
};
