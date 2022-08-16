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
  try {
    const { id } = req.params;
    const user = await userServices.getOneUser(Number(id));
    res.status(201).json({
      status: "ok",
      data: user,
    });
  } catch (error) {
    res.status(404).json({ status: "error", err: error });
  }
};

const createNewUser = async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
    if (error) {
      res
        .status(400)
        .json({ status: "error", err: "Bad request", reason: error.meta });
    }
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, email, country } = req.body;
    if (!name || !email || !age || !country) {
      res.status(400).json({
        status: "error",
        err: "Empty fields",
        reason: "There are incomplete fields",
      });
    }
    const newData = {
      name: name,
      age: Number(age),
      email: email,
      country: country,
    };

    const updatedUser = await userServices.updateUser(Number(id), newData);
    res.status(201).json({ msg: "Usuario actualizado", data: updatedUser });
  } catch (error) {
    console.log(error);
    if (error) {
      res
        .status(400)
        .json({ status: "error", err: "Bad request", reason: error.meta });
    }
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await userServices.deleteUser(Number(id));
    res.status(201).json({ msg: "Usuario eliminado", data: deletedUser });
  }
  catch (error) {
    res.satus(404).json({ status: "error", err: error });
  };
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateUser,
  deleteUser,
};
