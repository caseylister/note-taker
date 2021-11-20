const router = require('express').Router();
const {notes} = require('../../db/db.json')
const { newNote, deleteNote } = require('../../lib/notes');

// Read db.json- return all saved notes as JSON
router.get('/notes', (req, res) => {
    const saved = notes;
    res.json(saved);
});


// POST route to add new note
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = newNote(req.body, notes);
    res.json(note);
});

// DELETE route to delete note by id
router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
});


module.exports = router;