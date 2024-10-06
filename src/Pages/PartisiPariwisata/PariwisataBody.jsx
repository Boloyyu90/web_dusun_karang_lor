import React, { useState } from 'react';
import logoDesa from "../../assets/images/logoDesaJepitu.png";
import logoKKN from "../../assets/images/logoKKN.png";
import calendar from "../../assets/images/calendar.svg";
import view1 from "../../assets/images/ProfilImage/gunung_1.jpeg";
import view2 from "../../assets/images/ProfilImage/bintang.jpeg";
import view3 from "../../assets/images/ProfilImage/budaya.jpeg";
import maps from "../../assets/images/ProfilImage/maps_profil.png";
import Lokasi from '../../assets/images/map.svg'
import Home from "../../assets/images/home-stay.png"
import PakWildan from "../../assets/images/pak_wildan.webp"
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function Body() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleImageClick = (imageSrc) => {
    setIsFullscreen(true);
    setFullscreenImage(imageSrc);
    setIsHeaderVisible(false); // Menyembunyikan header
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
    setFullscreenImage(null);
    setIsHeaderVisible(true); // Menampilkan header kembali
  };

  return (
    <>
      <div className='container mx-auto p-3 md:p-12 px-3 md:px-10 mb-8'>
      {isHeaderVisible && (
        <div className='text-black m-5 p-3 border dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
          <h1 className='flex justify-center text-2xl md:text-3xl font-semibold m-2'>Wildan's Homestay <img src={Home} alt="" className="h-12"/></h1>
          <div className='mx-3 mt-5'>          
            <p className='text-sm md:text-md lg:text-lg font-reg text-justify'>
             
                Selamat datang di Wildan's Homestay, destinasi penginapan terbaru di Dusun Karanglor, Desa Jepitu. Terletak di tengah-tengah keindahan alam Gunung Kidul yang asri, homestay ini menawarkan pengalaman menginap yang nyaman dan damai, jauh dari hiruk pikuk kota. Cocok bagi Anda yang ingin merasakan suasana pedesaan yang tenang, sembari menikmati keramahan lokal dan keindahan budaya sekitar, serta dengan kawasannya yang strategis dekat dengan objek wisata <strong className='font-bold'>Pantai Jungwok</strong> dan <strong className='font-bold'>Pantai Wediombo</strong> m
                enjadikan tempat ini menjadi destinasi yang pas bagi Anda.
                
            </p>
          </div>

          <div className="py-2 md:w-15 grid grid-cols-3 gap-2 text-xs font-light border-b-2 mx-4 my-5 place-items-center">
          <div className="flex flex-col items-center col-span-1">
            <img
              src={logoDesa}
              alt="Logo Desa"
              className="object-contain w-5 mb-1"
            />
            <p>Karanglor</p>
          </div>

          <div className="flex flex-col items-center col-span-1">
            <img
              src={logoKKN}
              alt="Logo KKN"
              className="object-contain w-8 mb-1"
            />
            <p>KKN 85 UAJY</p>
          </div>
          
          <div className="flex flex-col items-center col-span-1">
            <img
              src={calendar}
              alt="Calendar"
              className="w-5 mb-1"
            />
            <p>Senin, 22 Juli 2024</p>
          </div>
          </div>
          
        </div>
      )}

      
      <div className='text-black m-5 p-7 border dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className='flex flex-col items-center'>
            <h1 className='text-xl md:text-2xl font-semibold text-center mb-3 md:mb-6 lg:mb-8'>Geografis Tempuh</h1>
            <ul className="list-disc list-inside font-reg text-sm md:text-md lg:text-lg text-justify px-7">
              <li>Terletak di Kecamatan Girisubo, Kabupaten Gunung Kidul.</li>
              <li>Akses Utama Jalan: Jalan Wonogiri & Jalur Lintas Selatan</li>
              <li>Estimasi waktu tempuh <strong>(Kota Yogyakarta)</strong> : <strong> -+ 2.5 Jam/Motor dan -+3 Jam/Mobil.</strong></li>
              <li>Estimasi waktu tempuh <strong>(Kota Wonosari)</strong>: <strong>-+ 45 Menit/Motor dan -+ 1 Jam/Mobil.</strong> </li>
              <li>Estimasi waktu tempuh <strong>(Kota Wonogiri)</strong> : <strong>-+ 1 Jam/Motor dan -+ 1.5 Jam/Mobil.</strong> </li>
              <li>Estimasi waktu tempuh <strong>(Kota Pacitan)</strong> : <strong>-+ 1 Jam/Motor dan -+ 1.5 Jam/Mobil.</strong> </li>
              </ul>
              <h1 className='text-xl md:text-2xl font-semibold text-center mt-16 mb-2 md:mb-4'>Nomor Kontak</h1>
              <h1 className='text-xl font-reg text-center mb-3 md:mb-4 lg:mb-5'>083861095720(a/n Pak Wildan)</h1>
              <h1 className='text-sm font-semibold text-center mb-3'>(Atau bisa gunakan layanan Whatsapp di pojok layar Anda)</h1>
            </div>
          
          <div className="flex flex-col items-center">
            <img
              src={maps}
              alt="Sejarah Karanglor"
              className="object-cover rounded-lg aspect-square w-3/4 md:w-full cursor-pointer "
              onClick={() => handleImageClick(maps)}
            />
            <p className="text-[#7DA148] text-xs mt-2 font-light text-center">Tekan Gambar untuk Detail</p>
          </div>
      
          
          
        </div>
      </div>
      
      <div className='text-black m-5 p-3 border dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
        <div className='justify-center mx-14'>
          <h1 className='flex justify-center font-bold mt-10 md:mt-17 mb-8 md:mb-18` text-2xl md:text-3xl gap-3'>DETAIL LOKASI <img src={Lokasi} alt="" className="h-10 "/></h1>       
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.5509315680474!2d110.71273379668233!3d-8.147113053678435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bb95f8cca173b%3A0xd648ec8b81cf246c!2sWildan%20Home!5e0!3m2!1sen!2sid!4v1727629205256!5m2!1sen!2sid"
                  className="w-full h-[250px] lg:h-[1000px] border rounded-lg mb-8"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
          </div>
      </div>

      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleCloseFullscreen}
        >
          <img src={fullscreenImage} alt="Full screen" className="max-w-full max-h-full" />
        </div>
        )}
      </div>
      <div>
              <FloatingWhatsApp 
                phoneNumber="6283861095720" // WhatsApp phone number
                accountName="Wildan's Homestay" // Name of the business or individual
                avatar={PakWildan} // Optional: URL to avatar image
                statusMessage="Typically replies within minutes" // Optional: status message
                chatMessage="Selamat datang, ada yang bisa kami bantu?" // Optional: initial message
                allowClickAway={true} // Optional: allows closing the chat window by clicking away
              />
            </div>
    </>
  );
}

export default Body;
