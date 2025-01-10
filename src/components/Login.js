import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
import NoteContext from '../context/notes/noteContext'


export default function Login(props) {

    let navigate = useNavigate()

    
    const context = useContext(NoteContext)
    const { mode } = context

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let handleEmail = (e) => {
        setEmail(e.target.value)
    }
    let handlePassword = (e) => {
        setPassword(e.target.value)
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("https://cloudquill.vercel.app/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json()
        if (json.success) {
            localStorage.setItem('token', json.authToken)
            navigate("/")
            props.showAlert("Login Successful", "success")
        }
        else {
            props.showAlert("Invalid Credentials", "danger")
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh", width: "100%" ,backgroundColor: `${mode==="light"?"#F0F1F2":"#171717"}`}}>
            <div className=" Lflex-r Lcontainer border border-3 rounded">
                <div className="Lflex-r Llogin-wrapper  ">
                    <div className="Llogin-text" style={{backgroundColor: `${mode==="light"?"#F0F1F2":"#171717"}`}}>
                        <div className="Llogo">
                            <span><img src={logo} alt="cloudquill" style={{ width: "50px", height: "50px" }} /></span>
                            <span className={`text-${mode==='light'?'dark':'light'}`}>CloudQuill</span>
                        </div>
                        <h1 className={`text-${mode==='light'?'dark':'light'}`}>Login</h1>
                        <p className={`text-${mode==='light'?'dark':'light'}`}>It's not long before you embark on this journey! </p>

                        <form className=" Lflex-c" onSubmit={handleSubmit}>
                            <div className="Linput-box">
                                <span className={`Llabel text-${mode==='light'?'dark':'light'}`}>E-mail</span>
                                <div style={{backgroundColor: `${mode==="light"?"#F0F1F2":"#2f2f2f"}` }} className=" Lflex-r Linput">
                                    <input style={{backgroundColor: `${mode==="light"?"#F0F1F2":"#2f2f2f"}`, color : `${mode==='light'?"black":"#3DC4E2"}` }} required onChange={handleEmail} value={email} name='email' className='LLinput' type="text" placeholder="name@abc.com" />
                                    <i style={{color : `${mode==='light'?"black":"#3DC4E2"}`}} className="fas fa-at"></i>
                                </div>
                            </div>

                            <div className="Linput-box">
                                <span className={`Llabel text-${mode==='light'?'dark':'light'}`}>Password</span>
                                <div className="Lflex-r Linput" style={{backgroundColor: `${mode==="light"?"#F0F1F2":"#2f2f2f"}` }}>
                                    <input style={{backgroundColor: `${mode==="light"?"#F0F1F2":"#2f2f2f"}`, color : `${mode==='light'?"black":"#3DC4E2"}` }} minLength={5} required onChange={handlePassword} value={password} name='password' className='LLinput' type="password" placeholder="8+ (a, A, 1, #)" />
                                    <i style={{color : `${mode==='light'?"black":"#3DC4E2"}`}} className="fas fa-lock"></i>
                                </div>
                            </div>

                            <input className="btns" type="submit" value="Login to your Account" />
                            <span className="Lextra-line">
                                <span className={`text-${mode==='light'?'dark':'light'}`}>Don't have an account?</span>
                                <Link to="/signup">Sign Up</Link>
                            </span>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
