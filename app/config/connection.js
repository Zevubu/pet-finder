let mysql = require("mysql")

let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    port: 3306,
    password:"",
    database: "petFinder_db"
})

connection.connect(function(err){
    console.log(`connected to database`)
})

connection.query("SELECT * FROM found",function(err,data){
    console.table(data)
})


module.exports = connection