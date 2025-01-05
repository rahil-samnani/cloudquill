import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home'
import About from './components/About';
import NoteState from './context/notes/noteState'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddNotes from './components/AddNotes';

function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/createnote' element={ <AddNotes/>} />w
          </Routes>
        </div>
        <Footer />
      </Router>
    </NoteState>
  );
}

export default App;
