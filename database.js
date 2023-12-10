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
async function a () {

    const result = await pool.query("select * from users")
    console.log(result[0])
   
    console.log("executed")
}
a();