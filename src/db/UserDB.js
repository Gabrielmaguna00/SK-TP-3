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
    include:{
      post:true
    }
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
  console.log(typeof id)
  const deletedUser = await prisma.user.update({
    where: {
      id,
    },
    data:{
      visibility: false
    }
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
