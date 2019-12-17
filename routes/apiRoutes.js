const router = require("express").Router();

const notes = require("../db/notes");

router.get("/notes", function (req, res) {

    notes
        .getnotes()
        .then(notes => res.json(notes))

        .catch(err => res.status(500).json(err));  
});


router.post("/notes", function (req, res) {

    notes
        .postnotes()
        .then(notes => res.json(notes))

        .catch(err => res.status(500).json(err));  
});
router.delete("/notes/:id", function(req, res) {
    store
      .removeNote(req.params.id)
      .then(() => res.json({ ok: true }))
      .catch(err => res.status(500).json(err));
  });


module.exports = router;