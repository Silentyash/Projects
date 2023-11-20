const expressAsyncHandler = require("express-async-handler");
const pool = require("../config/dbConnection");
const storedProcedures = require("../sp/storedprocedures");

const getTodos = expressAsyncHandler(async (req, res) => {
  const [results] = await pool.query(storedProcedures.getTodosSP, true);
  res.json(results[0]);
  
});

const getTodosById=expressAsyncHandler(async(req,res)=>{
  const idno=req.params.id;
  
  const [results] = await pool.query(storedProcedures.getTodoByIdSP,[idno], true);
  if (results[0].length === 0) {
    res.status(404).json({ error: "Task not found" });
  } else {
    console.log("Task found");
    res.json(results[0]);
  }
  
});

const checkById=async(idno)=>{
  const [result] = await pool.query(storedProcedures.getTodoByIdSP,[idno], true);
  return result
}

const createTodos= expressAsyncHandler(async(req,res)=>{
  const {title,description,ifCompleted,ifFavorite,ifDeleted}= req.body;
  if (!title || !description){
    res.status(400)
    throw new Error("please enter title and description for task")
  }
  const [results] = await pool.query(
    storedProcedures.createTodosSP,[
      title, description, ifCompleted, ifFavorite, ifDeleted
    ],
    true
  );
  res.json(results[0]);
  
})

const softDeleteToDo = expressAsyncHandler(async (req, res) => {
  const checkResult=await checkById(req.params.id)
  
  if (checkResult[0].length === 0) {
    res.status(404).json({ error: "Task not found" });
  }else{

  const idno= req.params.id;
  const [results] = await pool.query(
    storedProcedures.softDeleteTodoSP,[idno],true
  );
  res.status(200).json({ message: `Task ${idno} soft deleted succefully` });
  }
  
})


const permanentlyDeleteToDo = expressAsyncHandler(async (req,res) => {
   const checkResult = await checkById(req.params.id);
   if (checkResult[0].length === 0) {
     res.status(404).json({ error: "Task not found" });
   } else {
     const idno = req.params.id;
     const [results] = await pool.query(
       storedProcedures.hardDeleteTodoSP,
       [idno],
       true
     );
     res.status(200).json({ message: `Task ${idno}  deleted from DB succefully` });
   }
});

const updateToDo = expressAsyncHandler(async (req,res) => {
  const checkResult=await checkById(req.params.id)
  if (checkResult[0].length === 0) {
    res.status(404).json({ error: "Task not found" });
  }
    const { title, description, ifCompleted, ifFavorite, ifDeleted } = req.body;
  if (!title || !description) {
      res.status(400);
      throw new Error("please enter title and description for task");
    }
  const idno= req.params.id;
  const [results] = await pool.query(
    storedProcedures.updateTodoSP,
    [idno, title, description, ifCompleted, ifFavorite, ifDeleted],
    true
  );
   if (results.affectedRows > 0) {
      res.status(200).json({ message: "Task updated successfully" });
    } else {
      res.status(200).json({ error: "no field updated" });
    }
  
});

const toggleCompleteStatus = expressAsyncHandler(async (req,res) => {
   const checkResult = await checkById(req.params.id);

   if (checkResult[0].length === 0) {
     res.status(404).json({ error: "Task not found" });
   } else {
     const idno = req.params.id;
     const [results] = await pool.query(
       storedProcedures.toggleActiveStatusSP,
       [idno],
       true
     );
     res.status(200).json({ message: `Task ${idno} marked  succefully` });
   }
});

const toggleFavorites = expressAsyncHandler(async (req, res) => {
  const checkResult = await checkById(req.params.id);

  if (checkResult[0].length === 0) {
    res.status(404).json({ error: "Task not found" });
  } else {
    const idno = req.params.id;
    const [results] = await pool.query(
      storedProcedures.toggleFavoritesSP,
      [idno],
      true
    );
    res.status(200).json({ message: `Task ${idno} marked  succefully` });
  }
});



module.exports = {
  getTodos,
  getTodosById,
  toggleFavorites,
  softDeleteToDo,
  toggleCompleteStatus,
  permanentlyDeleteToDo,
  updateToDo,
  createTodos,
};
