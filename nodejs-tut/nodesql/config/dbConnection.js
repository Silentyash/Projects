const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 10, // You can adjust the connection limit based on your requirements
});

module.exports = pool;


























// const connectDb = async()=>{
//   try {
//     mysql.createConnection({
//       host: process.env.HOST,
//       user: process.env.USER,
//       password: process.env.PASSWORD,
//       database: process.env.DATABASE,
//     });
//   } catch (err) {
//     console.log(err);
//     process.exit(1);
//   }
// }
// module.exports=connectDb
