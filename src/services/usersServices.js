const User = require("../db/User");

const getAllUsers = () => {
  const allUsers = User.getAllUsers();
  return allUsers;
};

const getOneUser = (id) => {
  const user = User.getOneUser(id);
  return user;
};

const createNewUser = (newUser) => {
  const createdUser = User.createNewUser(newUser);
  return createdUser;
};

const updateUser = (id) => {
  const updatedUser = User.updateUser(id);
  return updatedUser;
};

const deleteUser = (id) => {
  const deletedUser = User.deleteUser(id);
  return deletedUser;
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateUser,
  deleteUser,
};
