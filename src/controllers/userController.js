import * as services from "../services/userServices.js";

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await services.getAllUsers();
    res.status(200).json({ status: "Okey!", data: allUsers });
  } catch (error) {
    res.status(404).json({ status: "error", err: error });
  }
};
export const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await services.getOneUser(id);
    res.status(200).json({ status: "okey", data: user });
  } catch (error) {
    res.status(404).json({ status: "error", error });
  }
};
export const createNewUser = async (req, res) => {
  try {
    const { name, age, email, country } = req.body;
    if (!name || !age || !email || !country) {
      res.status(400).json({
        status: "error",
        err: "You must fill all the fields",
        reason: "Fields: name, email, age or country are empty",
      });
    }
    const newUser = {
      name,
      age,
      email,
      country,
    };
    const createdUser = await services.createNewUser(newUser);
    res.status(201).json({ status: "ok!", data: createdUser });
  } catch (error) {
    console.log(error.code[1]);
    if (error.code[1] == 2) {
      res
        .status(400)
        .json({ status: "error", err: "Bad request", reason: error.meta });
    }
  }
};
export const updateUser = (req, res) => {
  const { id } = req.params;
  res.status(200).send("Updates user!");
};
export const deleteUser = (req, res) => {
  const { id } = req.params;
  res.status(200).send("Deletes user");
};
