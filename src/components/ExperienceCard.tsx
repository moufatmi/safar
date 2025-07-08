import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, MessageCircle } from 'lucide-react';
import { SupabaseExperience } from '../types';

interface ExperienceCardProps {
  experience: SupabaseExperience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in booking: ${experience.title}`
    );
    window.open(`https://wa.me/${experience.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={experience.image} 
          alt={experience.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-orange-600 font-semibold">
            From {experience.price} MAD
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
          {experience.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {experience.description}
        </p>
        <div className="flex flex-col space-y-2 mb-4">
          <div className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{experience.location}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm">{experience.duration}</span>
          </div>
        </div>
        <div className="flex space-x-3">
          <Link 
            to={`/experience/${experience.id}`}
            className="flex-1 bg-gray-100 text-gray-700 text-center py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Details
          </Link>
          <button
            onClick={handleWhatsAppClick}
            className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 text-white py-2 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-200 font-medium flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Book via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;