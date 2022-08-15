const categoryServices = require("../services/categoriesServices");

const getAllCategories = async (req, res) => {
  try {
    const allCategories = await categoryServices.getAllCategories();
    res.status(200).json({
      status: "Okey",
      data: allCategories,
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      err: error,
    });
  }
};

const getOneCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryServices.getOneCategory(Number(id));
    res.status(200).json({
      status: "error",
      data: category,
    });
  } catch (error) {
    res.status(404).json({ status: "error", err: error });
  }
};

const createNewCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      res.status(400).json({
        status: "error",
        err: "Empty field",
      });
    }
    const newCategory = { name: name };

    const createdCategory = await categoryServices.createNewCategory(
      newCategory
    );
    res.status(201).json({
      status: "okey, categoria creada",
      data: createdCategory,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      err: "Bad request",
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
      res.status(400).json({
        status: "error",
        err: "Empty field",
      });
    }
    const newData = {
      name: name,
    };

    const updatedCategory = await categoryServices.updateCategory(
      Number(id),
      newData
    );
    res.status(201).json({
      msg: "Categoria actualizada",
      data: updatedCategory,
    });
  } catch (error) {
    console.log(error.code[1]);
    if (error.code[1] == 2) {
      res.status(400).json({
        status: "error",
        err: "Bad request",
        reason: error.meta,
      });
    }
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCategory = await categoryServices.deleteCategory(Number(id));
    res.status(201).json({
      msg: "Categoria eliminada",
      data: deletedCategory,
    });
  } catch (error) {
    res.status(404).json({ status: "error", err: error });
  }
};

module.exports = {
  getAllCategories,
  getOneCategory,
  createNewCategory,
  updateCategory,
  deleteCategory,
};
