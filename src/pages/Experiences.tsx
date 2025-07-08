import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import ExperienceCard from '../components/ExperienceCard';
import { supabase } from '../supabaseClient';
import { SupabaseExperience } from '../types';
import { Helmet } from 'react-helmet-async';

const Experiences: React.FC = () => {
  const [experiences, setExperiences] = useState<SupabaseExperience[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from('experiences')
        .select('*')
        .order('id', { ascending: true });
      if (error) {
        setError('Failed to fetch experiences.');
        setExperiences([]);
      } else {
        setExperiences(data || []);
      }
      setLoading(false);
    };
    fetchExperiences();
  }, []);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'desert', label: 'Desert' },
    { id: 'city', label: 'City' },
    { id: 'cooking', label: 'Cooking' },
    { id: 'mountains', label: 'Mountains' }
  ];

  const filteredExperiences = experiences.filter(experience => {
    const matchesSearch = experience.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      experience.description.toLowerCase().includes(searchTerm.toLowerCase());
    // For demo, category filter is by keyword in title
    const matchesCategory = selectedCategory === 'all' || 
      experience.title.toLowerCase().includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Experiences in Morocco | Mariem Travels</title>
        <meta name="description" content="Browse and book the best experiences, tours, and trips in Morocco. Find your next adventure!" />
        <meta property="og:title" content="Experiences in Morocco | Mariem Travels" />
        <meta property="og:description" content="Browse and book the best experiences, tours, and trips in Morocco. Find your next adventure!" />
        <meta property="og:image" content="https://safar.moussabfatmi.me/assets/og-image.jpg" />
        <meta property="og:url" content="https://safar.moussabfatmi.me/#/experiences" />
        <link rel="canonical" href="https://safar.moussabfatmi.me/#/experiences" />
      </Helmet>
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Experiences
          </h1>
          <p className="text-gray-600">
            {loading ? 'Loading...' : `${experiences.length} unique experiences awaiting you`}
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search experiences..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Loading experiences...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500 text-lg">{error}</p>
          </div>
        ) : filteredExperiences.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No experiences found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExperiences.map(experience => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Experiences;