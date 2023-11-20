const express= require("express")
const path = require("path");
const logger=require("morgan");
const multer= require("multer")
const upload= multer({dest:"./public/uploads"})


const app= express();

const router= express.Router();

const port= 5001;

//Built in middle ware
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use("/static", express.static(path.join(__dirname, "public")))


//application middleware
const loggerMiddleware=(req,res,next)=>{
    console.log(`${new Date()}---Request[${req.method}] [${req.url}]`);
    next();

};
app.use(loggerMiddleware)

//3rd party middleware
app.use(logger("combined"))


//router level middleware
app.use("/api/users", router)

const fakeAuth= (req,res,next)=>{
    const authStatus=true;
    if(authStatus){
        console.log("user authstatus:", authStatus)
        next();
    }else{
        res.status(404);
        throw new Error("User is  not authorized")
    }

}


const getuser = (req, res) => {
  res.json({ message: "get all user" });
};

const createuser=(req,res)=>{
    console.log("this the request body created byu client:", req.body)
    res.json({message:"create  new user"})
}

router.use(fakeAuth);
router.route("/").get(getuser).post(createuser);

//Error handler midddleware change html response to json
const errorHandler=(err,req,res, next)=>{
    const statusCode= res.statusCode ? res.statusCode:500;
    res.status(statusCode);
    switch(statusCode){
        case 401:
            res.json({
                title:" user not unauthorized",
                Message:err.message,
            })
            break;
        case 404:
            res.json({
              title: "Not Found",
              Message: err.message,
            });
            break;
        case 500:
            res.json({
              title: "Server Error",
              Message: err.message,
            });
            break;
    }

}

app.post("/upload", upload.single("image"), (req,res,next)=>{
    console.log(req.file, req.body);
    res.send(req.file)
},(err,req,res,next)=>{
    res.status(400).send({err: error.message})

})

app.all("*",(req,res)=>{
    res.status(404);
    throw new Error("Route not Found")
} )
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`server started on port ${port}`)
})