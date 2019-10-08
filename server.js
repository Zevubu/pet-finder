let port = 5050
let express = require("express")
let app = express()

// let connection = require("./app/config/connection.js")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/app/css"));
app.use(express.static(__dirname + "/app/javascript"));
app.use(express.static(__dirname + "/app/images"));



// require("./app/controller/apiRoutes.js")(app);
require("./app/controller/htmlRoutes.js")(app)

app.listen(port,function(){
    console.log(`Connect to http://localhost:${port}`)

})