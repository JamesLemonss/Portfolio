import React from 'react';
import NavBar from './sections/navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experiences from './sections/Experiences';
const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <NavBar/>
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <section className='min-h-screen' />
      <section className='min-h-screen' />
      {/* Experience */}
      {/* Testimonial */}
      {/* Contact */}
      {/* Footer */}
      </div>
  );
};

export default App;