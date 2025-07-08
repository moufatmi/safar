import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold">Morocco Plug</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {/* Placeholder for the removed language switcher */}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://wa.me/212600000000" className="text-gray-400 hover:text-orange-500 transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Experiences</h3>
            <ul className="space-y-2">
              <li><Link to="/experiences" className="text-gray-400 hover:text-orange-500 transition-colors">Desert Tours</Link></li>
              <li><Link to="/experiences" className="text-gray-400 hover:text-orange-500 transition-colors">City Tours</Link></li>
              <li><Link to="/experiences" className="text-gray-400 hover:text-orange-500 transition-colors">Cooking Classes</Link></li>
              <li><Link to="/experiences" className="text-gray-400 hover:text-orange-500 transition-colors">Mountain Trekking</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="https://wa.me/212600000000" className="flex items-center space-x-2 text-gray-400 hover:text-orange-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>+212 600 000 000</span>
              </a>
              <a href="mailto:info@.commoussabfatmi.me" className="flex items-center space-x-2 text-gray-400 hover:text-orange-500 transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@moussabfatmi.me</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Morocco Plug. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;