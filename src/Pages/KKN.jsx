// src/Pages/Kegiatan.jsx
import React, { useEffect, useState } from 'react';
import Body from './KKN85UAJY/KKNBody';
import Intro from './KKN85UAJY/KKNIntro';
import Loader from '../Components/Loader';

function KKN() {
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
    <div className="w-full bg-white dark:bg-gray-900"> {/* Set full width and background color */}
      <Intro />
      <Body />
    </div>
  );
}

export default KKN;
