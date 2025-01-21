import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'

export default function NoteItem(props) {
    const context = useContext(NoteContext)
    const { deleteNote, mode } = context
    const { note, setNote } = props

    const handleDelete = () => {
        deleteNote(note._id)
        props.showAlert("Note deleted successfuly", "success")
    }

    const handleEdit = () => {
        setNote({ id: note._id, title: note.title, description: note.description, tag: note.tag })
    }

    return (
        <div className="col col-md-3 my-3">
            <div className="card" style={{ minHeight: "280px", minWidth: "310px" , backgroundColor: `${mode === "light" ? "#F0F1F2" : "#3f3f3f"}`}}>
                    <div class="position-absolute badge rounded-pill" style={{ top: "-10px", left: "5px", backgroundColor: "#3DC4E2" }}>
                        <p style={{ fontSize: "13px", margin: "0px" }}>{note.tag}</p>
                        <span class="visually-hidden">Tag</span>
                    </div>
                    <div className="card-body" style={{ marginTop: "14px" , backgroundColor: `${mode === "light" ? "#F0F1F2" : "#3f3f3f"}`}}>
                        <div className='d-flex flex-wrap'>
                            <h5 className={`card-title text-${mode === 'light' ? 'dark' : 'light'}`} style={{ width: "79%", paddingRight: "10px" }}>{note.title}</h5>
                            <div className='align-self-flex-end ' style={{ width: "50px" }}>
                                <i style={{color : `${mode === 'light' ? 'black' : '#3DC4E2'}`}} className="fa-solid fa-trash" onClick={handleDelete}></i>
                                <i style={{color : `${mode === 'light' ? 'black' : '#3DC4E2'}`}} className="fa-solid fa-pen mx-2" onClick={handleEdit} data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                            </div>
                        </div>
                        <hr className='hr-note' />
                        <p className={`card-text text-${mode === 'light' ? 'dark' : 'light'}`} style={{ whiteSpace: 'pre-wrap' }}>{note.description}</p>
                    </div>
            </div>
        </div>
    )
}
