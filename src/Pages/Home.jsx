import { motion } from 'framer-motion';
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Explore from "./Explore";
import Services from "./Services";
import image from "../assets/girlbed.jpeg";

const Home = () => {
  return (
    <section className="">
      {/* Banner section with reduced image height */}
      <div className="relative w-screen h-[78vh] py-6 px-4 bg-lightblue flex items-center justify-center" style={{backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center"}}>
        {/* Image */}
        {/* <img
          src={image}
          alt="Banner"
          className="w-full h-full object-cover mx-auto"
        /> */}

        {/* Centered search bar */}
        

        {/* Smooth ease-in animation for the text */}
        <motion.div
          className="relative z-10 mt-6 text-center"
          initial={{ opacity: 0, y: 30 }} // Start slightly below and invisible
          animate={{ opacity: 1, y: 0 }} // Fade in and move up into place
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth and fast animation
        >
          <h1 className="font-bold text-4xl md:text-7xl text-white text-center text-gray-800 text-w w-full md:mb-0 mb-3">
            Welcome to CGKeech – Your Trusted Platform for Authentic <span className='text-[#A91B60]'>Bangalore</span> Call Girl Services
          </h1>
          <div className="relative z-10 mt-5">
          <input
            type="text"
            placeholder="Search for services..."
            className="w-2/3 md:w-1/3 p-4 border-2 border-gray-300 bg-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#A91B60] focus:border-transparent"
          />
        </div>

          <Button
            text="Book Now"
            onClick={() => {}}
            className="mt-4 p-4 text-xl bg-[#A91B60] text-white font-semibold"
          />
        </motion.div>
      </div>

      <div className='w-screen'>
      <Explore />
      <Services />
      <Footer />
      </div>
    </section>
  );
};

export default Home;
