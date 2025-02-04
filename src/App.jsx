import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import SkillsSection from './components/SkillsSection'
import Footer from './components/Footer'
import './App.css' 

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <VideoSection />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default App;
