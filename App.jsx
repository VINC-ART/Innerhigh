import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Tracker from './Tracker';
import Journal from './Journal';
import Learn from './Learn';
import Bot from './Bot';

function Navbar() {
  const navItems = [
    { path: '/', label: 'Dashboard' },
    { path: '/tracker', label: 'Tracker' },
    { path: '/learn', label: 'Learn' },
    { path: '/journal', label: 'Journal' },
    { path: '/bot', label: 'Bot' },
  ];

  return (
    <nav className="bg-white shadow mb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center space-x-6 py-4 text-lg font-medium text-gray-700">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="hover:text-blue-500 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <div className="font-sans text-center min-h-screen bg-gray-50">
        <header className="py-8">
          <h1 className="text-4xl font-bold text-gray-800">INNERHIGH</h1>
        </header>

        <Navbar />

        <main className="max-w-3xl mx-auto px-4">
          <Routes>
            <Route
              path="/"
              element={
                <div className="text-xl text-gray-700">
                  Welcome to your growth sanctuary
                </div>
              }
            />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/bot" element={<Bot />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
