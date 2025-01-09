import logo from '../images/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import NoteContext from '../context/notes/noteContext';
import { useContext } from 'react';

export default function Navbar() {

    let location = useLocation();

    const navigate = useNavigate()

    const logout = () => {
        localStorage.setItem('token', 'null')
        navigate('/login')
    }

    const context = useContext(NoteContext)
    const { mode , setMode } = context

    const changeMode = (evt) => {
        if (mode === "light") {
            document.querySelector(".ball").style.animationName = "ball_to_night";
            document.querySelectorAll(".light").forEach((light, index) => light.style.animationName = `light${index + 1}_to_night`)
            document.querySelector(".clouds").style.animationName = "clouds_to_night";
            document.querySelector(".stars").style.animationName = "stars_to_night";
            document.querySelector(".moon").classList.add("night");
            document.querySelector(".Container").classList.add("night");
            setMode("dark")
            document.body.style.backgroundColor = "#171717"
        } else {
            document.querySelector(".ball").style.animationName = "ball_to_day";
            document.querySelectorAll(".light").forEach((light, index) => light.style.animationName = `light${index + 1}_to_day`)
            document.querySelector(".clouds").style.animationName = "clouds_to_day";
            document.querySelector(".stars").style.animationName = "stars_to_day";
            document.querySelector(".moon").classList.remove("night");
            document.querySelector(".Container").classList.remove("night");
            setMode("light")
            document.body.style.backgroundColor = "#F0F1F2"
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: `${mode==="light"?"#F0F1F2":"#2f2f2f"}` }}>
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex mr-5" to="/">
                        <img src={logo} alt="Logo" width="70" height="70" className="d-inline-block align-text-top" />
                        <h3 className='mt-3 mx-2 mr-5' style={{ color: "#3DC4E2" }}>CloudQuill</h3>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item text-">
                                <Link className={`nav-link ${location.pathName === "/" ? "active" : ""} text-${mode==="light"?"dark":"light"}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathName === "/about" ? "active" : ""} text-${mode==="light"?"dark":"light"}`} aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathName === "/createnote" ? "active" : ""} text-${mode==="light"?"dark":"light"}`}  aria-current="page" to="/createnote">Create Note</Link>
                            </li>

                        </ul>
                        <div class="Container my-3">
                            <img class="clouds" alt='clouds' src="https://i.ibb.co/mBr3kW4/clouds.png" />
                            <img class="stars" alt='stars' src="https://i.ibb.co/dm0xBz3/stars.png" />
                            <div id="light1" class="light" style={{ width: "80px" }}></div>
                            <div id="light2" class="light" style={{ width: "112px" }}></div>
                            <div id="light3" class="light" style={{ width: "144px" }}></div>
                            <div class="ball" onClick={changeMode}><div class="moon"></div></div>
                        </div>
                        <form className="d-flex mx-4">
                            <Link to="/login"> <button className="btn btn-outline-danger" onClick={logout}>Logout</button></Link>
                        </form>
                    </div>
                </div>
            </nav>
            <hr class="hr-three"/>
        </>

    )
}
