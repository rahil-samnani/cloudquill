import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
        <hr className='hr-three-reverse'/>
        <footer>
            <div className="container footer">
                <div className="row mb-4 align-items-center">
                    {/* Left side - Logo */}
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
                            <span className="fs-4 text-dark">CloudQuill</span>
                        </a>
                    </div>
                    {/* Center - Navigation */}
                    <div className="col-md-6 mb-3 mb-md-0">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <Link to="/" className="nav-link px-2 text-muted">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link px-2 text-muted">
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link px-2 text-muted">
                                    About US
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link px-2 text-muted">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Right side - About text */}
                    <div className="col-md-3 py-4">
                        <h5 className="text-dark">About Us</h5>
                        <p className="text-muted footer-about">
                            CloudQuill lets you store your notes easily in a cloud, so you can access it from anywhere around the world at ay time.
                        </p>
                    </div>
                    {/* Social Media Icons */}
                    <div className="row mb-4">
                        <div className="col-12 text-center">
                            <a href="/" className="text-muted me-3">
                                <i className="bi bi-facebook" />
                                <span className="visually-hidden">Facebook</span>
                            </a>
                            <a href="/" className="text-muted me-3">
                                <i className="bi bi-instagram" />
                                <span className="visually-hidden">Instagram</span>
                            </a>
                            <a href="/" className="text-muted">
                                <i className="bi bi-twitter" />
                                <span className="visually-hidden">Twitter</span>
                            </a>
                        </div>
                    </div>
                    {/* Horizontal line */}
                    <hr className="my-4" />
                    {/* Copyright text */}
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="text-muted">© CloudQuill All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}
