import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {

    const host = "https://cloudquill.vercel.app"
    const [notes,setNotes] = useState([])
    const [mode, setMode] = useState('light')


    //Fetch all notes
    const  getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`,{
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            }
        })
        const json = await response.json()
        setNotes(json)
    }


    //Add a note
    const addNote = async ({title,description,tag}) => {
        const response = await fetch(`${host}/api/notes/addnote`,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
            body : JSON.stringify({title , description, tag})
        })
        const json = await response.json()
    }

    //Delete a Note
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
            method : 'DELETE',
            headers : {
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            }
        })
        const json = await response.json()
    }

    //Edit a Note
    const editNote = async (note) => {
        const {id, title ,description, tag} = note

        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
            body : JSON.stringify({title , description, tag})
        })
        const json = await response.json()
    }

    return (
        <NoteContext.Provider value={{ notes , setNotes , addNote , deleteNote , editNote, getNotes , mode , setMode}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
