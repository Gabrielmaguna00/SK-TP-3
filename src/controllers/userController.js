import * as services from "../services/userServices.js";

export const getAllUsers = async (req, res) => {
  const allUsers = await services.getAllUsers();
  res.status(200).json({ status: "1ok!", data: allUsers });
};
export const getOneUser = (req, res) => {
  const { id } = req.params;
  res.status(200).send("2ok!");
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
    console.log(error.meta)
    res.send(error)
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
