import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/noteContext'

export default function AddNotes() {

    const [note,setNote] = useState({title : "", description : "", tag : ""})

    const context = useContext(NoteContext)
    const { addNote } = context
    const handleClick = (e) => {
        e.preventDefault()
        addNote(note)
        document.getElementById('title').value = ''
        document.getElementById('description').value = ''
        document.getElementById('tag').value = ''
    }

    const handleChange = (e) => {
        setNote({...note,[e.target.name] : e.target.value })
    }

    return (
        <>
        <section className="wrapper-form">
            <h2 className="comment h2">Create a Note</h2>
            <form className='form'>
                <div className="left-form">
                    <input onChange={handleChange} className='input' type="text" name="title" id="title" placeholder="Note Title" />
                    <input onChange={handleChange} className="input email-input" type="text" name="tag" id="tag" placeholder="Tag" />
                    <button  disabled={note.title.length<5 || note.description.length<5} type="submit"  className='button' onClick={handleClick}>Add Note</button>
                </div>
                <div className="right-form">
                    <textarea onChange={handleChange} className='textarea' name="description" id="description" rows="10" placeholder="Note Description ..."></textarea>
                </div>
            </form>
        </section>
        </>

        
    )
}
