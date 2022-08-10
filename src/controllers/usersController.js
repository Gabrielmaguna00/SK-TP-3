const userServices = require("../services/usersServices");

const getAllUsers = async (req, res) => {
  const allUsers = await userServices.getAllUsers();

  res.status(201).json({ status: "ok", data: allUsers });
};

const getOneUser = async (req, res) => {
  const { id } = req.params;
  const user = await userServices.getOneUser(Number(id));
  res.status(201).json({
    status: "ok",
    data: user,
  });
};

const createNewUser = async (req, res) => {
  const { name, age, email, country } = req.body;

  if (!name || !email || !age || !country) {
    res.status(400).json({
      status: "error",
      err: "Empty fields",
      reason: "There are incomplete fields",
    });
  }

  const newUser = {
    name: name,
    age: age,
    email: email,
    country: country,
  };

  const createdUser = await userServices.createNewUser(newUser);
  res
    .status(201)
    .json({ msg: "Nuevo usuario añadido con exito", data: createdUser });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const updatedUser = await userServices.updateUser(id);

  res.status(201).json({ msg: "Usuario actualizado", data: updatedUser });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const deletedUser = await userServices.deleteUser(id);
  res.status(201).json({ msg: "Usuario eliminado", data: deletedUser });
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateUser,
  deleteUser,
};
