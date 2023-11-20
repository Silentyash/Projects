const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken= asyncHandler(async(req,res,next)=>{
    let token;
    let authHeader= req.headers.authorization || req.headers.Authorization;

    if (authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        console.log(token)
        jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, (err, decoded)=>{
            if(err){
                res.status(401);
                throw new Error ("user is not authorized");

            }req.user=decoded.user;
            next();
        })
    } else{
        res.status(401);
        throw new Error("Invalid or missing token");
    }

});
module.exports= validateToken;