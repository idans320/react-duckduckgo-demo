const { Router } = require("express");

const HISTORY_PATH = require("../shared/history_path")

const fs = require("fs")

const _ = require("lodash")

const bent = require("bent")

const getJSON = bent('json')

const SEARCH_CLIENT_URL = require("../shared/search_client_url")

var route = Router();


route.post("/history/add", (req,res) => {
    let history_value = req.body.value
    if (history_value){
    fs.readFile(HISTORY_PATH, (err,data) => {
            if (!err){
                let currentHistory = JSON.parse(data)
                if (!(currentHistory.map((o) => o.value).includes(history_value)))
                    currentHistory.push({"id": currentHistory.length ,"value":history_value});
                fs.writeFile(HISTORY_PATH,JSON.stringify(currentHistory),(err) => {});
                res.sendStatus(201)
            }
            else{
                res.sendStatus(500)
            }
        })
    }
    else{
        res.sendStatus(404)
    }
})

route.get("/history", (req,res) => {
    let history_value = req.body.value
    fs.readFile(HISTORY_PATH, (err,data) => {
        res.send(data)
    })
})


route.get("/search", async (req,res) => {
    let query = req.query.q
    let data = await getJSON(SEARCH_CLIENT_URL + "?q=" + query + "&format=json")
    let topics = _.flatMap(data.RelatedTopics,(t) => t.FirstURL? t : t.Topics)
    let result = { 
        "Heading" : data.Heading,
        "AbstractURL" : data.AbstractURL,
        "RelatedTopics" : _.chunk(topics,4)
    }
    res.send(result)
})


route.get("/", (req,res) => {
    res.send("ok.")
})

module.exports = route;

