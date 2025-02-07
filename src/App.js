import { Fragment } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Page404 from './components/Page404';
import Shop from './components/Shop';

function App() {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/faq' element={<FAQ />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/*' element={<Page404 />}/>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
