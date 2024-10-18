import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { motion } from 'framer-motion'; // Import framer-motion for animation

const Services = () => {
  const navigate = useNavigate();

  // Function to handle clicks on images
  const handleImageClick = (location) => {
    navigate('/all-cards', { state: { location } }); // Navigate to AllCards with location state
  };

  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 bg-white mb-16">
      {/* Title and Subtitle */}
      <motion.h1 
        className="text-4xl md:text-7xl font-bold text-[#286181] mb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        Top Locations in India
      </motion.h1>
      
      <motion.h3 
        className="text-xl md:text-xl text-[#286181] text-center mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
      >
        Find your service at your location
      </motion.h3>

      {/* Locations Section */}
      <motion.div 
        className='w-auto py-4 px-6 mt-12 gap-10 border-2 border-[#286181] rounded-lg flex items-center justify-center'
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {['Delhi', 'Mumbai', 'Pune', 'Chennai', 'Kolkata'].map((city) => (
          <div 
            className='flex flex-col items-center justify-center cursor-pointer' 
            onClick={() => handleImageClick(city)} 
            key={city}
          >
            <img 
              src="https://i.pinimg.com/564x/61/49/60/6149600e89247cebe96fdd5ca0997230.jpg" 
              className='w-32 h-32 object-cover rounded-lg' 
              alt={city} 
            />
            <h1 className='mt-2 text-lg text-[#286181]'>{city}</h1>
          </div>
        ))}
      </motion.div>
      <motion.div 
        className='w-auto py-4 px-6 mt-12 gap-10 border-2 border-[#286181] rounded-lg flex items-center justify-center'
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {['Delhi', 'Mumbai', 'Pune', 'Chennai', 'Kolkata'].map((city) => (
          <div 
            className='flex flex-col items-center justify-center cursor-pointer' 
            onClick={() => handleImageClick(city)} 
            key={city}
          >
            <img 
              src="https://i.pinimg.com/564x/61/49/60/6149600e89247cebe96fdd5ca0997230.jpg" 
              className='w-32 h-32 object-cover rounded-lg' 
              alt={city} 
            />
            <h1 className='mt-2 text-lg text-[#286181]'>{city}</h1>
          </div>
        ))}
      </motion.div>

    </section>
  );
};

export default Services;
