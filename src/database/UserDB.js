import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllUsers = async () => {
  const allUsers = await prisma.user.findMany();
  return allUsers;
};

export const getOneUser = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id)
    },
  });
  return user;
};

export const createNewUser = async (newUser) => {
  const createdUser = await prisma.user.create({
    data: newUser,
  });
  return createdUser;
};
