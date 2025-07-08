import React from 'react';
import { Heart, Globe, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Morocco Plug
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Morocco Plug connects travelers with authentic local experiences and guides across Morocco. Our mission is to make your journey unforgettable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 rounded-lg shadow-md p-8 flex flex-col items-center">
            <Heart className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Passion for Morocco</h3>
            <p className="text-gray-600 text-center">We love Morocco and want to share its beauty and culture with the world.</p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-md p-8 flex flex-col items-center">
            <Globe className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Global Community</h3>
            <p className="text-gray-600 text-center">Join a community of travelers and guides from around the world.</p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-md p-8 flex flex-col items-center">
            <Users className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Local Experts</h3>
            <p className="text-gray-600 text-center">All experiences are led by trusted local guides.</p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-md p-8 flex flex-col items-center">
            <Award className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Quality & Trust</h3>
            <p className="text-gray-600 text-center">We handpick and verify every experience for quality and safety.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;