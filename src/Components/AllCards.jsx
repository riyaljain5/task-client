import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const mockData = [
  { id: 1, location: 'Delhi', title: 'Meeting in Delhi', description: 'This is a meeting in Delhi.' },
  { id: 2, location: 'Delhi', title: 'Meeting in Delhi 2', description: 'This is a second meeting in Delhi.' },
  { id: 3, location: 'Delhi', title: 'Meeting in Delhi 3', description: 'This is a third meeting in Delhi.' },
  { id: 4, location: 'Delhi', title: 'Meeting in Delhi 4', description: 'This is a fourth meeting in Delhi.' },
  { id: 5, location: 'Delhi', title: 'Meeting in Delhi 5', description: 'This is a fifth meeting in Delhi.' },
  { id: 6, location: 'Delhi', title: 'Meeting in Delhi 6', description: 'This is a sixth meeting in Delhi.' },
  { id: 7, location: 'Delhi', title: 'Meeting in Delhi 7', description: 'This is a seventh meeting in Delhi.' },
  { id: 8, location: 'Delhi', title: 'Meeting in Delhi 8', description: 'This is an eighth meeting in Delhi.' },
  { id: 9, location: 'Delhi', title: 'Meeting in Delhi 9', description: 'This is a ninth meeting in Delhi.' },
  { id: 10, location: 'Delhi', title: 'Meeting in Delhi 10', description: 'This is a tenth meeting in Delhi.' },
  { id: 11, location: 'Mumbai', title: 'Meeting in Mumbai', description: 'This is a meeting in Mumbai.' },
  { id: 12, location: 'Mumbai', title: 'Meeting in Mumbai 2', description: 'This is a second meeting in Mumbai.' },
  { id: 13, location: 'Mumbai', title: 'Meeting in Mumbai 3', description: 'This is a third meeting in Mumbai.' },
  { id: 14, location: 'Mumbai', title: 'Meeting in Mumbai 4', description: 'This is a fourth meeting in Mumbai.' },
  { id: 15, location: 'Mumbai', title: 'Meeting in Mumbai 5', description: 'This is a fifth meeting in Mumbai.' },
  { id: 16, location: 'Mumbai', title: 'Meeting in Mumbai 6', description: 'This is a sixth meeting in Mumbai.' },
  { id: 17, location: 'Mumbai', title: 'Meeting in Mumbai 7', description: 'This is a seventh meeting in Mumbai.' },
  { id: 18, location: 'Mumbai', title: 'Meeting in Mumbai 8', description: 'This is an eighth meeting in Mumbai.' },
  { id: 19, location: 'Mumbai', title: 'Meeting in Mumbai 9', description: 'This is a ninth meeting in Mumbai.' },
  { id: 20, location: 'Mumbai', title: 'Meeting in Mumbai 10', description: 'This is a tenth meeting in Mumbai.' },
  { id: 21, location: 'Pune', title: 'Meeting in Pune', description: 'This is a meeting in Pune.' },
  { id: 22, location: 'Pune', title: 'Meeting in Pune 2', description: 'This is a second meeting in Pune.' },
  { id: 23, location: 'Pune', title: 'Meeting in Pune 3', description: 'This is a third meeting in Pune.' },
  { id: 24, location: 'Pune', title: 'Meeting in Pune 4', description: 'This is a fourth meeting in Pune.' },
  { id: 25, location: 'Pune', title: 'Meeting in Pune 5', description: 'This is a fifth meeting in Pune.' },
  { id: 26, location: 'Pune', title: 'Meeting in Pune 6', description: 'This is a sixth meeting in Pune.' },
  { id: 27, location: 'Pune', title: 'Meeting in Pune 7', description: 'This is a seventh meeting in Pune.' },
  { id: 28, location: 'Pune', title: 'Meeting in Pune 8', description: 'This is an eighth meeting in Pune.' },
  { id: 29, location: 'Pune', title: 'Meeting in Pune 9', description: 'This is a ninth meeting in Pune.' },
  { id: 30, location: 'Pune', title: 'Meeting in Pune 10', description: 'This is a tenth meeting in Pune.' },
  { id: 31, location: 'Chennai', title: 'Meeting in Chennai', description: 'This is a meeting in Chennai.' },
  { id: 32, location: 'Chennai', title: 'Meeting in Chennai 2', description: 'This is a second meeting in Chennai.' },
  { id: 33, location: 'Chennai', title: 'Meeting in Chennai 3', description: 'This is a third meeting in Chennai.' },
  { id: 34, location: 'Chennai', title: 'Meeting in Chennai 4', description: 'This is a fourth meeting in Chennai.' },
  { id: 35, location: 'Chennai', title: 'Meeting in Chennai 5', description: 'This is a fifth meeting in Chennai.' },
  { id: 36, location: 'Chennai', title: 'Meeting in Chennai 6', description: 'This is a sixth meeting in Chennai.' },
  { id: 37, location: 'Chennai', title: 'Meeting in Chennai 7', description: 'This is a seventh meeting in Chennai.' },
  { id: 38, location: 'Chennai', title: 'Meeting in Chennai 8', description: 'This is an eighth meeting in Chennai.' },
  { id: 39, location: 'Chennai', title: 'Meeting in Chennai 9', description: 'This is a ninth meeting in Chennai.' },
  { id: 40, location: 'Chennai', title: 'Meeting in Chennai 10', description: 'This is a tenth meeting in Chennai.' },
  { id: 41, location: 'Kolkata', title: 'Meeting in Kolkata', description: 'This is a meeting in Kolkata.' },
  { id: 42, location: 'Kolkata', title: 'Meeting in Kolkata 2', description: 'This is a second meeting in Kolkata.' },
  { id: 43, location: 'Kolkata', title: 'Meeting in Kolkata 3', description: 'This is a third meeting in Kolkata.' },
  { id: 44, location: 'Kolkata', title: 'Meeting in Kolkata 4', description: 'This is a fourth meeting in Kolkata.' },
  { id: 45, location: 'Kolkata', title: 'Meeting in Kolkata 5', description: 'This is a fifth meeting in Kolkata.' },
  { id: 46, location: 'Kolkata', title: 'Meeting in Kolkata 6', description: 'This is a sixth meeting in Kolkata.' },
  { id: 47, location: 'Kolkata', title: 'Meeting in Kolkata 7', description: 'This is a seventh meeting in Kolkata.' },
  { id: 48, location: 'Kolkata', title: 'Meeting in Kolkata 8', description: 'This is an eighth meeting in Kolkata.' },
  { id: 49, location: 'Kolkata', title: 'Meeting in Kolkata 9', description: 'This is a ninth meeting in Kolkata.' },
  { id: 50, location: 'Kolkata', title: 'Meeting in Kolkata 10', description: 'This is a tenth meeting in Kolkata.' },
];

