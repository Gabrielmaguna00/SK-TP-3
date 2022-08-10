import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllUsers = async () => {
  const allUsers = await prisma.user.findMany();
  return allUsers;
};

export const createNewUser = async (newUser) => {
  const createdUser = await prisma.user.create({
    data: newUser,
  });
  return createdUser;
};
