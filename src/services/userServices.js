import * as db from "../database/UserDB.js";

export const getAllUsers = () => {
  const allUsers = db.getAllUsers();
  return allUsers;
};
export const getOneUser = (id) => {
  const user = db.getOneUser(id);
  return user;
};
export const createNewUser = (newUser) => {
  const createUser = db.createNewUser(newUser);
  return createUser;
};
//export const updateUser =()=>{}
//export const deleteUser =()=>{}
