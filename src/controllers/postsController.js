const postServices = require("../services/postsServices");

const getAllPosts = async (req, res) => {
  const allPosts = await postServices.getAllPosts();
  res.status(201).json({ status: "ok", data: allPosts });
};

const getOnePost = async (req, res) => {
  const { id } = req.params;
  const post = await postServices.getOnePost(Number(id));
  res.status(201).json({ status: "ok", data: post });
};

const createNewPost = async (req, res) => {
  const { userId } = req.params;
  const { newPost } = req.body;
  const createdPost = await postServices.createNewPost(userId, newPost);
  res.status(201).json({ status: "ok", data: createdPost });
};

const updatePost = async (req, res) => {
  const { userId } = req.params;
  const { postId } = req.params;
  const { newData } = req.body;
  const updatedPost = await postServices.updatePost(userId, postId, newData);
  res.status(201).json({ status: "ok", data: updatedPost });
};

const deletePost = async (req, res) => {
  const { userId } = req.params;
  const { postId } = req.params;
  const deletedPost = await postServices.deletePost(userId, postId);
  res.status(201).json({ status: "ok", data: deletedPost });
};

module.exports = {
  getAllPosts,
  getOnePost,
  createNewPost,
  updatePost,
  deletePost,
};
