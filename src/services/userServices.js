import * as db from "../database/User.js";

export const getAllUsers = () => {
  const allUsers = db.getAllUsers();
  return allUsers;
};
//export const getOneUser =()=>{}
export const createNewUser = (newUser) => {
  const createUser = db.createNewUser(newUser);
  return createUser
};
//export const updateUser =()=>{}
//export const deleteUser =()=>{}
