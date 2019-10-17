require("dotenv").config();
//Require mysql npm package to create a connection to the mysql database.
var mysql = require("mysql");
let keys = require('../../keys.js')

let pw = keys.password.dbpw



if (process.env.JAWSDB_URL) {
    //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  }
  
  else {
    //else use localhost database for local development.
    //MySQL password is passed into connection.js from the .env file using the dotenv npm package.
  
    var connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: pw,
      database: "petFinder_db"
    });
    
  }





connection.connect(function(err){
    if(err)throw err;
    console.log(`Connected to database`)
})


module.exports = connection
