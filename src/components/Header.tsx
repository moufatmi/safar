import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Languages, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { key: 'home', path: '/' },
    { key: 'experiences', path: '/experiences' },
    { key: 'about', path: '/about' },
    { key: 'contact', path: '/contact' },
    // { key: 'suggest', path: '/suggest' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Mariem Travels</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <Link
                key={item.key}
                to={item.path}
                className={`transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-orange-600 font-semibold'
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                {item.key}
              </Link>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map(item => (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-orange-600 font-semibold'
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  {item.key}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;