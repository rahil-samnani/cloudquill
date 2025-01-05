import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'

export default function NoteItem(props) {
    const context = useContext(NoteContext)
    const { deleteNote } = context
    const { note, setNote } = props

    const handleDelete = () => {
        deleteNote(note._id)
    }

    const handleEdit = () => {
        setNote({ id: note._id, title: note.title, description: note.description, tag: note.tag })
        console.log(note)
    }

    return (
        <div className="col col-md-3 my-3">
            <div className="card" style={{ minHeight: "250px" }}>
                <div class="position-absolute badge rounded-pill bg-primary" style={{top:"-10px",left:"5px"}}>
                    <p style={{fontSize : "13px", margin:"0px"}}>{note.tag}</p>
                    <span class="visually-hidden">Tag</span>
                </div>
                <div className="card-body" style={{ marginTop: "14px" }}>

                    <div className='d-flex'>
                        <h5 className="card-title" style={{ width: "79%" }}>{note.title}</h5>
                        <div className='align-self-flex-end' style={{ width: "50px" }}>
                            <i className="fa-solid fa-trash" onClick={handleDelete}></i>
                            <i className="fa-solid fa-pen mx-2" onClick={handleEdit} data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                        </div>
                    </div>
                    <hr className='hr-note' />
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}
