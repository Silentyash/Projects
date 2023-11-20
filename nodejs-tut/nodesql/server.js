// const mysql = require("mysql2/promise");
const dotenv = require("dotenv").config();
const express = require("express");
const pool= require('./config/dbConnection')
const router= require('./routes/todoRouter');


const app = express();


app.use(express.json());
app.use(
  "/api/todos",require("./routes/todoRouter")
);
app.use("/api/users", require("./routes/userRoutes"))


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
