const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllUsers = async () => {
  const allUsers = await prisma.user.findMany();
  return allUsers;
};

const getOneUser = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  return user;
};

const createNewUser = async (newUser) => {
  const createdUser = await prisma.user.create({
    data: newUser,
  });
  return createdUser;
};

const updateUser = async (id, newData) => {
  const updatedUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: newData,
  });
  return updatedUser;
};

const deleteUser = async (id) => {
  const deletedUser = await prisma.user.delete({
    where: {
      id: id,
    },
  });
  return deletedUser;
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateUser,
  deleteUser,
};
