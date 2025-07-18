import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import ExperienceDetail from './pages/ExperienceDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import SuggestExperience from './pages/SuggestExperience';
import FatmiAdmin from './pages/FatmiAdmin';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/experience/:slug" element={<ExperienceDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/fatmi" element={<FatmiAdmin />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;