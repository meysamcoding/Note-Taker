const express = require("express");
const store = require("./db/store");
var path = require("path");
 
 
const app = express();

var PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
 


app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "/public/notes.html"));
    console.log("server side1", res );
});

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/public/index.html"));
    console.log("server side2", res );
});

 



app.get("/api/notes", function (req, res) {

store
        .getNotes()
        .then(notes => res.json(notes))

        .catch(err => res.status(500).json(err));
});


app.post("/api/notes", function (req, res) {
    console.log("server side6", res );
    store
        .addNote(req.body)
        .then(note => res.json(note))

        .catch(err => res.status(500).json(err));
});
app.delete("/api/notes/:id", function (req, res) {
    store
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});
 



//call the server

app.listen(PORT, () => console.log("Listening on PORT:" + PORT ));
