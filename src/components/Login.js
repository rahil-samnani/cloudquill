import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'

export default function Login(props) {

    let navigate = useNavigate()

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
        const response = await fetch("http://localhost:8080/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json()
        if (json.success) {
            localStorage.setItem('token', json.authToken)
            console.log(localStorage.getItem('token'))
            navigate("/")
            props.showAlert("Login Successful", "success")
        }
        else {
            props.showAlert("Invalid Credentials", "danger")
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh", width: "100%" , backgroundColor:"f0f1f2"}}>
            <div className=" Lflex-r Lcontainer border border-3 rounded">
                <div className="Lflex-r Llogin-wrapper  ">
                    <div className="Llogin-text">
                        <div className="Llogo">
                            <span><img src={logo} alt="cloudquill" style={{ width: "50px", height: "50px" }} /></span>
                            <span>CloudQuill</span>
                        </div>
                        <h1>Login</h1>
                        <p>It's not long before you embark on this journey! </p>

                        <form className=" Lflex-c" onSubmit={handleSubmit}>
                            <div className="Linput-box">
                                <span className="Llabel">E-mail</span>
                                <div className=" Lflex-r Linput">
                                    <input required onChange={handleEmail} value={email} name='email' className='LLinput' type="text" placeholder="name@abc.com" />
                                    <i className="fas fa-at"></i>
                                </div>
                            </div>

                            <div className="Linput-box">
                                <span className="Llabel">Password</span>
                                <div className="Lflex-r Linput">
                                    <input minLength={5} required onChange={handlePassword} value={password} name='password' className='LLinput' type="password" placeholder="8+ (a, A, 1, #)" />
                                    <i className="fas fa-lock"></i>
                                </div>
                            </div>

                            <input className="btns" type="submit" value="Login to your Account" />
                            <span className="Lextra-line">
                                <span>Don't have an account?</span>
                                <Link to="/signup">Sign Up</Link>
                            </span>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
