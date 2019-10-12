let model = require("../model/model.js")


module.exports = function (app) {

// Needs to be modified once determined exact values needed
    app.get("/api/lost", function(req, res) {

        model.searchLost("lost", function(data) {

            res.json(data)
        })

    })

    app.get("/api/found", function(req, res) {
        model.searchFound("found", function(data) {
            res.json(data)
        })
    })

    app.post("/api/lost", function(req, res) {
       
        

        model.addLost("lost", [req.body.userName, req.body.userEmail, req.body.userPhone,
        req.body.userAddress, req.body.userCity, req.body.userState, req.body.userZip, req.body.petPhoto,
        req.body.petName, req.body.petType, req.body.petColor, req.body.petDescription, req.body.petLatLng],
            function(data) {
                res.json(data)
            })

    })


    app.post("/api/found", function(req, res) {
        

        model.addFound("found", [req.body.userName, req.body.userEmail, req.body.userPhone,
            req.body.userAddress, req.body.userCity, req.body.userState, req.body.userZip, req.body.petPhoto,
            req.body.petName, req.body.petType, req.body.petColor, req.body.petDescription, req.body.petLatLng],
            function(data) {
                res.json(data)
            })

    })



}



