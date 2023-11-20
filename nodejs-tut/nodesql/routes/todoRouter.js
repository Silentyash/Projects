const express = require("express");
const router = express.Router();
const validateToken=require("../middleware/validateTokenHandler")
const {
  getTodos,
  getTodosById,
  toggleFavorites,
  softDeleteToDo,
  toggleCompleteStatus,
  permanentlyDeleteToDo,
  updateToDo,
  createTodos,
} = require("../controllers/controller");

router.use(validateToken);
router.route("/").get(getTodos).post(createTodos)
router.route("/:id").get(getTodosById).delete(softDeleteToDo);
router.route("/:id/activity").put(toggleCompleteStatus);
router.route("/:id/favorite").put(toggleFavorites);
router.route("/:id/delete").delete(permanentlyDeleteToDo);
router.route("/:id/managetodos").put(updateToDo);

module.exports = router;
