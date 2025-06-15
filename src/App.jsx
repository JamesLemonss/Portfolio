import React from 'react';
import NavBar from './sections/navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experiences from './sections/Experiences';
import Testimonial from './sections/Testimonial';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <NavBar/>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="work">
        <Projects />
      </div>
      <div id="experience">
        <Experiences />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id='contact'>
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;