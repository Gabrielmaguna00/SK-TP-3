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
      userId,
      ...newPost,
      published: true,
    },
  });
  return createdPost;
};

const createNewDraft = async (userId, newDraft) => {
  const createdPost = await prisma.post.create({
    data: {
      userId,
      ...newDraft,
    },
  });
  return createdPost;
};

const updatePost = async (postId, newData) => {
  const post = await prisma.post.update({
    where: {
      id: postId,
    },
    data: newData,
  });
  return post;
};

const deletePost = async (postId) => {
  const deletedPost = await prisma.post.delete({
    where: {
      id: postId,
    },
  });
  return deletedPost;
};

const hidePostUsers = async (id) => {
  const hidden = await prisma.post.updateMany({
    where: {
      userId: id,
    },
    data: {
      published: false,
    },
  });
};

const publishDraft = async (id) => {
  const published = await prisma.post.update({
    where: {
      id,
    },
    data: {
      published: true,
    },
  });
  return published
};

module.exports = {
  getAllPosts,
  getOnePost,
  createNewPost,
  createNewDraft,
  updatePost,
  deletePost,
  hidePostUsers,
  publishDraft
};
