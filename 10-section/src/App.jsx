import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Productive from "./components/Productive";
import Testimonials from "./components/Testimonials";
import EarlyAccess from "./components/EarlyAccess";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (localStorage.getItem('color-theme')) {
      return localStorage.getItem('color-theme') === 'dark';
    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <section>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Hero darkMode={darkMode} />
      <Features />
      <Productive />
      <Testimonials />
      <EarlyAccess />
      <Footer />
    </section>
  );
};

export default App;