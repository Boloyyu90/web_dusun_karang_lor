import React, { useEffect, useState } from 'react';
import Body from './PartisiBeranda/BerandaBody';
import Intro from './PartisiBeranda/BerandaIntro';
import Loader from '../Components/Loader';


function Beranda() {
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

export default Beranda;
