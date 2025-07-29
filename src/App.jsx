// Refactored App.jsx
import './App.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Cocktails from './components/cocktails';
import About from './components/About';
import Art from './components/Art';
import Menu from './components/Menu';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = 'hidden';
  
    // Cleanup
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
    </main>
  );
}

export default App;