const randomGirl = [
 "https://r2.erweima.ai/imgcompressed/compressed_d62c7e3dcbf1e89efdba6cdce32a6f22.webp",
 "https://imgcdn.stablediffusionweb.com/2024/3/17/b019dca0-958d-47d7-bb6f-bcb0a9fb2f1c.jpg",
 "https://imgcdn.stablediffusionweb.com/2024/9/10/04d60c84-6edb-4e9a-b9f8-30fc9fd8f1d6.jpg",
 "https://cdn.pixabay.com/photo/2024/08/06/10/41/ai-generated-8949005_1280.jpg",
 "https://img.freepik.com/premium-photo/indian-girl_785565-2074.jpg" 
]



const cityOptions = ['Delhi', 'Mumbai', 'Pune', 'Chennai', 'Kolkata'];

const getRandomGirlImage = (city) => {
  const index = cityOptions.indexOf(city);
  return randomGirl[index % randomGirl.length];
};

const AllCards = () => {
  const location = useLocation();
  const { state } = location;
  const [selectedLocation, setSelectedLocation] = useState(state?.location || 'Delhi');
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [visibleCards, setVisibleCards] = useState(10); // Lazy load 10 cards initially
  const navigate = useNavigate();
  const observer = useRef(); // For intersection observer

  const filteredCards = mockData.filter((card) => card.location === selectedLocation);

  const handleCitySelection = (city) => {
    setSelectedLocation(city);
    setSearchQuery(city);
    setShowDropdown(false);
  };

  const filteredCities = cityOptions.filter((city) =>
    city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCardClick = (card) => {
    navigate('/content', { state: { card } });
  };

  const loadMoreCards = () => {
    setVisibleCards((prev) => prev + 10); // Load 10 more cards each time
  };

  // Use intersection observer to trigger lazy loading
  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    const handleObserver = (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        loadMoreCards();
      }
    };

    observer.current = new IntersectionObserver(handleObserver);
    if (document.getElementById('load-more')) {
      observer.current.observe(document.getElementById('load-more'));
    }
  }, []);

  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 bg-white w-full">
      <motion.h1
        className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        All Meetings in {selectedLocation}
      </motion.h1>

      <div className="relative mb-4 w-full max-w-md">
        <motion.input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowDropdown(true);
          }}
          placeholder="Search or select a city..."
          className="px-4 py-2 border rounded-lg w-full shadow focus:outline-none focus:ring focus:border-blue-500 transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />
        {showDropdown && (
          <motion.ul
            className="absolute z-10 bg-white border rounded-lg w-full mt-1 max-h-40 overflow-auto shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {filteredCities.length > 0 ? (
              filteredCities.map((city, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200 transition-colors"
                  onClick={() => handleCitySelection(city)}
                >
                  {city}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No cities found</li>
            )}
          </motion.ul>
        )}
      </div>

      <div className="flex flex-wrap justify-center space-x-4 mb-6 w-full max-w-6xl">
        {cityOptions.map((city) => (
          <motion.button
            key={city}
            onClick={() => setSelectedLocation(city)}
            className={`px-4 my-1 py-2 rounded-lg focus:outline-none transition duration-300 ${selectedLocation === city ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {city}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {filteredCards.slice(0, visibleCards).map((card) => (
          <motion.div
            key={card.id}
            className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => handleCardClick(card)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3}}
          >
            <img
              src={getRandomGirlImage(card.location)}
              alt={`Meeting ${card.id}`}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h1 className="text-lg font-bold mb-2">{card.title}</h1>
              <p className="text-gray-600 text-base">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {visibleCards < filteredCards.length && (
        <div id="load-more" className="mt-10 text-center">
          <p className="text-gray-600">Loading more meetings...</p>
        </div>
      )}
    </section>
  );
};

export default AllCards;