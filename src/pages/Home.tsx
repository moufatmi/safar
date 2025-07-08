import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ExperienceCard from '../components/ExperienceCard';
import WhySection from '../components/WhySection';
import { supabase } from '../supabaseClient';
import { SupabaseExperience } from '../types';
import { Helmet } from 'react-helmet-async';

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
      <Helmet>
        <title>Mariem Travels | Best Trips & Tours in Morocco</title>
        <meta name="description" content="Discover authentic trips, tours, and experiences in Morocco. Book your next adventure with Mariem Travels!" />
        <meta property="og:title" content="Mariem Travels | Best Trips & Tours in Morocco" />
        <meta property="og:description" content="Discover authentic trips, tours, and experiences in Morocco. Book your next adventure with Mariem Travels!" />
        <meta property="og:image" content="https://safar.moussabfatmi.me/assets/og-image.jpg" />
        <meta property="og:url" content="https://safar.moussabfatmi.me/" />
        <link rel="canonical" href="https://safar.moussabfatmi.me/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mariem Travels",
              "url": "https://safar.moussabfatmi.me",
              "logo": "https://safar.moussabfatmi.me/assets/og-image.jpg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+212698570282",
                "contactType": "customer service",
                "areaServed": "MA",
                "availableLanguage": ["English", "French", "Arabic"]
              },
              "sameAs": [
                "https://www.facebook.com/moussabfatmi",
                "https://www.instagram.com/moussabfatmi"
              ]
            }
          `}
        </script>
      </Helmet>
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
            <div className="mt-8 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              <p>
                Welcome to Morocco Plug, your gateway to the best trips in Morocco! Whether you're seeking unforgettable Morocco tours, unique desert adventures, or authentic Moroccan experiences, we connect you with the top travel opportunities across the country. Explore the magic of Morocco with our curated selection of tours, excursions, and cultural journeys. Book your next Morocco travel adventure with confidence and discover why so many travelers trust us for their Moroccan experience.
              </p>
            </div>
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