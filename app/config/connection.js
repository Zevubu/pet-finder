let mysql = require("mysql");

let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    port: 3306,
    password: "Anamel!keth!s",
    database: "petFinder_db"
})

connection.connect(function(err){
    if(err)throw err;
    console.log(`Connected to database`)
})


module.exports = connection
