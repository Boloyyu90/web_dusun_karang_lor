// src/Pages/Galeri.jsx
import React, { useEffect, useState } from 'react';
import Intro from './PartisiGaleri/GaleriIntro';
import Body from './PartisiGaleri/GaleriBody';
import Loader from '../Components/Loader';

function Galeri() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a loading time of 1 second
    
    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  if (loading) {
    return <Loader loading={loading} />;
  }

  return (
    <>
    <div className="w-full bg-white dark:bg-gray-900">
        <Intro />
        <Body />
      </div>
    </>
  );
}

export default Galeri;
