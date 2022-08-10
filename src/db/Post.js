const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllPosts = async (userId) => {
  const allPosts = await prisma.post.findMany({
    where: {
      userId: userId,
    },
  });
  return allPosts;
};

const getOnePost = async (userId, postId) => {
  const post = await prisma.post.findUnique({
    where: {
      id: postId,
      userId: userId,
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
