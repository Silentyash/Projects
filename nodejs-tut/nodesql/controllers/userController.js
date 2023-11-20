const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const pool = require("../config/dbConnection");
const storedProcedures = require("../sp/storedprocedures");


// Register UserActivation
// POST /api/users/Register
// Public

const checkUserAvailaible = async (emailid) => {
    console.log("checkuser",emailid)
  const [checkResult] = await pool.query(
    storedProcedures.searchUserSP,
    [emailid],
    true
  );
  return checkResult;
};

const registerUser=(expressAsyncHandler(async(req,res)=>{
    const { username, email, password } = req.body;
     if (!username || !email || !password) {
       res.status(400);
       throw new Error("all fields are mandatory");
     }
      const checkResult = await checkUserAvailaible(req.body.email);

      if (checkResult[0].length !== 0) {
        res.status(404).json({ error: "User's email is already registered" });
      } else {
        const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const ifEmailCorrect = await email.match(emailregex);
        const passwordRegex =
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        const ifpasswordCorrect = await password.match(passwordRegex);
        if (!ifpasswordCorrect || !ifEmailCorrect) {
          res.status(400);
          throw new Error(
            " Email or password not valid, please enter valid email and  please enter password as per policy at least one uppercase letter, one lowercase letter, one number, one special character, and a minimum length of 8 characters"
          );
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const [results] = await pool.query(
            storedProcedures.registerUserSP,[
            username, email, hashedPassword
            ],
            true
        );
        const checkResult = await checkUserAvailaible(req.body.email);

      if (checkResult[0].length !== 0) {
        res.status(202).json({ message: "User is registered" });

      } else {
        res.status(404).json({ error: "User is not registered" });
      }
      }
}))


const loginUser = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if ( !email || !password) {
      res.status(400);
      throw new Error("all fields are mandatory");
    }
    const checkResult = await checkUserAvailaible(req.body.email);
    console.log("checkResult", checkResult);
    const storedPassword= checkResult[0][0].password;

    if (checkResult[0].length === 0) {
      res.status(404).json({ error: "Email id is incorrect or user is not registered" });
    };
    const checkPassword= await bcrypt.compare(password,storedPassword)
    if (checkPassword) {
      const accessToken = jwt.sign(
        {
          user: {
            username: checkResult[0][0].username,
            email: checkResult[0][0].email,
            id: checkResult[0][0].id,
          },
        },
        process.env.SECRET_ACCESS_TOKEN,
        { expiresIn: "30m" }
      );
      res.status(200).json(accessToken);
    } else {
      res.status(401);
      throw new Error("email or password is not valid");
    }

    
});  


const currentUser = expressAsyncHandler(async (req, res) => {
  res.json(req.user);
});




module.exports = { registerUser, loginUser, currentUser };