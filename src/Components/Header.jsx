import { useState } from 'react';
import { FaSearch, FaUserCircle, FaBars, FaTimes, FaPlusCircle } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Button from './Button';
import { mockData, cityOptions } from './Data.jsx';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = () => {
    navigate('/login');
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    const results = cityOptions.filter(city =>
      city.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleSelectCity = (city) => {
    navigate(`/all-cards/`);
    setSearchTerm('');
    setSearchResults([]);
  };

  

  return (
    <section className="py-6 px-6">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Hamburger Menu Icon for mobile */}
        <button className="px-4 md:hidden text-gray-600" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links - Responsive */}
        <ul
          className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center justify-between absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 top-16 md:top-0 z-10 transition-all duration-300 ease-in-out ${
            menuOpen ? 'block' : 'hidden'
          } md:flex`}
        >
          <button 
            onClick={handleNavigation}
            className="flex items-center text-[#286181] hover:text-[#A91B60]"
          >
            <FaUserCircle className="mr-2 text-xl h-10 w-10" />
          </button>
          <li>
            <Link
              to="/"
              className="text-[#286181] hover:text-[#A91B60] cursor-pointer text-lg md:text-xl hover:bg-[#286181] hover:text-white py-2 px-3 rounded-xl"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/explore"
              className="text-[#286181] hover:text-[#A91B60] cursor-pointer text-lg md:text-xl hover:bg-[#286181] hover:text-white py-2 px-3 rounded-xl"
            >
              Explore
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-[#286181] hover:text-[#A91B60] cursor-pointer text-lg md:text-xl hover:bg-[#286181] hover:text-white py-2 px-3 rounded-xl"
            >
              Services
            </Link>
          </li>
        </ul>

          {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="object-cover md:w-36 sm:w-28 w-24 mr-4"
          />
        </div>

        {/* Search Bar and Profile Icon */}
        <div className="flex items-center gap-4 justify-center ml-2 ">
          <div className=" flex relative w-full md:w-64 py-2 rounded-xl border border-[#286181] text-[#286181]">
            <input
              type="text"
              placeholder="Search Here"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full border-none focus:outline-none px-4 py-2"
            />
            <button className="pr-4 text-[#286181] hover:text-[#A91B60]">
              <FaSearch />
            </button>
            {searchResults.length > 0 && (
              <ul
                className="absolute bg-white w-full mt-14 z-10 rounded-lg z-20"
                onClick={(e) => e.stopPropagation()}
                onMouseLeave={() => setSearchResults([])}
                onMouseOut={() => setSearchResults([])}
              >
                {searchResults.map((city) => (
                  <li
                    key={city}
                    className="px-4 py-2 cursor-pointer rounded-lg  hover:bg-[#286181] hover:text-white"
                    onClick={() => handleSelectCity(city)}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Post Ad Button */}
          <div className="hidden md:flex items-center w-auto bg-[#286181] text-white rounded-xl ml-4">
            <FaPlusCircle className="ml-2" />
            <Button text="Post your Ad" />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
