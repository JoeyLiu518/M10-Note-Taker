//Created what dependenices I wanted and what consts to use.

const express = require('express')
const PORT = process.env.PORT || 3000;
const app = express ();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(require('./route/aroute'));
app.use(require('./route/hroute'));

app.listen(PORT, () => console.log(`Sever is on. Go to http://localhost:${PORT}`))