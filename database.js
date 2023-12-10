// import mysql from "mysql2"
const mysql = require("mysql2")
const dot = require("dotenv")
dot.config()
const pool = mysql.createPool({
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE
}).promise()

async function allUser () {

    const result = await pool.query("select * from users")
    // console.log("All users",result[0])
    const final = result[0]
   return final;
    // console.log("executed")
}
 async function getUser (id) {

    const result = await pool.query("select * from users where userid = ?",[id])
    console.log(result[0])
   
    console.log("executed")
}
getUser(9);
 async function createUser(val1,val2){
    
    const result = await pool.query(
        "INSERT INTO USERs (email,pass) VALUES (?,?)",[val1,val2]
    )
    console.log(result)
}
// createUser("SungJinwo222@gmail.com","Dec99jjiiqm")
getUser(10)
// pool.end()
module.exports ={
    createUser,
    getUser,
    allUser
}
