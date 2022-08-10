import express from "express";
import * as controllers from "../../controllers/userController.js";
const router = express.Router();
router
  .get("/", controllers.getAllUsers)
  .get("/:id", controllers.getOneUser)
  .post("/", controllers.createNewUser)
  .put("/:id", controllers.updateUser)
  .delete("/id", controllers.deleteUser);

export default router;
