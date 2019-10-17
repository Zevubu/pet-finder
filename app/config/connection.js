require("dotenv").config();
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





  connection.connect(function(err) {
    //If there is an error when connecting to the database, log the error to the console.
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    //If a database connection is established, log the database thread number.
    console.log("connected as id " + connection.threadId);
  });
  


module.exports = connection
