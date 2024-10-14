import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
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
      className="flex flex-col items-center justify-center py-12 px-4 bg-gray-100 mt-16"
      initial={{ opacity: 0, y: 50 }} // Start off invisible and slightly below
      animate={{ opacity: 1, y: 0 }} // Smooth fade-in and ease-in animation
      transition={{ duration: 0.8, ease: 'easeOut' }} // Timing for the animation
    >
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
      >
        Meetings in your City
      </motion.h1>

      <motion.h3
        className="text-xl md:text-2xl text-gray-600 text-center mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        Choose From Your Favourite Catalogue
      </motion.h3>

      {/* Horizontal scrolling container */}
      <div className="relative w-5/6">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#286181] text-white p-4 z-20 rounded-full shadow z-10"
          onClick={() => smoothScroll('left')}
        >
          <FaArrowLeft />
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-8 py-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {/* Render multiple Card components with animation */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((id, index) => (
            <motion.div
              className="flex-shrink-0 w-1/4 snap-start"
              key={id}
              initial={{ opacity: 0, y: 50 }} // Cards start off below and invisible
              animate={{ opacity: 1, y: 0 }} // Smooth fade-in and slide-in
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: 'easeOut' }} // Stagger animation
            >
              <Card id={id} active={active} handleClick={setActive} />
            </motion.div>
          ))}
        </div>
        <button
          className="absolute p-4 right-0 top-1/2 transform -translate-y-1/2 bg-[#286181] text-white p-2 rounded-full shadow z-10"
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

      {/* Paragraph with animation */}
      <motion.p
        className="mt-16 text-wrap text-sm w-3/4 items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </motion.p>
    </motion.section>
  );
};

export default Explore;
