import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home'
import About from './components/About';
import NoteState from './context/notes/noteState'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddNotes from './components/AddNotes';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1300)
  }

  return (
    <NoteState>
      <Router>
        <Navbar/>
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home showAlert={showAlert}/>} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/createnote' element={ <AddNotes showAlert={showAlert}/>} />w
            <Route exact path='/login' element={ <Login showAlert={showAlert}/>} />w
            <Route exact path='/signup' element={ <Signup showAlert={showAlert}/>} />w
          </Routes>
        </div>
        <Footer />
      </Router>
    </NoteState>
  );
}

export default App;
