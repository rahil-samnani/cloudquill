import React, { useContext } from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import NoteContext from '../context/notes/noteContext'

export default function Footer() {

    const context = useContext(NoteContext)
    const { mode } = context

    return (
        <>
        <hr className='hr-three-reverse'/>
        <footer style={{backgroundColor:`${mode==="light"?"#F0F1F2":"#2f2f2f"}`}}>
            <div className="container footer" >
                <div className="row mb-4 align-items-center">
                    <div className="col-md-3 mb-3 mb-md-0">
                        <a
                            href="/"
                            className="d-flex align-items-center text-decoration-none"
                        >
                            <img
                                src={logo}
                                alt="Catering Logo"
                                width={40}
                                height={40}
                                className="me-2"
                            />
                            <span className="fs-4" style={{color:"#3DC4E2"}}>CloudQuill</span>
                        </a>
                    </div>
                    <div className="col-md-6 mb-3 mb-md-0">
                        <ul className="nav justify-content-center">
                            <li className="nav-item" >
                                <Link to="/" className="nav-link px-2  " style={{color:`${mode==="light"?"#000":"#fff"}`}}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link px-2  " style={{color:`${mode==="light"?"#000":"#fff"}`}}>
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link px-2  " style={{color:`${mode==="light"?"#000":"#fff"}`}}>
                                    About US
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link px-2  " style={{color:`${mode==="light"?"#000":"#fff"}`}}>
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 py-4">
                        <h5 style={{color:`${mode==="light"?"#000":"#fff"}`}}>About Us</h5>
                        <p className="  footer-about" style={{color:`${mode==="light"?"#000":"#fff"}`}}>
                            CloudQuill lets you store your notes easily in a cloud, so you can access it from anywhere around the world at ay time.
                        </p>
                    </div>
                    <hr className="my-4" />
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className=" " style={{color:`${mode==="light"?"#000":"#fff"}`}}>© CloudQuill All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}
