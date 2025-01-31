import { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>

      <Hero />
      <Footer />

    </Fragment>
  );
}

export default App;
