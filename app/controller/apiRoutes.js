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
        console.log(req.body)

        model.addLost("lost", [req.body.name, req.body.type, req.body.color,
        req.body.description, req.body.photo, req.body.email, req.body.phone],
            function(data) {
                res.json(data)
            })

    })


    app.post("/api/found", function(req, res) {
        console.log(req.body)

        model.addFound("found", [req.body.name, req.body.type, req.body.color,
        req.body.description, req.body.photo, req.body.email, req.body.phone],
            function(data) {
                res.json(data)
            })

    })



}



