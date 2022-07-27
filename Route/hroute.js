const route = require('express').Router();
const path = require("path");

route.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,".Develop/public/index.html"))
})

route.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,".Develop/public/notes.html")) 
})

module.exports = route