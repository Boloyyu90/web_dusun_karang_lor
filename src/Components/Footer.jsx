import React from 'react';
import YouTubeIcon from '../assets/images/youtube.svg';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='bg-[#7DA148] text-center p-4 text-white dark:bg-gray-800'>
      <h1 className='text-3xl font-bold'>DUSUN KARANGLOR</h1>
      <p className='mt-2 font-light text-xs md:text-md px-20 md:px-52'>
        Karanglor adalah dusun yang tenang dan harmonis di pesisir Gunung Kidul. Terkenal karena kerukunan warganya, semangat gotong royong yang kuat, dan suasana pedesaan yang penuh kedamaian. Datanglah dan rasakan kehangatan kerukunan yang murni di setiap sudutnya.
      </p>
      <div className='flex justify-center m-4'>
        <Link to="https://www.youtube.com/@DusunKaranglorGunungKidul" target="_blank" rel="noopener noreferrer">
          <img src={YouTubeIcon} alt="YouTube" className="w-8 h-8 mx-2 cursor-pointer" />
        </Link>
      
      </div>
      <p className='mt-4 font-med text-xs md:text-lg'>Karang Lor, Jepitu, Kec. Girisubo, Kabupaten Gunung Kidul, Daerah Istimewa Yogyakarta.</p>
      <p className='my-6 font-med text-xs'>© 2024 KKN 85 UAJY. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
