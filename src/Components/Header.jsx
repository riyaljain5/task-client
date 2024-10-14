import { useState } from 'react';
import { FaSearch, FaUserCircle, FaBars, FaTimes,FaPlusCircle } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate instead of useHistory
import logo from '../assets/logo.png';
import Button from './Button';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = () => {
    navigate('/login'); // Change to '/signup' if you want to navigate to the signup page
  };

  return (
    <section className="py-6 px-6">
      <nav className="container mx-auto flex flex-row items-center justify-between">
        {/* Hamburger Menu Icon */}
        
        <button className="px-4 md:hidden text-gray-600" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        {/* Navigation Links */}
        <ul className={`flex space-x-4 ${menuOpen ? 'block' : 'hidden'} md:flex md:space-x-6 items-center justify-between`}>
        <button 
    onClick={handleNavigation} // Handle click event
    className="flex items-center text-[#286181] hover:text-[#A91B60]"
  >
    <FaUserCircle className="mr-2 text-xl h-10 w-10" /> {/* Profile Icon */}
  </button>
  <li>
    <Link to="/" className="text-[#286181] hover:text-[#A91B60] cursor-pointer text-xl hover:bg-[#286181] hover:text-white py-2 px-3 rounded-xl">Home</Link>
  </li>
  <li>
    <Link to="/explore" className="text-[#286181] hover:text-[#A91B60] cursor-pointer text-xl hover:bg-[#286181] hover:text-white py-2 px-3 rounded-xl">Explore</Link>
  </li>
  <li>
    <Link to="/services" className="text-[#286181] hover:text-[#A91B60] cursor-pointer text-xl hover:bg-[#286181] hover:text-white py-2 px-3 rounded-xl">Services</Link>
  </li>
</ul>


        {/* Logo */}
        <img src={logo} width={150} height={100} alt="Logo" className='object-cover '/>
        {/* Search Bar and Profile Icon */}
        <div className='flex items-center gap-4'>
  <div className="relative flex justify-end w-64 py-2 rounded-xl border border-[#286181]   text-[#286181]">
    <input
      type="text"
      placeholder="Search Here"
      className="border-none focus:outline-none"
    />
    <button className="text-[#286181] hover:text-[#A91B60] px-2">
      <FaSearch />
    </button>
  </div>
  <div className='flex justify-start items-center w-20px bg-[#286181] text-white rounded-xl '>
    <FaPlusCircle className='ms-2'/>
    <Button text={`Post your Ad`} className=''/>
  </div>
  

  

</div>

      </nav>
    </section>
  );
};

export default Header;
