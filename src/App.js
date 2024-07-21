import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects';
import Resume from './components/Resume';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
