import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Tracker from './Tracker';
import Journal from './Journal';
import Learn from './Learn';
import Bot from './Bot';
import './App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Dashboard</Link>
      <Link to="/tracker">Tracker</Link>
      <Link to="/learn">Learn</Link>
      <Link to="/journal">Journal</Link>
      <Link to="/bot">Bot</Link>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <h1 className="title">INNERHIGH</h1>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<div>Welcome to your growth sanctuary</div>} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/bot" element={<Bot />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
