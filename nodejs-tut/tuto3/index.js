const express= require("express");
const app = express();

const port =3001;

app.get("/", (req,res)=>{    //route1 
    res.json({message:" this is homepage"})
})

app.get("/users", (req, res) => {
  //route2
  res.json({ message: " get all users" });
});

app.get("/users/:id", (req, res) => {
  //route3
  res.json({ message: ` Get users with ${req.params.id}` });
});

//post route

app.post("/users/",(req,res)=>{
    res.json({message:"Create new user"})
});

//put 
app.put("/users/:id", (req, res) => {
  res.json({ message: `update user with ${req.params.id}` });
});

//delete
app.delete("/users/:id", (req, res) => {
  res.json({ message: `delete user with ${(req.params.id)}` });
});


app.listen(port, ()=>{
    console.log(`app is listening on ${port}`);
})