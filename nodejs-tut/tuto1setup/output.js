// const x="1";
// const y= "2";

// console.log(x,y);

// console.log("my name is %s and my age is %d",'Yash', 26);
// console.clear();
// console.count("yash");
// console.count("yash");
// console.count("Aayushi");

const progress= require ("progress");
const ProgressBar = require("progress/lib/node-progress");

const bar= new ProgressBar("downloading [:bar] :rate/bps :percent :etas",{
    total:20,
});

const timer =setInterval(()=>{
    bar.tick();
    if (bar.complete){
        clearInterval(timer);
    }
},100)
const chalk= require('chalk');
console.log(chalk.red("trial"));