import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Card from '../Components/Card';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Button from '../Components/Button';

const Explore = () => {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const handleSeeAll = () => {
    navigate('/all-cards');
  };

  const smoothScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.section
      className="flex flex-col items-center justify-center py-12 md:px-4 mx-auto bg-gray-100 mt-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Animated Heading */}
      <motion.h1
        className="text-3xl md:text-6xl font-bold text-center text-gray-800 mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
      >
        Meetings in your City
      </motion.h1>

      <motion.h3
        className="text-lg md:text-2xl text-gray-600 text-center mb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        Choose From Your Favourite Catalogue
      </motion.h3>

      {/* Horizontal scrolling container */}
      <div className="relative w-full md:w-5/6">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#286181] text-white p-4 z-20 rounded-full shadow"
          onClick={() => smoothScroll('left')}
        >
          <FaArrowLeft />
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-8 py-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {/* Render multiple Card components with z-index and responsive adjustments */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((id, index) => (
            <motion.div
              className={`flex-shrink-0 ${active === id ? 'z-20' : 'z-10'} ${
                // Full width on mobile, fixed width on large screens
                active === id ? '' : 'sm:w-full md:w-[240px] lg:w-[280px]'
              } snap-start`}
              key={id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
              style={{ zIndex: 8 - index }} // Decreasing z-index for each subsequent card
            >
              <Card id={id} active={active} handleClick={setActive} />
            </motion.div>
          ))}
        </div>
        <button
          className="z-10 absolute p-4 right-0 top-1/2 transform -translate-y-1/2 bg-[#286181] text-white p-2 rounded-full shadow"
          onClick={() => smoothScroll('right')}
        >
          <FaArrowRight />
        </button>
      </div>

      {/* See All button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      >
        <Button
          text="See All"
          onClick={handleSeeAll}
          className="mt-4 px-4 py-2 bg-[#286181] text-white rounded-lg"
        />
      </motion.div>
    </motion.section>
  );
};

export default Explore;
