//Contains only the connection to port part
const express = require('express')
const app = express()
const cors = require('cors')
const {getEmail,getUser, createUser, allUser} = require("./database")
const bcrypt = require('bcrypt')

var morgan = require('morgan')
app.use(morgan('dev'))

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get("/users",async(request, response, next) => {
const result = await allUser()
console.log("The result",result)
response.status(200).json(result)
})
app.post("/login",async(request,response,next) => {
  const {email, pass} = request.body
  // console.log("email ",email)
  const id = await getEmail(email)
  console.log("id is ", id)
  if(id){
    response.status(401).json({"error" : "invalid email"})
  }
  const obj = await getUser(id)
  console.log(obj)
  const flag = await bcrypt.compare(pass,obj.pass)
  if(!flag){
    response.status(401).json({"error" : "invalid password"})
  }
  // console.log(result)
  response.status(200).json({"message" : "data stored"})

})
app.post("/register",async(error,request,response,next) => {
  const result = request.body
  console.log("register data",result)
  const {email, pass} = result
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(pass,saltRounds)
  if(!email.includes("@")){
    response.status(400).json({error : "email is invalid"})
  }
  if(!pass || !email){
    response.status(400).json({error : "email or password is incomplete"})
  }
  if(pass.length < 8){
    response.status(400).json({error : "password cannot be short"})
  }
  const value = await createUser(email,passwordHash)
  console.log("register message from sql ",value)
  response.status(200).json({"message" : `register data stored ${value}`})
})
app.listen(8080, () => {
  console.log(`Server running on port 8080`)
})