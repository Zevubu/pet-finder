let path = require("path")


module.exports = function(app){
    
    app.get("/",function(req,res){
    res.sendFile(path.join(__dirname +"/../view/index.html"))

    app.get("/reportfound",function(req,res){
        res.sendFile(path.join(__dirname + "/../view/reportfound.html"))
    })

    app.get("/reportlost",function(req,res){
        res.sendFile(path.join(__dirname + "/../view/reportlost.html"))
    })

    app.get("/viewfound",function(req,res){
        res.sendFile(path.join(__dirname + "/../view/viewfound.html"))
    })

    app.get("/viewlost",function(req,res){
        res.sendFile(path.join(__dirname + "/../view/viewlost.html"))
    })
})

}