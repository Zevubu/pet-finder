let connection = require("../config/connection.js")

let model = {

searchLost : function(table,cb){

    let queryURL = `SELECT * FROM ${table}`

    connection.query(queryURL,function(err,data){
        if (err) throw err
        cb(data)
    })

},

searchFound : function(table,cb){

    let queryURL = `SELECT * FROM ${table}`

    connection.query(queryURL,function(err,data){
        if (err) throw err
        cb(data)
    })

},

addLost : function(table,vals,cb){
    let queryURL = `INSERT INTO ${table} (user_name, user_email, user_phone, user_address, user_city, user_state, user_zip, pet_photo, pet_name, pet_type, pet_color, pet_description, pet_latlng) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?);`

    connection.query(queryURL,vals,function(err,data){
        if(err) console.log(err)
        
        cb(data)

    })

    
},

addFound : function(table,vals,cb){
    
    let queryURL = `INSERT INTO ${table} (user_name, user_email, user_phone, user_address, user_city, user_state, user_zip, pet_photo, pet_name, pet_type, pet_color, pet_description, pet_latlng) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?);`

    connection.query(queryURL,vals,function(err,data){
        if(err) console.log(err)
        
        cb(data)

    })
  
}




}




module.exports = model

