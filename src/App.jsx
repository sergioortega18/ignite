import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Home from './pages/Home';
import Footer from './components/Footer';

const App = () => {

  return (
    <div  className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/services' element={<Services />}/>      
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
      <Footer />


    </div>
  );
};

export default App;