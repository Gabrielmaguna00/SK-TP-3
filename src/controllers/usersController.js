const userServices = require("../services/usersServices");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userServices.getAllUsers();
    res.status(200).json({ status: "Okey!", data: allUsers });
  } catch (error) {
    res.status(404).json({ status: "error", err: error });
  }
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
  try {
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
  } catch (error) {
    console.log(error.code[1]);
    if (error.code[1] == 2) {
      res
        .status(400)
        .json({ status: "error", err: "Bad request", reason: error.meta });
    }
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, age, email, country } = req.body;
  if (!name || !email || !age || !country) {
    res.status(400).json({
      status: "error",
      err: "Empty fields",
      reason: "There are incomplete fields",
    });
  }
  try {
    const newData = {
      name: name,
      age: Number(age),
      email: email,
      country: country,
    };

    const updatedUser = await userServices.updateUser(Number(id),newData);
    res
      .status(201)
      .json({ msg: "Usuario actualizado", data: updatedUser });
  } catch (error) {
    console.log(error.code[1]);
    if (error.code[1] == 2) {
      res
        .status(400)
        .json({ status: "error", err: "Bad request", reason: error.meta });
    }
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const deletedUser = await userServices.deleteUser(Number(id));
  res.status(201).json({ msg: "Usuario eliminado", data: deletedUser });
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateUser,
  deleteUser,
};
