import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, DollarSign, MessageCircle, Star } from 'lucide-react';
import { supabase } from '../supabaseClient';
import { SupabaseExperience } from '../types';

const ExperienceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [experience, setExperience] = useState<SupabaseExperience | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperience = async () => {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from('experiences')
        .select('*')
        .eq('id', id)
        .single();
      if (error || !data) {
        setError('Experience not found.');
        setExperience(null);
      } else {
        setExperience(data);
      }
      setLoading(false);
    };
    fetchExperience();
  }, [id]);

  const handleWhatsAppClick = () => {
    if (!experience) return;
    const message = encodeURIComponent(
      `Hi! I'm interested in booking: ${experience.title}`
    );
    window.open(`https://wa.me/${experience.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Loading experience...</h1>
        </div>
      </div>
    );
  }

  if (error || !experience) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Experience not found</h1>
          <Link to="/experiences" className="text-orange-600 hover:text-orange-700">Back to experiences</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/experiences"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to experiences</span>
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="mb-4">
              <img
                src={experience.image}
                alt={experience.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {experience.gallery.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${experience.title} ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                />
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                {experience.title}
              </h1>
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 fill-current text-yellow-400" />
                <span className="text-sm text-gray-600">
                  {experience.rating ?? 4.8} ({experience.rating_count ?? 124})
                </span>
              </div>
            </div>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {experience.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold">{experience.location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-semibold">{experience.duration}</p>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Price</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {experience.price} <span className="font-bold text-orange-600">MAD</span>
                  </p>
                </div>
              </div>
            </div>
            {/* Booking and PDF Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <button
                onClick={handleWhatsAppClick}
                className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Book via WhatsApp</span>
              </button>
              <a
                href={experience.pdfUrl || undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 py-4 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 shadow-lg transition-all duration-300
                  ${experience.pdfUrl ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                tabIndex={experience.pdfUrl ? 0 : -1}
                aria-disabled={!experience.pdfUrl}
                onClick={e => { if (!experience.pdfUrl) e.preventDefault(); }}
              >
                <span>View Program (PDF)</span>
              </a>
            </div>
            <p className="text-sm text-gray-500 text-center mt-4">
              You will be redirected to WhatsApp to contact the guide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;