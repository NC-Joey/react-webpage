import { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  Aos.init();
  return (
    <Fragment>
      <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/faq' element={<FAQ />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
