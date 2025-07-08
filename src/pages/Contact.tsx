import React from 'react';
import { MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: { en: 'WhatsApp' },
      value: '+212 600 000 000',
      link: 'https://wa.me/212698570282',
      description: { en: 'Fastest way to reach us' }
    },
    {
      icon: Mail,
      title: { en: 'Email' },
      value: 'info@.commoussabfatmi.me',
      link: 'mailto:info@.commoussabfatmi.me',
      description: { en: 'For detailed inquiries' }
    },
    {
      icon: MapPin,
      title: { en: 'Location' },
      value: 'Marrakech, Morocco',
      description: { en: 'Our main headquarters' }
    },
    {
      icon: Phone,
      title: { en: 'Phone' },
      value: '+212 524 000 000',
      link: 'tel:+212524000000',
      description: { en: 'For urgent calls' }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Contact Morocco Plug | Morocco Trips & Tours</title>
        <meta name="description" content="Contact Morocco Plug for questions about trips, tours, and experiences in Morocco. We're here to help!" />
        <meta property="og:title" content="Contact Morocco Plug | Morocco Trips & Tours" />
        <meta property="og:description" content="Contact Morocco Plug for questions about trips, tours, and experiences in Morocco. We're here to help!" />
        <meta property="og:image" content="https://safar.moussabfatmi.me/assets/og-image.jpg" />
        <meta property="og:url" content="https://safar.moussabfatmi.me/#/contact" />
        <link rel="canonical" href="https://safar.moussabfatmi.me/#/contact" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              We're here to help you with any questions or concerns you might have.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {method.title.en}
                </h3>
                <p className="text-gray-600 mb-4">
                  {method.description.en}
                </p>
                {method.link ? (
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-semibold"
                  >
                    {method.value}
                  </a>
                ) : (
                  <span className="text-gray-800 font-semibold">{method.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Send us a message
            </h2>
            <p className="text-xl text-gray-600">
              We'll get back to you as soon as possible
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <div className="py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need immediate help?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us directly via WhatsApp
          </p>
          <a
            href="https://wa.me/212698570282"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-6 h-6" />
            <span>
              Open WhatsApp
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;