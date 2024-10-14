import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight,FaLanguage,FaInbox, FaVenusMars, FaFlag, FaCalendarAlt, FaUserAlt, FaSmokingBan, FaRulerVertical, FaCheck, FaPhoneSlash, FaPlane } from 'react-icons/fa';

const Content = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
      'https://resource7.xescorts.com/fbf8ac1e8d30155584903adbb9487dd082f359bd50f9b1ab8506c136eeae8c3f251ea901ee48b67ffb959be56922b865a3c76c612cda233ba461f3e9c6eee646eb5a5be42ad9a41e5bc78567a72754d0e86f04c014cd9794ec6b2ce348d22693dacfeb00b1da7290ee2d5383e6ae6465',
      'https://resource5.xescorts.com/fbf8ac1e8d30155584903adbb9487dd082f359bd50f9b1ab8506c136eeae8c3fac1d38b3d886f236538391d02042c800411c1e35b108c33576c5f5a6071391166740e4b0e1fdfede2b97e6c70f3236636a2e381ac2fc19dd91161c3454732a9e70a180b13bbd1a136570cc547983ea40',
      'https://resource1.xescorts.com/fbf8ac1e8d30155584903adbb9487dd082f359bd50f9b1ab8506c136eeae8c3f8d5f5ac84ed97a03d701404099dd1553cb5d3bad65aa5ef06685811a878584e4aa4c3337c95c3930f0400d577d4bbcfa26a1c68f858a406d37a4adcd42484a6ecc3cb4fba638d8e6e8779fb2f2e5a2f6',
      'https://resource1.xescorts.com/fbf8ac1e8d30155584903adbb9487dd082f359bd50f9b1ab8506c136eeae8c3f751f7a13f8527c8caed41f1cd480c9b078f25630ca244dc6920b8552e10bfe9b45800d0125795325d9bce817686afcd7151cc2b51041411f561d7fa39560dbb4c1584c3b31440d7c93c361b3351d5f76'
    ];
  
    const nextImage = () => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

  

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Image Carousel */}
      <div className="relative w-full h-1/3 mx-auto flex">
        {/* Main image */}
        <div className='flex items-center gap-3'>
            {/* Left Arrow */}
            <button onClick={prevImage} className="w-10 h-10 text-gray-600 bg-white p-2 rounded-full shadow hover:shadow-lg">
            <FaArrowLeft size={24} />
            </button>

            {/* Thumbnails */}
            <div className="flex space-x-4 overflow-x-auto py-2">
            {images.map((image, index) => (
                <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`cursor-pointer w-64 h-64 rounded-lg object-cover ${index === currentImage ? 'border-4 border-blue-500' : 'border border-gray-300'}`}
                onClick={() => setCurrentImage(index)}
                />
            ))}
            </div>

            {/* Right Arrow */}
            <button onClick={nextImage} className="w-10 h-10 text-gray-600 bg-white p-2 rounded-full shadow hover:shadow-lg">
            <FaArrowRight size={24} />
            </button>
        </div>
      </div>


      {/* Profile Info */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Elisse</h1>
          <span className="text-gray-500">Last logged in: 8 months ago</span>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <div className="text-sm bg-blue-500 text-white px-4 py-2 rounded-lg">Current tour | 24h</div>
          <div className="text-sm bg-gray-200 px-4 py-2 rounded-lg">England, Bristol</div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mb-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Profile</button>
          {/* <button className="bg-gray-200 px-4 py-2 rounded-lg">Diary</button> */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Show Phone Number</button>
        </div>

        {/* Introduction */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Introduction</h2>
          <div className='border rounded-lg border-gray-300 p-4'>
            <p className="text-gray-600">
                I offer the best professional sessions of domination and erotic seduction, for both beginners and advanced. Obviously aimed at the demand of high-class gentlemen with distinguished taste.
            </p>
            <p className="text-gray-600 mt-4">
            I get very turned on by submissive or shy men. There is as a beauty in your
            vulnerability that I like. Seeing you on your knees ready to be instructed and
            to fulfill my wish, knowing that I can do what I want with you, is extremely exciting.
            I will tell you exactly how to arouse me and I will use you for my sexual pleasure.
            </p>
          </div>
        </div>
      </div>

      {/* General Info */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-bold mb-4">General</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <FaUserAlt className="mr-2" />
            <span>Independent Female Escort</span>
          </div>
          <div className="flex items-center">
            <FaFlag className="mr-2" />
            <span>British</span>
          </div>
          <div className="flex items-center">
            <FaCalendarAlt className="mr-2" />
            <span>Member since 2024</span>
          </div>
        </div>
      </div>

      {/* Appearance */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-bold mb-4">Appearance</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <FaUserAlt className="mr-2" />
            <span>Age: 28</span>
          </div>
          <div className="flex items-center">
            <FaSmokingBan className="mr-2" />
            <span>Smoker: No</span>
          </div>
          <div className="flex items-center">
            <FaRulerVertical className="mr-2" />
            <span>Height: 5'2</span>
          </div>
          <div className="flex items-center">
            <FaVenusMars className="mr-2" />
            <span>Breast Size: 32 C</span>
          </div>
          <div className="flex items-center">
            <FaVenusMars className="mr-2" />
            <span>Waist: 28</span>
          </div>
          <div className="flex items-center">
            <FaVenusMars className="mr-2" />
            <span>Pubic style: No</span>
          </div>
        </div>
      </div>

      {/* Communication */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-bold mb-4">Communication</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <FaLanguage className="mr-2" />
            <span>Spoken languages: English (Fluent)</span>
          </div>
          <div className="flex items-center">
            <FaInbox className="mr-2" />
            <span>Messages: No</span>
          </div>
          <div className="flex items-center">
            <FaPhoneSlash className="mr-2" />
            <span>Out of hour calls: No</span>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Facilities</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <FaCheck className="mr-2" />
            <span>Disabled Friendly: No</span>
          </div>
          <div className="flex items-center">
            <FaCheck className="mr-2" />
            <span>Showers available: No</span>
          </div>
          <div className="flex items-center">
            <FaPlane className="mr-2" />
            <span>Outcall: Will not travel</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
