import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Beranda from './Pages/Beranda';
import Profil from './Pages/Profil';
import Berita from './Pages/Berita';
import Kegiatan from './Pages/Kegiatan';
import FAQ from './Pages/FAQ';
import Galeri from './Pages/Galeri';
import KKN from './Pages/KKN';
import Pariwisata from './Pages/Pariwisata';
import { Helmet } from "react-helmet";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const darkModePreference = localStorage.getItem('dark') === 'true';
    setIsDarkMode(darkModePreference);

    // Add or remove 'dark' class to the html element
    if (darkModePreference) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Function to toggle dark mode
  const handleThemeSwitch = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('dark', !isDarkMode);

    // Add or remove 'dark' class to the html element
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dusun Karanglor</title>
        <link rel="canonical" href="http://karanglor.com/" />
      </Helmet>
      <div className='dark:bg-red-900'>
      <Header />

      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/kegiatan" element={<Kegiatan />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/kkn" element={<KKN />} />
        <Route path="/pariwisata" element={<Pariwisata />} />
      </Routes>


      <div className="fixed bottom-5 right-5">
        <button
          type="button"
          className="text-white bg-[#7DA148] hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-[#801C1C] dark:hover:bg-red-700 dark:focus:ring-red-800"
          onClick={handleThemeSwitch}
        >
          {isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>

        <Footer />
        </div>
    </Router>
  );
}

export default App;
