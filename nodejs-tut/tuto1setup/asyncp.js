// const asyncp = require("./asyncp");

// const userLogin = () => {
//   console.log("enter user name & pass");
//   let userName = prompt("enter username");
//   let password = prompt("enter password");

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("performing use auten...");
//       if (userName === "yash") {
//         resolve("user Authenticated");
//       } else {
//         reject("authe... failed");
//       }
//     }, 1000);
//   });
// };
// function goToHomePage(userAuthStatus) {
//   return Promise.resolve(`goto homepage as: ${userAuthStatus}`);
// }
// userLogin()
//   .then((response) => {
//     console.log("vlidated");
//     return goToHomePage(response);
//   })
//   .then((userAuthStatus) => {
//     console.log(userAuthStatus);
//   });


// Async Await
  const userLogin = () => {
    console.log("write userName and password");
    let userName = prompt("enter userName");
    let password = prompt("enter password");

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("performing authentication...");
        if (userName && password === "yash") {
          resolve("user authenticated");
        } else {
          reject("authentication failed!!!");
        }
      }, 1000);
    });
  };
  function goToHomepage(userAuthStatus) {
    return Promise.resolve(`go To Homepage :${userAuthStatus}`);
  }

  async function performTask() {
    try {
      const response = await userLogin();
      console.log("validated user");
      const userAuthStatus = await goToHomepage(response);
      console.log(userAuthStatus);
    } catch (err) {
      console.log(err);
    }
  }
  performTask();
