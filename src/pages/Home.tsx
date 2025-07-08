import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ExperienceCard from '../components/ExperienceCard';
import WhySection from '../components/WhySection';
import { supabase } from '../supabaseClient';
import { SupabaseExperience } from '../types';

const Home: React.FC = () => {
  const [featuredExperiences, setFeaturedExperiences] = useState<SupabaseExperience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeatured = async () => {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from('experiences')
        .select('*')
        .eq('featured', true)
        .order('id', { ascending: true });
      if (error) {
        setError('Failed to fetch featured experiences.');
        setFeaturedExperiences([]);
      } else {
        setFeaturedExperiences(data || []);
      }
      setLoading(false);
    };
    fetchFeatured();
  }, []);

  return (
    <>
      <Hero />
      
      {/* Featured Experiences */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked, most popular experiences!
            </p>
          </div>
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Loading featured experiences...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500 text-lg">{error}</p>
            </div>
          ) : featuredExperiences.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No featured experiences found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredExperiences.map(experience => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          )}
          <div className="text-center mt-12">
            <Link
              to="/experiences"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              See All Experiences
            </Link>
          </div>
        </div>
      </section>

      <WhySection />
    </>
  );
};

export default Home;