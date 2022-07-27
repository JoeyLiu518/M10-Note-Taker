const route = require('express').route();
const path = require("path");

route.get('/', function (req, res) {
    res.sendFile(path.join(_dirname,"..develop/public/index.html"))
})

route.get('/notes', (req, res) => {
    res.sendFile(path.join(_dirname,"..develop/public/notes.html"))
})

module.exports = route