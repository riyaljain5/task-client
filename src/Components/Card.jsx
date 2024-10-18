import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { FaWhatsapp } from 'react-icons/fa';
import { MdCall, MdContactMail, MdDateRange, MdLocationCity, MdLocationOn } from 'react-icons/md';
const Card = ({ id, active, handleClick }) => {
  const isActive = active === id;

  return (
    <section className="px-4 mb-6 md:m-0 ms-8">
      <img
        src="https://i.pinimg.com/736x/a7/5f/c1/a75fc15950775e62d20b5fb1fd5d613b.jpg"
        alt="Card Image"
        className="relative h-[180px] w-[180px] object-cover top-24 left-[50%] scale-105 transform -translate-x-1/2 z-10 border rounded-full shadow-lg"
      />

      <motion.div
        className={`relative flex justify-center md:p-0 md:m-0 items-center w-[280px] ${
          isActive ? 'h-[460px] bg-[#286181]' : 'h-[380px] bg-white'
        } rounded-[40px] overflow-hidden shadow-md transition-all duration-300`}
        onClick={() => handleClick(isActive ? null : id)}
        initial={{ scale: 1 }}
        animate={{ scale: isActive ? 1.03 : 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {!isActive ? (
          <div className="flex flex-col justify-center items-center text-center px-4 mt-14 text-[#286181]">
            <h1 className="text-2xl font-semibold mb-2">Cash payment Book Independent Call Girl Bhopal</h1>
            <p className="text-lg text-black leading-6">Hello, sweetie. My name is toshi and I am a premium independent female VIP model call girl and ... </p>
            
          </div>
        ) :  (
          <div className="flex flex-col items-center justify-center gap-4 mt-14">
            {/* Area, Age, City with Icons and Underlines */}
            <div className="flex flex-row items-center gap-1">
              <div className="flex items-center gap-2 text-white">
                <MdLocationOn className="text-2xl" />
                <span className="border-b-2 border-white">Bangalore</span> {/* Area */}
              </div>
              <div className="flex items-center gap-2 text-white">
                <MdDateRange className="text-2xl" />
                <span className="border-b-2 border-white">25 Years</span> {/* Age */}
              </div>
              
            </div>

            {/* WhatsApp Button */}
            <Button 
              text={
                <div className="flex items-center justify-center">
                  <FaWhatsapp className="mr-2" />
                  Whatsapp
                </div>
              } 
              className="bg-[#25D366] hover:bg-[#1DA851] text-white px-6 py-2 mt-2 rounded-full w-40 text-center shadow-md transition-all"
            />

            {/* Call Button */}
            <Button
              text={
                <div className="flex items-center justify-center">
                  <MdCall className="mr-2 text-white" />
                  98908888
                </div>
              }
              className="bg-pink-500 hover:bg-[#1e4961] hover:text-white text-black px-6 py-2 mt-2 rounded-full w-40 text-center shadow-md transition-all"
            />

            {/* Book Now Button */}
            <Button
              text={
                <div className="flex items-center justify-center">
                  <MdContactMail className="mr-2 text-white" />
                  Book Now
                </div>
              }
              className="bg-green-500 hover:bg-[#1e4961] hover:text-white text-black px-6 py-2 mt-2 rounded-full w-40 text-center shadow-md transition-all"
            />
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Card;