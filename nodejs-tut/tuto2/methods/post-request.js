const requestBodyparser=require("../util/body-parser");  //importing parser.
const crypto= require("crypto")                         //for creating uuid
const writeToFIle= require("../util/write-to-file")


module.exports = async(req, res) => {
    if (req.url==="/api/movies"){
     try{
        let body= await requestBodyparser(req);
        console.log("Request Body:", body);
        body.id= crypto.randomUUID();
        req.movies.push(body);
        writeToFIle(req.movies);
        res.writeHead(201, {"Content-Type":"application/json"})
        res.end();


     }catch(err){
        console.log(err);
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            title: "Validation failed",
            message: "Request body is not valid",
          })
        );
    }}else{
    
    res.writeHead(404, {"Content-Type": "application/json"});
    res.end(
      JSON.stringify({ title: "Not Found", message: "Route is not found" })
    );
}



};