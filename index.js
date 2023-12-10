//Contains only the connection to port part
const express = require('express')
const app = express()
const cors = require('cors')

var morgan = require('morgan')
app.use(morgan('dev'))

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
const mysql = require('mysql2');

// create a new MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'PASSWORD', 
  database: 'E'
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