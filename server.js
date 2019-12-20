const express = require("express");

const util = require("util");
const fs = require("fs");
 

const app = express();

var PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "public/index.html"));
});
 


app.get("/notes", function (req, res) {

notes
        .getnotes()
        .then(notes => res.json(notes))

        .catch(err => res.status(500).json(err));
});


app.post("/notes", function (req, res) {

    notes
        .postnotes()
        .then(notes => res.json(notes))

        .catch(err => res.status(500).json(err));
});
app.delete("/notes/:id", function (req, res) {
    store
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});
app.put("/notes/:id", function (req, res) {
    store
        .updateNOte(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});



//call the server

app.listen(PORT, () => console.log("Listening on PORT:" + PORT ));
