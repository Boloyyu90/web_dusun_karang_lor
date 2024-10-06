import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoDesa from "../assets/images/logoDesaJepitu.png";
import menuBg from "../assets/images/menu-bg.jpeg"; // Import the background image
import Button from './Button'; // Import the Button component

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Create a reference for the dropdown

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed top-2 left-0 right-0 grid w-full grid-cols-4 md:grid-cols-5 lg:grid-cols-6 h-10 md:h-30 lg:h-33 z-50">
          <div className="md:max-h-30 lg:max-h-30 col-span-3 md:col-span-4 lg:col-span-5 grid grid-cols-5 md:grid-cols-6 lg:grid-cols-10 rounded-2xl bg-[#7DA148] text-white dark:bg-gray-800 drop-shadow-md">
        
            <div className="md:max-h-30 lg:max-h-30 md:p-5 lg:p-5 col-span-4 md:col-span-3 lg:col-span-3 rounded-tr-full bg-white dark:bg-gray-700 text-[#7DA148] flex items-center">
            <Link to="/">
              <img src={logoDesa} alt="Logo" className="w-10 md:w-20 lg:w-24" />
            </Link>
              <Link to='/' className="ml-3 md:ml-5 lg:ml-5">
                <a className="block text-lg md:text-xl lg:text-2xl font-bold pt-3 dark:text-white">KARANGLOR</a>
                <a className="block text-md md:text-lg lg:text-xl font-light pb-3 dark:text-white">Jepitu, Girisubo</a>
              </Link>
            </div>

            <div className="hidden xl:flex xl:col-span-6 justify-center items-center gap-6 px-4">
              {/* Menu with Traditional Touch */}
              <Link to="/" className="text-xl md:text-2xl font-medium text-white hover:text-[#A7CA73] dark:hover:text-gray-200">
                Beranda <span className="block text-lg font-light dark:text-[#801C1C] text-[#A7CA73]">ꦧꦼꦫꦤ꧀ꦝ</span>
              </Link>
              <Link to="/profil" className="text-xl md:text-2xl font-medium text-white hover:text-[#A7CA73] dark:hover:text-gray-200">
                Profil <span className="block text-lg font-light dark:text-[#801C1C] text-[#A7CA73]">ꦥꦿꦺꦴꦥ꦳ꦶꦭ꧀</span>
              </Link>
              <Link to="/berita" className="text-xl md:text-2xl font-medium text-white hover:text-[#A7CA73] dark:hover:text-gray-200">
                Berita <span className="block text-lg font-light dark:text-[#801C1C] text-[#A7CA73]">ꦧꦼꦫꦶꦠ</span>
              </Link>
              <Link to="/kegiatan" className="text-xl md:text-2xl font-medium text-white hover:text-[#A7CA73] dark:hover:text-gray-200">
                Kegiatan <span className="block text-lg font-light dark:text-[#801C1C] text-[#A7CA73]">ꦏꦼꦒꦶꦪꦠꦤ꧀</span>
              </Link>
              <Link to="/galeri" className="text-xl md:text-2xl font-medium text-white hover:text-[#A7CA73] dark:hover:text-gray-200">
                Galeri <span className="block text-lg font-light dark:text-[#801C1C] text-[#A7CA73]">ꦒꦊꦫꦶ</span>
              </Link>
              <Link to="/faq" className="text-xl md:text-2xl font-medium text-white hover:text-[#A7CA73] dark:hover:text-gray-200">
                Pertanyaan <span className="block text-lg font-light dark:text-[#801C1C] text-[#A7CA73]">ꦥꦼꦂꦠꦚꦄꦤ꧀</span>
              </Link>
              <Link to="/kkn" className="text-xl md:text-2xl font-medium text-white hover:text-[#A7CA73] dark:hover:text-gray-200">
                KKN UAJY 85 <span className="block text-sm font-light dark:text-[#801C1C] text-[#A7CA73]">ꦏꦸꦭꦶꦪꦃꦏꦼꦂꦗꦚꦠ</span>
              </Link>
            </div>
          </div>
        <div className="xl:hidden flex justify-end items-center my-auto">
            <Button
              id="dropdownMenuIconButton"
              className="inline-flex items-center p-2 text-sm font-medium text-white bg-[#7DA148] dark:bg-gray-800 rounded-lg focus:ring-4 focus:outline-none focus:ring-[#7DA148] dark:focus:ring-[#801C1C] me-4 hover:bg-[#7DA148]"
              onClick={toggleDropdown}
            >
              <svg
                className={`w-6 h-6 transform transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16" />
                )}
              </svg>
            </Button>
          </div>

        {/* Fullscreen Dropdown for Small/Medium Screens */}
        <div
          id="dropdownDots"
          ref={dropdownRef} // Attach the ref to the dropdown
          className={`fixed inset-0 z-40 transition-transform duration-700 ease-in-out lg:hidden ${isOpen ? 'animate-slideUp' : 'animate-slideDown'} overflow-y-auto`}
          style={{
            backgroundImage: `url(${menuBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex flex-col items-center justify-center min-h-full space-y-8 py-6 bg-black bg-opacity-55 backdrop-filter backdrop-blur-x text-white">
            <div className="flex flex-col items-center">
              <img src={logoDesa} alt="Logo" className="w-24 mb-4" />
              <h2 className="text-3xl font-semibold text-white">KARANGLOR</h2>
              <p className="text-lg text-white">JEPITU, GIRISUBO</p>
            </div>
            <ul className="grid grid-cols-1 gap-y-6">
              <li className="text-center">
                <Link to="/" onClick={closeDropdown} className="text-xl font-medium hover:text-[#A7CA73]">Beranda <span className="block text-lg font-light dark:text-[#801C1C] text-[#A7CA73]">ꦧꦼꦫꦤ꧀ꦝ</span></Link>
                
              </li>
              <li className="text-center">
                <Link to="/profil" onClick={closeDropdown} className="text-xl font-medium hover:text-[#A7CA73]">Profil<span className="block text-lg font-light dark:text-[#801C1C] text-[#A7CA73]">ꦥꦿꦺꦴꦥ꦳ꦶꦭ꧀</span></Link>
              </li>
              <li className="text-center">
                <Link to="/berita" onClick={closeDropdown} className="text-xl font-medium hover:text-[#A7CA73]">Berita & Pengumuman<span className="block text-lg font-light dark:text-[#801C1C] text-[#A7CA73]">ꦧꦼꦫꦶꦠ</span></Link>
              </li>
              <li className="text-center">
                <Link to="/kegiatan" onClick={closeDropdown} className="text-xl font-medium hover:text-[#A7CA73]">Kegiatan & Acara<span className="block text-lg font-light dark:text-[#801C1C] text-[#A7CA73]">ꦏꦼꦒꦶꦪꦠꦤ꧀</span></Link>
              </li>
              <li className="text-center">
                <Link to="/galeri" onClick={closeDropdown} className="text-xl font-medium hover:text-[#A7CA73]">Galeri Foto<span className="block text-lg font-light dark:text-[#801C1C] text-[#A7CA73]">ꦒꦊꦫꦶ</span></Link>
              </li>
              <li className="text-center">
                <Link to="/faq" onClick={closeDropdown} className="text-xl font-medium hover:text-[#A7CA73]">FAQ & Bantuan<span className="block text-lg font-light dark:text-[#801C1C] text-[#A7CA73]">ꦥꦼꦂꦠꦚꦄꦤ꧀</span></Link>
              </li>
              <li className="text-center">
                <Link to="/kkn" onClick={closeDropdown} className="text-xl font-medium hover:text-[#A7CA73]"> KKN UAJY 85 <span className="block text-sm font-light dark:text-[#801C1C] text-[#A7CA73]">ꦏꦸꦭꦶꦪꦃꦏꦼꦂꦗꦚꦠ</span></Link>
              </li>
            </ul>
          </div>
          <button
            onClick={closeDropdown}
            className="absolute top-4 right-4 text-[#7DA148] hover:text-[#A7CA73] focus:outline-none"
          >
            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
