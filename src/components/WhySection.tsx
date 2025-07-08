import React from 'react';
import { Users, Shield, Star, MessageCircle } from 'lucide-react';

const WhySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Morocco Plug?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We connect you with the best local guides and unique experiences across Morocco.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <Users className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Local Experts</h3>
            <p className="text-gray-600 text-center">All experiences are led by trusted local guides.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <Shield className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Safe & Secure</h3>
            <p className="text-gray-600 text-center">Your safety and satisfaction are our top priorities.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <Star className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Top Rated</h3>
            <p className="text-gray-600 text-center">Handpicked experiences with excellent reviews.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <MessageCircle className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Easy Booking</h3>
            <p className="text-gray-600 text-center">Book directly with guides, no middlemen or hidden fees.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;