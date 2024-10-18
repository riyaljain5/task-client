import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
  const navigate = useNavigate();

  const handleImageClick = (location) => {
    navigate('/all-cards', { state: { location } });
  };

  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 bg-white mb-16 w-full">
      {/* Title and Subtitle */}
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-[#286181] mb-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        Top Locations in India
      </motion.h1>

      <motion.h3
        className="text-lg md:text-xl text-[#286181] text-center mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
      >
        Find your service at your location
      </motion.h3>

      {/* Locations Section */}
      <motion.div
        className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-8 px-6 border-2 border-[#286181] rounded-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {['Delhi', 'Mumbai', 'Pune', 'Chennai', 'Kolkata'].map((city) => (
          <div
            className="flex flex-col items-center justify-center cursor-pointer"
            onClick={() => handleImageClick(city)}
            key={city}
          >
            <img
              src="https://i.pinimg.com/564x/61/49/60/6149600e89247cebe96fdd5ca0997230.jpg"
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg transition-transform transform hover:scale-105"
              alt={city}
            />
            <h1 className="mt-2 text-sm md:text-lg text-[#286181]">{city}</h1>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
