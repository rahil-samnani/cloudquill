import React, { useContext, useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NoteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'
import createnote from '../images/createnote.png'

export default function Home(props) {

  const ref = new useRef(null)

  const context = useContext(NoteContext)
  const { notes, getNotes, editNote , mode } = context

  const navigate = new useNavigate()

  const [note, setNote] = useState({ id: "", title: "", description: "", tag: "" })


  useEffect(() => {
    if(localStorage.getItem('token') !== 'null'){
      getNotes()
<<<<<<< HEAD
      console.log("Token found")
=======
>>>>>>> 7e38e4a8ba8062a44f6e6c4f01eeb97fe5ec3ebb
    }
    else{
      navigate("/login")
    }
    
  })

  const handleClick = (e) => {
    editNote(note)
    ref.current.click()
    props.showAlert("Note edited successfuly", "success")
  }

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
    console.log(note)
  }

  return (
    <>
      <button ref={ref} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ display: "none" }}></button>
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
              <button disabled={note.title.length < 5 || note.description.length < 5} type="button" class="btn btn-primary" onClick={handleClick}>Update Note</button>
            </div>
          </div>
        </div>
      </div>

      <div >
        <h2 className={`m-3 my-4 text-${mode==="light"?"dark":"light"}`}>Your Notes</h2>
        {notes.length === 0 && <div className="container no-notes">
          <h4>No Notes to display</h4>
          <h6>To add notes click <Link to="/createnote">here.</Link></h6>
        </div>}
        {notes.length !== 0 && <div className="row my-5">
          {notes.map((note) => {
            return <NoteItem showAlert={props.showAlert} key={notes._id} note={note} setNote={setNote} />
          })}
          <Link className="col col-md-3 align-self-center" to="/createnote" style={{ minHeight: "280px" , minWidth:"180px"}}>
            <div className=" create-note  card  d-flex justify-content-center align-items-center" style={{ height: "280px" , backgroundColor: `${mode==="light"?"#F0F1F2":"#3f3f3f"}`}}>
                <img src={createnote} alt="" style={{width : "50px", height: "50px"}}/>
                <p className={`my-2 text-${mode==='light'?'dark':'light'}`} style={{textDecoration:"none"}}>Create a Note</p>
            </div>  
          </Link>
        </div>}
      </div >
    </>
  )
}
