const route = require('express').Router();
const { json, Router } = require('express');
const fs = require("fs");
const { v4: uuidv4 } = require('uuid')

// Created a route that gets the data of user which will then parse into a JSON object
route.get("/api/notes", (req, res) => {
    const data = fs.readFileSync(".develop/db/db.json");
    res.json(JSON.parse(data));
});

// After data is received, created a post route which will include everything in the body.
route.post("/api/notes", (req, res) => {
    // This is the package request
    const writeNote = req.body;
    // Parses JSON and allows us to grab object
    const note = JSON.parse(fs.readFileSync(".develop/db/db.json"));

    writeNote.id = uuid;
    note.push(writeNote);
    //Writes stringifed note into our db folder.json
    fs.writeFileSync(".develop/db/db.json", JSON.stringify(note));
    res.json(note)
    //Updates notes
});

// Need a way to delete note. 
route.delete("/api/notes:id", (req,res) => {
    let note = JSON.parse(fs.readFileSync(".develop/db/db.json"));
    const deleteNote = (req.params.id).toString();

    //
    note=note.filter(removeNote => {
        return removeNote.id != deleteNote
    })
    //
    fs.writeFileSync(".develop/db/db.json", JSON.stringify(note));
    res.json(note);
})

module.exports = route