import React, { useContext, useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import NoteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'

export default function Home() {

  const ref = new useRef(null)

  const context = useContext(NoteContext)
  const { notes, getNotes, editNote } = context

  const [note, setNote] = useState({ id: "", title: "", description: "", tag: "" })


  useEffect(() => {
    getNotes()
  })

  const handleClick = (e) => {
    editNote(note)
    ref.current.click()
  }

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
    console.log(note)
  }

  return (
    <>
      <button ref={ref} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{display:"none"}}></button>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ overflowX: "hidden" }}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Edit your note</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="form-floating mb-3">
                <input onChange={handleChange} type="text" class="form-control" id="floatingInput" value={note.title} name='title' />
                <label for="floatingInput">Note Title</label>
              </div>
              <div class="form-floating">
                <input onChange={handleChange} type="text" class="form-control" id="floatingPassword" value={note.tag} name='tag' />
                <label for="floatingPassword">Tag</label>
              </div>
              <div class="form-floating my-3">
                <textarea onChange={handleChange} class="form-control" value={note.description} id="floatingTextarea" name='description'></textarea>
                <label for="floatingTextarea">Note Description</label>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.title.length<5 || note.description.length<5} type="button" class="btn btn-primary" onClick={handleClick}>Update Note</button>
            </div>
          </div>
        </div>
      </div>

      <div >
        <h2 className='m-3 my-4'>Your Notes</h2>
        {notes.length === 0 && <div className="container no-notes">
          <h4>No Notes to display</h4>
          <h6>To add notes click <Link to="/createnote">here.</Link></h6>
        </div>}
        {notes.length !== 0 && <div className="row my-5">
          {notes.map((note) => {
            return <NoteItem key={notes._id} note={note} setNote={setNote} />
          })}
        </div>}
      </div >
    </>
  )
}
