const express = require("express");
const path = require("path")
const api = require("./routes/api")
const cors = require('cors');

const app = express(); // create express app

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(cors());
app.options('*', cors());

app.use(express.static(path.join(__dirname, "..", "build")));

app.use("/api",api)

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});