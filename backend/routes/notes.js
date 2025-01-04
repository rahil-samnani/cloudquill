const express = require("express");
const router = express.Router();
const fetchUser = require('../middleware/fetchUser')
const Note = require('../models/Notes')
const { validationResult, check } = require('express-validator');


// Route 1
// Get all the notes of the user using: GET /api/notes/fetchallnotes. Login required
router.get("/fetchallnotes", fetchUser, async (req, res) => {

    const notes = await Note.find({ user: req.user.id })
    res.json(notes)
})


// Route 2
// Add a new note : POST /api/notes/addnote. Login required
router.post("/addnote", fetchUser, check("title").isLength({ min: 3 }).withMessage('Enter a valid title'), check("description").isLength({ min: 5 }).withMessage('Enter a valid description'), async (req, res) => {

    // if there are errors return bad request and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }

    try {
        const { title, description, tag } = req.body

        const note = new Note({
            title, description, tag, user: req.user.id
        })

        const savedNotes = await note.save()

        res.json(savedNotes)
    }
    catch (error) {
        console.error(error.message)
        res.status(500).json({ error: "Some Error Occured" })
    }
})


// Route 3
// Update an existing Note: PUT /api/notes/updatenote. Login required
router.put("/updatenote/:id", fetchUser, async (req, res) => {

    const { title, description, tag } = req.body
    //create a new note
    const newNote = {}
    if (title) { newNote.title = title }
    if (description) { newNote.description = description }
    if (tag) { newNote.tag = tag }

    //Find the note to be updated and update it
    try {
        let note = await Note.findById(req.params.id)
        if (!note) {
            return res.status(404).send("Not Found")
        }
        // allow updation if it belongs to user
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Authorized")
        }

        // assign newNote to existing note
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })

        res.json(note)
    }
    catch (error) {
        console.error(error.message)
        res.status(500).json({ error: "Some Error Occured" })
    }
})


// Route 4
// Delete a note using : DELETE /api/notes/deletenote/:id . Login required
router.delete("/deletenote/:id", fetchUser, async (req, res) => {
    try {
        //Find the note to be deleted
        let note = await Note.findById(req.params.id)
        if (!note) {
            return res.status(404).send("Not Found")
        }
        // allow deletion if it belongs to user
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Authorized")
        }

        //delete the found note
        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "success": "Note has been deleted" })
    }
    catch (error) {
        console.error(error.message)
        res.status(500).json({ error: "Some Error Occured" })
    }
})


module.exports = router;