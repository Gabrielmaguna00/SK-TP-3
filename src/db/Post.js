const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllPosts = async () => {
  const allPosts = await prisma.post.findMany();
  return allPosts;
};

const getOnePost = async (id) => {
  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });
  return post;
};

const createNewPost = async (userId, newPost) => {
  const createdPost = await prisma.post.create({
    data: {
      userId: userId,
      ...newPost,
    },
  });
  return createdPost;
};

const updatePost = async (userId, postId, newData) => {
  const updatedPost = await prisma.post.update({
    where: {
      id: postId,
      userId: userId,
    },
    data: newData,
  });
  return updatedPost;
};

const deletePost = async (userId, postId) => {
  const deletedPost = await prisma.post.delete({
    where: {
      id: postId,
      userId: userId,
    },
  });
  return deletedPost;
};

module.exports = {
  getAllPosts,
  getOnePost,
  createNewPost,
  updatePost,
  deletePost,
};