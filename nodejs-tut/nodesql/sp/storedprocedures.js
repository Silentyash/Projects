// storedProcedures.js
module.exports = {
  getTodosSP: "CALL getTodos",
  getTodoByIdSP: "CALL getTodoById(?)",
  createTodosSP: "CALL createTodos(?, ?, ?, ?, ?)",
  softDeleteTodoSP: "Call softDelete(?)",
  hardDeleteTodoSP: "Call softDelete(?)",
  updateTodoSP: "CALL updateTodo(?, ?, ?, ?, ?, ?)",
  toggleActiveStatusSP: "CALL togglecompletestatus(?)",
  toggleFavoritesSP: "CALL toggleFavorite(?)",

  searchUserSP: " CALL searchUser(?)",
  registerUserSP: "CALL registerUser(?,?,?)",
};
