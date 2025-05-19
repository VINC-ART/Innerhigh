import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Tracker from './Tracker';
import Journal from './Journal';
import Learn from './Learn';
import Bot from './Bot';

export default function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
        <h1>INNERHIGH</h1>
        <nav style={{ marginBottom: '1rem' }}>
          <Link to='/'>Dashboard</Link> | <Link to='/tracker'>Tracker</Link> | <Link to='/learn'>Learn</Link> | <Link to='/journal'>Journal</Link> | <Link to='/bot'>Bot</Link>
        </nav>
        <Routes>
          <Route path='/' element={<div>Welcome to your growth sanctuary</div>} />
          <Route path='/tracker' element={<Tracker />} />
          <Route path='/learn' element={<Learn />} />
          <Route path='/journal' element={<Journal />} />
          <Route path='/bot' element={<Bot />} />
        </Routes>
      </div>
    </Router>
  );
}