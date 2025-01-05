import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup(props) {

    const navigate = useNavigate()

    const [credential, setCredential] = useState({name : "" , email : "" , password : ""})

    const handleChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:8080/api/auth/createuser",{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({name:credential.name, email: credential.email ,password:credential.password})
        })
        const json = await response.json()
        if(json.success){
            localStorage.setItem('token' , json.authToken)
            navigate("/")
            props.showAlert("Account created Successful","success")
        }
        else{
            props.showAlert("Invalid Credentials Enterd","danger")
        }
    }

    return (
        <div>
            <div className=" Lflex-r Lcontainer">
                <div className="Lflex-r Llogin-wrapper">
                    <div className="Llogin-text">
                        <div className="Llogo">
                            <span><i className="fab fa-speakap"></i></span>
                            <span>Coders</span>
                        </div>
                        <h1>Sign Up</h1>
                        <p>It's not long before you embark on this journey! </p>

                        <form  className= " Lflex-c" onSubmit={handleSubmit}>
                            <div className="Linput-box">
                                <span className="Llabel">Name</span>
                                <div className=" Lflex-r Linput">
                                    <input minLength={3} required onChange={handleChange} value={credential.name} name='name' className='LLinput' type="text" placeholder="eg. Rahil"/>
                                    <i className="fa-solid fa-user"></i>
                                </div>
                            </div>

                            <div className="Linput-box">
                                <span className="Llabel">E-mail</span>
                                <div className=" Lflex-r Linput">
                                    <input required onChange={handleChange} value={credential.email} name='email' className='LLinput' type="text" placeholder="name@abc.com"/>
                                        <i className="fas fa-at"></i>
                                </div>
                            </div>

                            <div className="Linput-box">
                                <span className="Llabel">Password</span>
                                <div className="Lflex-r Linput">
                                    <input minLength={5} required onChange={handleChange} value={credential.password} name='password' className='LLinput' type="password" placeholder="8+ (a, A, 1, #)"/>
                                        <i className="fas fa-lock"></i>
                                </div>
                            </div>

                            <input  className="btns" type="submit" value="Create an Account"/>
                                <span className="Lextra-line">
                                    <span>Already have an account?</span>
                                    <Link to="/login">Login</Link>
                                </span>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
