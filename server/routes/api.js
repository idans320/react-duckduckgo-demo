const { Router } = require("express");

const HISTORY_PATH = require("../shared/history_path")

const fs = require("fs")

var route = Router();


route.post("/history/add", (req,res) => {
    let history_value = req.body.value
    if (history_value){
    fs.readFile(HISTORY_PATH, (err,data) => {
            if (!err){
                let currentHistory = JSON.parse(data)
                currentHistory.push({"value":history_value})
                fs.writeFile(HISTORY_PATH,JSON.stringify(currentHistory),(err) => {})
                res.sendStatus(200)
            }
            else{
                res.sendStatus(500)
            }
        })
    }
    else{
        res.sendStatus(400)
    }
})

route.get("/history", (req,res) => {
    let history_value = req.body.value
    fs.readFile(HISTORY_PATH, (err,data) => {
        res.send(data)
    })
})

route.get("/", (req,res) => {
    res.send("ok.")
})

module.exports = route;

