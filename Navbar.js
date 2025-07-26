import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaSearch } from 'react-icons/fa';
import BharatScoreLogo from '../assets/bharat-score-logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <img src={BharatScoreLogo} alt="Bharat Score" className="h-10 mr-2" />
              <span className="text-xl font-bold hidden sm:inline">Bharat Score</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-200 transition">Home</Link>
            <Link to="/matches" className="hover:text-blue-200 transition">Matches</Link>
            <Link to="/teams" className="hover:text-blue-200 transition">Teams</Link>
            <Link to="/players" className="hover:text-blue-200 transition">Players</Link>
            <Link to="/news" className="hover:text-blue-200 transition">News</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-2 text-gray-600">
                <FaSearch />
              </button>
            </form>
            <Link to="/admin" className="hover:text-blue-200 transition">
              <FaUser className="text-lg" />
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3 mt-4">
              <Link to="/" className="hover:text-blue-200 transition" onClick={toggleMenu}>Home</Link>
              <Link to="/matches" className="hover:text-blue-200 transition" onClick={toggleMenu}>Matches</Link>
              <Link to="/teams" className="hover:text-blue-200 transition" onClick={toggleMenu}>Teams</Link>
              <Link to="/players" className="hover:text-blue-200 transition" onClick={toggleMenu}>Players</Link>
              <Link to="/news" className="hover:text-blue-200 transition" onClick={toggleMenu}>News</Link>
              <Link to="/admin" className="hover:text-blue-200 transition" onClick={toggleMenu}>Admin</Link>
            </div>
            <form onSubmit={handleSearch} className="mt-4 relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-2 text-gray-600">
                <FaSearch />
              </button>
            </form>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
