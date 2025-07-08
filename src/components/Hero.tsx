import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-orange-100 to-red-100 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Authentic Morocco
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
            Unique experiences, local guides, and unforgettable adventures. Book your next journey with Morocco Plug.
          </p>
          <Link
            to="/experiences"
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Experiences
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-end">
          <img
            src="https://images.pexels.com/photos/3889830/pexels-photo-3889830.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Sahara Desert Adventure"
            className="w-full max-w-md rounded-3xl shadow-2xl mb-6"
          />
          <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="font-semibold text-gray-800">4.8/5</span>
            <span className="text-gray-500">(200+ reviews)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;