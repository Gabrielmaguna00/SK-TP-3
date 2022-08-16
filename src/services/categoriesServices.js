const Category = require("../db/CategoryDB");

const getAllCategories = () => {
  const allCategories = Category.getAllCategories();
  return allCategories;
};

const getOneCategory = (id) => {
  const category = Category.getOneCategory(id);
  return category;
};

const createNewCategory = (newCategory) => {
  const createdCategory = Category.createNewCategory(newCategory);
  return createdCategory;
};

const updateCategory = (id, newData) => {
  const updateCategory = Category.updateCategory(id, newData);
  return updateCategory;
};

const deleteCategory = (id) => {
  const deletedCategory = Category.deleteCategory(id);
  return deletedCategory;
};

const findOrCreate = (category) => {
  const findCreate = Category.findOrCreate(category);
  return findCreate;
};

module.exports = {
  getAllCategories,
  getOneCategory,
  createNewCategory,
  updateCategory,
  deleteCategory,
  findOrCreate,
};
