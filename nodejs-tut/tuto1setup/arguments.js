const minimist= require('minimist')
const argNew= minimist(process.argv.slice(2));
console.log(argNew.name);
// const argument = require("./arguments");
// process.argv.forEach((val,index)=>{
//     console.log(`${index}: ${val}`);
// });

