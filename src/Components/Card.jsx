import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Card = ({ id, active, handleClick }) => {
  const isActive = active === id;

  return (
    <section className="px-4 mb-6">
      <img
        src="https://i.pinimg.com/736x/a7/5f/c1/a75fc15950775e62d20b5fb1fd5d613b.jpg"
        alt="Card Image"
        className="relative h-[180px] w-[180px] object-cover top-24 left-[50%] scale-105 transform -translate-x-1/2 z-10 border rounded-full shadow-lg"
      />

      <motion.div
        className={`relative flex justify-center items-center w-[280px] ${
          isActive ? 'h-[460px] bg-[#286181]' : 'h-[380px] bg-white'
        } rounded-[40px] overflow-hidden shadow-md transition-all duration-300`}
        onClick={() => handleClick(isActive ? null : id)}
        initial={{ scale: 1 }}
        animate={{ scale: isActive ? 1.03 : 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {!isActive ? (
          <div className="flex flex-col justify-center items-center text-center px-4 mt-14 text-[#286181]">
            <h1 className="text-2xl font-semibold mb-2">Discover More</h1>
            <p className="text-lg leading-6">Explore exclusive offers in your area. Tap to learn more!</p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 mt-28">
            <Button text="PUNE" className="bg-white text-black px-6 py-2 rounded-full w-40 text-center" />
            <Button text="MUMBAI" className="bg-white text-black px-6 py-2 rounded-full w-40 text-center" />
            <Button text="CHENNAI" className="bg-white text-black px-6 py-2 rounded-full w-40 text-center" />
            <Button text="BANGALORE" className="bg-white text-black px-6 py-2 rounded-full w-40 text-center" />
            <Button text="DELHI" className="bg-white text-black px-6 py-2 rounded-full w-40 text-center" />
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Card;
