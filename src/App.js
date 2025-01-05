import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/noteState';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AddNotes from './components/AddNotes';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1300);
  };

  const Layout = ({ children }) => {
    const location = useLocation();
    const hideComponents = location.pathname === '/login' || location.pathname === '/signup';

    return (
      <>
        {!hideComponents && <Navbar />}
        {!hideComponents && <Alert alert={alert} />}
        <div className="container">{children}</div>
        {!hideComponents && <Footer />}
      </>
    );
  };

  return (
    <NoteState>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
            <Route path="/createnote" element={<AddNotes showAlert={showAlert} />} />
            <Route path="/login" element={<Login showAlert={showAlert} />} />
            <Route path="/signup" element={<Signup showAlert={showAlert} />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </Layout>
      </Router>
    </NoteState>
  );
}

export default App;
