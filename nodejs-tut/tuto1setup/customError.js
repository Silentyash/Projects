// const promise= new Promise((resolve,reject)=>{
//     if(false){
//         resolve(doSomething());
//     }else {reject(doSomething())}
// });

// promise.then((val)=>{
//     console.log(val);

// }).catch((error)=>{
//     console.log("error occured");
//     // console.log(error);
// });

function doSomething(){
    const data= fetch("http://localhost:300/api");
    console.log("I am from do something function") ;
    return data;
}

const someFunction=async()=>{
    try{
        await doSomething();

    }catch (err){
        throw new Error(err.message);
    }
};
someFunction();