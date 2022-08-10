const { prisma } = require("@prisma/client");

class User {
  async getAllUsers() {
    const allUsers = await prisma.user.findMany();
    return allUsers;
  }

  async createNewUser(newUser) {
    const createdUser = await prisma.user.create({
      data: newUser,
    });
    return createdUser;
  }
}

module.exports = User;