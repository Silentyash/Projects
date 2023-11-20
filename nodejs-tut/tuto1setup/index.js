// // const  path = require("path");

// const filePath = "E:\nodejs-tut\tuto1setupFilessample.txt";

// // // console.log(path.dirname(filePath));
// // // console.log(path.basename(filePath));
// // // console.log(path.extname(filePath));

// // const sampleFile="sample.txt";

// // console.log(path.join(path.dirname(filePath),sampleFile))

// const fs= require("fs");

// fs.readFile(filePath,"utf-8", (err,data)=>{

//     if (err)
//         throw new Error("something is wrong");
//     console.log(data);
// })

// fs.readFileSync(path.join(__dirname,"Files",'sample.txt'))
// const express = require("express");
// const app = express();
// require("dotenv").config();

// const courses = [
//   { id: 1, name: "Course 1" },
//   { id: 2, name: "Course 2" },
//   { id: 3, name: "Course 3" },
// ];

// app.get("/", (req, res) => {
//   res.send("Welcome to the homepage!"); // Send a welcome message for the root path
// });

// app.get("/api/courses/:id", (req, res) => {
//   res.json(courses); // Send the courses data as a JSON response for /api/courses
// });

// app.listen(process.env.SERVER, () => {
//   console.log("Server running at http://localhost:3000/");
// });

// console.log ("start Operation");

// function sleep(milliseconds){
    
//     console.log("operation is running");
//     setTimeout(()=>{
//         console.log("operation is done!");
//     },milliseconds)
    
// }

// sleep(10);

// console.log("do something else");


// function asyncTask(cb){
//     setTimeout(()=>{
//         cb(null, "this is data from server")
// },0);
// }
// asyncTask((error, data)=>{
//     if (error){
//         throw error;
//     }else{
//         console.log ("data",data);
//     }
// });


const asyncp = require("./asyncp");

const userLogin = () => {
  console.log("enter user name & pass");
  let userName = prompt("enter username");
  let password = prompt("enter password");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("performing use auten...");
      if (userName === "yash") {
        resolve("user Authenticated");
      } else {
        reject("authe... failed");
      }
    }, 1000);
  });
};
function goToHomePage(userAuthStatus) {
  return Promise.resolve(`goto homepage as: ${userAuthStatus}`);
}
userLogin()
  .then((response) => {
    console.log("vlidated");
    return goToHomePage(response);
  })
  .then((userAuthStatus) => {
    console.log(userAuthStatus);
  });
