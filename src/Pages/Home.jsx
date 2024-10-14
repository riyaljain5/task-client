import { motion } from 'framer-motion';
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Explore from "./Explore";
import Services from "./Services";

const Home = () => {
  return (
    <section className="py-6 px-4">
      <div className="flex items-center justify-center w-full h-screen py-6 px-4 bg-lightblue flex-col md:flex-row">

        {/* Smooth ease-in animation for the text */}
        <motion.div
          className="m-6"
          initial={{ opacity: 0, y: 30 }} // Start slightly below and invisible
          animate={{ opacity: 1, y: 0 }} // Fade in and move up into place
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth and fast animation
        >
          <h1 className="font-bold text-4xl md:text-7xl text-center md:text-left w-full md:w-3/2 md:mb-0 mb-3">
            Welcome to CGKeech – Your Trusted Platform for Authentic Call Girl Services
          </h1>

          <Button
            text="Book Now"
            onClick={() => {}}
            className="mt-14 p-4 text-xl bg-[#286181] text-white font-semibold"
          />
        </motion.div>

        {/* Smooth animation for the image */}
        <motion.img
          src="https://i.pinimg.com/enabled/564x/6e/f3/f8/6ef3f8520592752e47f811ac8f330a3d.jpg"
          className="w-full md:w-1/3 border rounded-lg"
          alt="App Visual"
          initial={{ opacity: 0, x: 50 }} // Start slightly to the right and invisible
          animate={{ opacity: 1, x: 0 }} // Fade in and slide in from the right
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth and fast transition
        />
      </div>

      <Explore />
      <Services />
      <Footer />
    </section>
  );
};

export default Home;
