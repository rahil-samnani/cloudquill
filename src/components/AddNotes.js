import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/noteContext'

export default function AddNotes(props) {

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const context = useContext(NoteContext)
    const { addNote } = context
    const handleClick = (e) => {
        e.preventDefault()
        addNote(note)
        document.getElementById('title').value = ''
        document.getElementById('description').value = ''
        document.getElementById('tag').value = ''
        props.showAlert("Note added successfuly","success")
    }

    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <section className="wrapper-form">
                <h2 className="comment h2">Create a Note</h2>
                <form style={{width: "100%"}}>
                    <div className='form'>
                        <div className="left-form">
                            <input onChange={handleChange} className='input' type="text" name="title" id="title" placeholder="Note Title" />
                            <input onChange={handleChange} className="input email-input" type="text" name="tag" id="tag" placeholder="Tag" />
                        </div>
                        <div className="right-form">
                            <textarea onChange={handleChange} className='textarea' name="description" id="description" rows="10" placeholder="Note Description ..."></textarea>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className='button' onClick={handleClick}  style={{maxWidth : "400px"}}>Add Note</button>
                    </div>
                </form>
            </section>
        </>


    )
}
