import React, { useState } from 'react';
import { PlusCircle, Upload, MapPin, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const SuggestExperience: React.FC = () => {
  const [formData, setFormData] = useState({
    guideName: '',
    email: '',
    phone: '',
    experienceTitle: '',
    experienceDescription: '',
    location: '',
    duration: '',
    price: '',
    category: '',
    whatsapp: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add actual form submission logic here
  };

  const categories = [
    { id: 'desert', label: 'Desert' },
    { id: 'city', label: 'City Tours' },
    { id: 'cooking', label: 'Cooking Classes' },
    { id: 'mountains', label: 'Mountain Trekking' },
    { id: 'culture', label: 'Cultural' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'relaxation', label: 'Relaxation' },
    { id: 'photography', label: 'Photography' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Suggest an Experience | Mariem Travels</title>
        <meta name="description" content="Suggest a new trip or experience in Morocco. Help us expand our collection of authentic Moroccan adventures!" />
        <meta property="og:title" content="Suggest an Experience | Mariem Travels" />
        <meta property="og:description" content="Suggest a new trip or experience in Morocco. Help us expand our collection of authentic Moroccan adventures!" />
        <meta property="og:image" content="https://safar.moussabfatmi.me/assets/og-image.jpg" />
        <meta property="og:url" content="https://safar.moussabfatmi.me/#/suggest" />
        <link rel="canonical" href="https://safar.moussabfatmi.me/#/suggest" />
      </Helmet>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <PlusCircle className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Suggest Title
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Suggest Subtitle
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                  Name *
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="guideName" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="guideName"
                      name="guideName"
                      value={formData.guideName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                      Whatsapp *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Experience Details */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                  Experience Details
                </h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="experienceTitle" className="block text-sm font-medium text-gray-700 mb-2">
                      Experience Title *
                    </label>
                    <input
                      type="text"
                      id="experienceTitle"
                      name="experienceTitle"
                      value={formData.experienceTitle}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="experienceDescription" className="block text-sm font-medium text-gray-700 mb-2">
                      Experience Description *
                    </label>
                    <textarea
                      id="experienceDescription"
                      name="experienceDescription"
                      value={formData.experienceDescription}
                      onChange={handleInputChange}
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Experience Description Placeholder"
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                        <MapPin className="w-4 h-4 inline mr-1" />
                        Location *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
                        Duration *
                      </label>
                      <input
                        type="text"
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        required
                        placeholder="Duration Placeholder"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                        <DollarSign className="w-4 h-4 inline mr-1" />
                        Price *
                      </label>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        required
                        min="0"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                        Category *
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select Category</option>
                        {categories.map(category => (
                          <option key={category.id} value={category.id}>
                            {category.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Photos Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                  Photos
                </h2>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-600 mb-2">
                    Drag and drop photos here
                  </p>
                  <p className="text-sm text-gray-500">
                    Recommended Photos
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-12 py-4 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Submit
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  Contact Within
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestExperience;