const postServices = require("../services/postsServices");
const categoryServices = require("../services/categoriesServices");
const categoriesPostServices = require("../services/categoriesToPostServices");

const getAllPosts = async (req, res) => {
  try {
    const allPosts = await postServices.getAllPosts();
    res.status(200).json({ status: "ok", data: allPosts });
  } catch (error) {
    res.status(404).json({ status: "error", err: error });
  }
};

const getOnePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postServices.getOnePost(Number(id));
    res.status(200).json({ status: "ok", data: post });
  } catch (error) {
    res.status(404).json({ status: "error", err: error });
  }
};

const createNewPost = async (req, res) => {
  try {
    const { userId, category } = req.params;
    const categoryExisting = await categoryServices.findOrCreate(
      category.toLowerCase()
    );
    const newPost = req.body;
    const createdPost = await postServices.createNewPost(
      Number(userId),
      newPost
    );
    const categoriesToPost = categoriesPostServices.categoryPost(
      categoryExisting,
      createdPost.id
    );
    res.status(201).json({ status: "Post created", data: createdPost });
  } catch (error) {
    res.status(404).json({ status: "error", err: error });
  }
};
const createNewDraft = async (req, res) => {
  try {
    const { userId, category } = req.params;
    const categoryExisting = await categoryServices.findOrCreate(
      category.toLowerCase()
    );
    const newDraft = req.body;
    const createdDraft = await postServices.createNewDraft(
      Number(userId),
      newDraft
    );
    const categoriesToPost = categoriesPostServices.categoryPost(
      categoryExisting,
      createdDraft.id
    );
    res.status(201).json({ status: "Draft created", data: createdDraft });
  } catch (error) {
    res.status(404).json({ status: "error", err: error });
  }
};

const updatePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const newData = req.body;
    const updatedPost = await postServices.updatePost(Number(postId), newData);
    res.status(201).json({ status: "ok", data: updatedPost });
  } catch (error) {
    res.status(404).json({ status: "error", err: error });
  }
};

const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const deletedPost = await postServices.deletePost(Number(postId));
    res.status(201).json({ status: "ok", data: deletedPost });
  } catch (error) {
    res.status(404).json({ status: "error", err: error });
  }
};

module.exports = {
  getAllPosts,
  getOnePost,
  createNewPost,
  createNewDraft,
  updatePost,
  deletePost,
};
