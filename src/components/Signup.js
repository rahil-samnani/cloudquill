import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
import NoteContext from '../context/notes/noteContext'


export default function Signup(props) {

    const navigate = useNavigate()

    const context = useContext(NoteContext)
    const { mode } = context

    const [credential, setCredential] = useState({ name: "", email: "", password: "" })

    const handleChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("https://cloudquill.vercel.app/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credential.name, email: credential.email, password: credential.password })
        })
        const json = await response.json()
        if (json.success) {
            localStorage.setItem('token', json.authToken)
            navigate("/")
            props.showAlert("Account created Successful", "success")
        }
        else {
            props.showAlert("Invalid Credentials Enterd", "danger")
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh", width: "100%", backgroundColor: `${mode==="light"?"#F0F1F2":"#171717"}` }}>
            <div className=" Lflex-r Lcontainer border border-3 rounded">
                <div className="Lflex-r Llogin-wrapper">
                    <div className="Llogin-text" style={{backgroundColor: `${mode==="light"?"#F0F1F2":"#171717"}`}}>
                        <div className="Llogo">
                            <span><img src={logo} alt="cloudquill" style={{ width: "50px", height: "50px" }} /></span>
                            <span className={`text-${mode==='light'?'dark':'light'}`}>CloudQuill</span>
                        </div>
                        <h1 className={`text-${mode==='light'?'dark':'light'}`}>Sign Up</h1>
                        <p className={`text-${mode==='light'?'dark':'light'}`}>It's not long before you embark on this journey! </p>

                        <form className=" Lflex-c" onSubmit={handleSubmit}>
                            <div className="Linput-box" >
                                <span className={`Llabel text-${mode==='light'?'dark':'light'}`}>Name</span>
                                <div className=" Lflex-r Linput" style={{backgroundColor: `${mode==="light"?"#F0F1F2":"#2f2f2f"}` }}>
                                    <input minLength={3} required onChange={handleChange} value={credential.name} name='name' className='LLinput' type="text" placeholder="eg. Rahil" style={{backgroundColor: `${mode==="light"?"#F0F1F2":"#2f2f2f"}`, color : `${mode==='light'?"black":"#3DC4E2"}` }} />
                                    <i style={{color : `${mode==='light'?"black":"#3DC4E2"}`}} className="fa-solid fa-user"></i>
                                </div>
                            </div>

                            <div className="Linput-box">
                                <span className={`Llabel text-${mode==='light'?'dark':'light'}`}>E-mail</span>
                                <div className=" Lflex-r Linput" style={{backgroundColor: `${mode==="light"?"#F0F1F2":"#2f2f2f"}` }}>
                                    <input required onChange={handleChange} value={credential.email} name='email' className='LLinput' type="text" placeholder="name@abc.com" style={{backgroundColor: `${mode==="light"?"#F0F1F2":"#2f2f2f"}`, color : `${mode==='light'?"black":"#3DC4E2"}` }}/>
                                    <i style={{color : `${mode==='light'?"black":"#3DC4E2"}`}} className="fas fa-at"></i>
                                </div>
                            </div>

                            <div className="Linput-box">
                                <span className={`Llabel text-${mode==='light'?'dark':'light'}`}>Password</span>
                                <div className="Lflex-r Linput" style={{backgroundColor: `${mode==="light"?"#F0F1F2":"#2f2f2f"}` }}>
                                    <input minLength={5} required onChange={handleChange} value={credential.password} name='password' className='LLinput' type="password" placeholder="8+ (a, A, 1, #)" style={{backgroundColor: `${mode==="light"?"#F0F1F2":"#2f2f2f"}`, color : `${mode==='light'?"black":"#3DC4E2"}` }}/>
                                    <i style={{color : `${mode==='light'?"black":"#3DC4E2"}`}} className="fas fa-lock"></i>
                                </div>
                            </div>

                            <input className="btns" type="submit" value="Create an Account" />
                            <span className="Lextra-line">
                                <span className={`text-${mode==='light'?'dark':'light'}`}>Already have an account?</span>
                                <Link to="/login">Login</Link>
                            </span>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
