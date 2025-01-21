import React, { useContext, useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NoteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import createnote from '../images/createnote.png';

export default function Home(props) {
  const ref = useRef(null);
  const context = useContext(NoteContext);
  const { notes, getNotes, editNote, mode } = context;
  const navigate = useNavigate();
  const [note, setNote] = useState({ id: '', title: '', description: '', tag: '' });

  useEffect(() => {
    if (localStorage.getItem('token') !== 'null') {
      getNotes();
    } else {
      navigate('/login');
    }
  }, [getNotes, navigate]);

  const handleClick = (e) => {
    editNote(note);
    ref.current.click();
    props.showAlert('Note edited successfully', 'success');
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  // Group notes by tag
  const groupedNotes = notes.reduce((acc, note) => {
    const tag = note.tag || 'Untitled';
    if (!acc[tag]) acc[tag] = [];
    acc[tag].push(note);
    return acc;
  }, {});

  return (
    <>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{ display: 'none' }}
      ></button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ overflowX: 'hidden' }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit your note
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="form-floating mb-3">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  value={note.title}
                  name="title"
                />
                <label htmlFor="floatingInput">Note Title</label>
              </div>
              <div className="form-floating">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  value={note.tag}
                  name="tag"
                />
                <label htmlFor="floatingPassword">Tag</label>
              </div>
              <div className="form-floating my-3">
                <textarea
                  onChange={handleChange}
                  className="form-control"
                  value={note.description}
                  id="floatingTextarea"
                  name="description"
                ></textarea>
                <label htmlFor="floatingTextarea">Note Description</label>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button
                disabled={note.title.length < 5 || note.description.length < 5}
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className={`m-3 my-4 text-${mode === 'light' ? 'dark' : 'light'}`}>Your Notes</h2>
        {Object.keys(groupedNotes).length === 0 ? (
          <div className="container no-notes my-5">
            <h4>No Notes to display</h4>
            <h6>
              To add notes click <Link to="/createnote">here.</Link>
            </h6>
          </div>
        ) : (
          Object.entries(groupedNotes).map(([tag, tagNotes]) => (
            <div key={tag} className="my-5">
              <h5 className={`text-${mode === 'light' ? 'dark' : 'light'} my-4`}>{tag}</h5>
              <div className="row my-3">
                {tagNotes.map((note) => (
                  <NoteItem
                    showAlert={props.showAlert}
                    key={note._id}
                    note={note}
                    setNote={setNote}
                  />
                ))}
              </div>
            </div>
          ))
        )}
        <Link
          className="col col-md-3 align-self-center"
          to="/createnote"
          style={{ minHeight: '280px', minWidth: '180px' }}
        >
          <h5 className={`text-${mode === 'light' ? 'dark' : 'light'} my-4`}>Create a note</h5>
          <div
            className="create-note card d-flex justify-content-center align-items-center"
            style={{
              height: '280px', width : '308px' ,
              backgroundColor: `${mode === 'light' ? '#F0F1F2' : '#3f3f3f'}`,
            }}
          >
            <img src={createnote} alt="" style={{ width: '50px', height: '50px' }} />
            <p
              className={`my-2 text-${mode === 'light' ? 'dark' : 'light'}`}
              style={{ textDecoration: 'none' }}
            >
              Create a Note
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
