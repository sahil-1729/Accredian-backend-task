//Contains only the connection to port part
const express = require('express')
const app = express()
const cors = require('cors')
// const config = require('./utils/config')
// const mongoose = require('mongoose')
// const logger = require('./utils/logger')
// const app = require('./app')
// const middleware = require('./utils/middleware')
// const blogRouter = require('./controllers/paths(Blog)')

var morgan = require('morgan')
app.use(morgan('dev'))
// mongoose.set('strictQuery', false)
// mongoose.connect(config.MONGODB_URI)
// .then(response=>logger.info(`connected hai`))
// .catch(error=>logger.error(error))

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
// app.use('/api/blogs',blogRouter)

// app.get('/api/blogs', (request, response,next) => {
//   Blog
//     .find({})
//     .then(blogs => {
//       response.json(blogs)
//     })
// })
// app.get('/api/blogs/:id', (request, response,next) => {
//   Blog
//     .findById(request.params.id)
//     .then(blogs => {
//       response.json(blogs)
//     })
//   .catch(error=>next(error))
// })


// app.post('/api/blogs', (request, response, next) => {
//   const body = request.body
//   const blog = new Blog(request.body)

//   logger.info(`Here's the result`,blog)
//   if(blog.title === undefined){
//     response.status(400).json({error : 'empty data'})
//   }
//   else{    
//   blog
//   .save()
//   .then(result => {
//     response.status(201).json(result)
//   })
//   .catch(error=>next(error))
//   }
// })

// const errorHandler = (error,request,response,next) => {
//   logger.error(error.message)
//   if(error.name === 'CastError'){
//     response.status(400).json({ error : 'malformated id'})
//   }
//   next(error)
// }
// const unknown = (request,response) => {
//   response.status(404).json({ error : `Page not found`})
// }
// app.use(middleware.unknown)
// app.use(middleware.errorHandler)
const mysql = require('mysql2');

// create a new MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pass@123',
  database: 'database_name'
});
// connect to the MySQL database
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
  } else {
    console.log('Connected to MySQL database!');
  }
});

// close the MySQL connection
connection.end();
app.listen(8080, () => {
  console.log(`Server running on port 8080`)
})