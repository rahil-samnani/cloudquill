import logo from '../images/logo.png'
import {Link, useLocation, useNavigate} from 'react-router-dom'

export default function Navbar() {

    let location = useLocation();

    const navigate = useNavigate()

    const logout = () => {
        localStorage.setItem('token', null)
        navigate('/login')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg " style={{backgroundColor : "#F0F1F2"}}>
                <div className="container-fluid"> 
                    <Link className="navbar-brand d-flex mr-5" to="/">
                        <img src={logo} alt="Logo" width="70" height="70" className="d-inline-block align-text-top"/>
                        <h3 className='mt-3 mx-2 mr-5' style={{color:"#3DC4E2"}}>CloudQuill</h3>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathName==="/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathName==="/about" ? "active" : ""}`} aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/createnote">Create Note</Link>
                            </li>
                            
                        </ul>
                        {!localStorage.getItem('token') && <form className="d-flex mx-4">
                            <Link to="/login"> <button className="btn text-light mx-2" style={{backgroundColor:"#3DC4E2"}}>Login</button></Link>
                            <Link to="/signup"> <button className="btn text-light mx-2" style={{backgroundColor:"#3DC4E2"}}>Sign Up</button></Link>
                        </form>}
                        {localStorage.getItem('token') && <form className="d-flex mx-4">
                            <Link to="/login"> <button className="btn btn-outline-danger" onClick={logout}>Logout</button></Link>
                        </form>}
                    </div>
                </div>
            </nav>
            <hr class="hr-three" />
        </>

    )
}
