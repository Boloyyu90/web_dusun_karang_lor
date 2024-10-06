// src/Pages/Profil.jsx
import React, { useEffect, useState } from 'react';
import Intro from './PartisiProfil/ProfilIntro';
import Body from './PartisiProfil/ProfilBody';
import Loader from '../Components/Loader';

function Profil() {
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

export default Profil;
