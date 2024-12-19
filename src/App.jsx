import React from 'react';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Home from './pages/Home';
import Footer from './components/Footer';
import NewsletterBox from './components/NewsletterBox';
import OurPolicy from './components/OurPolicity';

const App = () => {

  return (
    <>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <header>
          <Navbar />
        </header>

        <main>
          <section id="home" className='p-2'>
            <Home />
          </section>
          <section id="servicios" className='p-2'>
            <Services />
          </section>
          <section id="nosotros" className='p-2'>
            <About />
          </section>
          <section id="contacto" className='p-2'>
            <Contact />
          </section>
          <section className='p-2'>
            <NewsletterBox />
          </section>
          <section className='p-2'>
            <OurPolicy />
          </section>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>

  );
};

export default App;