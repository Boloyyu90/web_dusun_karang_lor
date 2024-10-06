import React, { useState } from 'react';
import logoDesa from "../../assets/images/logoDesaJepitu.png";
import logoKKN from "../../assets/images/logoKKN.png";
import calendar from "../../assets/images/calendar.svg";
import view1 from "../../assets/images/ProfilImage/gunung_1.jpeg";
import view2 from "../../assets/images/ProfilImage/bintang.jpeg";
import view3 from "../../assets/images/ProfilImage/budaya.jpeg";
import maps from "../../assets/images/ProfilImage/maps_profil.png";
import { Link } from "react-router-dom";

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
      <div className='container mx-auto p-6 md:p-12 px-4 md:px-10 mb-8'>
      {isHeaderVisible && (
        <div className='text-black dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700 m-5 p-3 border rounded-md bg-white bg-opacity-80'>
          <h1 className='text-2xl md:text-2xl font-semibold'>Menelusuri Jejak Sejarah Dusun Karanglor</h1>
          <div className='mx-3 mt-5'>          
            <p className='text-sm md:text-md lg:text-lg font-reg text-justify'>
              Hai sobat pengunjung Dusun Karang Lor Virtual! Siapa yang siap untuk perjalanan waktu? Kali ini, Kelompok 13 KKN 85 UAJY mengajak kalian semua untuk mengenal lebih dekat Dusun Karanglor—sebuah dusun kecil di Girisubo, Gunung Kidul, yang kaya akan sejarah dan tradisi. Yuk, kita mulai petualangan kita dengan menggali cerita-cerita menarik dari masa lalu!
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
          </div>
         
          <div className="flex flex-col items-center">
            <img
              src={maps}
              alt="Sejarah Karanglor"
              className="object-cover rounded-lg aspect-square w-3/4 md:w-full cursor-pointer "
              onClick={() => handleImageClick(maps)}
            />
            <p className="text-[#7DA148] dark:text-white text-xs mt-2 font-light text-center">Tekan Gambar untuk Detail</p>
          </div>
      
          
          
        </div>
      </div>
      
      <div className='text-black m-5 p-7 border dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
        <h1 className='text-xl md:text-2xl font-semibold mb-3 md:mb-6 lg:mb-8 text-center'>Sejarah yang Mengakar di Tanah Karst</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <img
              src={view1}
              alt="Sejarah Karanglor"
              className="object-cover rounded-lg aspect-square w-3/4 md:w-[24rem] cursor-pointer"
              onClick={() => handleImageClick(view1)}
            />
            <p className="text-[#7DA148] dark:text-white text-xs mt-2 font-light justify-center">Gambar 2.Pemandangan alami yang memukau</p>
          </div>
          <div>
            <p className="text-sm md:text-md lg:text-lg font-reg text-justify px-7">
              Karanglor mungkin terlihat seperti desa kecil yang tenang, tapi jangan salah—dusun ini menyimpan banyak cerita dari masa lalu. Terletak di wilayah karst yang unik, Karanglor sudah ada sejak zaman dulu kala. Desa ini pertama kali dihuni oleh sepasang suami istri petani tangguh yang berjuang melawan kerasnya tanah berbatu untuk menanam padi, jagung, dan tanaman lain. Walaupun tantangan alamnya cukup berat, semangat pantang menyerah mereka menjadikan Karanglor tetap berdiri kokoh, hingga sekarang dihuni lebih dari 300 penduduknya yang senantiasa ramah dan menjunjung tinggi nilai tradisi lokal.
            </p>
          </div>
        </div>

        <h1 className='text-xl md:text-2xl text-center font-semibold mt-12 mb-3 md:mb-6 lg:mb-8'>Tradisi yang Terjaga dengan Cinta</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className='text-sm md:text-md lg:text-lg font-reg text-justify px-7'>
              Masyarakat Karanglor adalah penjaga tradisi yang luar biasa! Di sini, budaya gotong royong bukan sekadar kata-kata, tapi sudah menjadi gaya hidup sehari-hari. Mereka masih merayakan berbagai upacara adat dengan penuh semangat, seperti slametan desa, yang menghubungkan mereka dengan leluhur dan alam sekitar. Tari-tarian tradisional, musik gamelan, dan ritual keagamaan masih sering kita jumpai di setiap sudut dusun, mengingatkan kita betapa pentingnya menjaga warisan budaya.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={view3}
              alt="Sejarah Karanglor"
              className="object-cover rounded-lg aspect-square w-3/4 md:w-[24rem] cursor-pointer"
              onClick={() => handleImageClick(view3)}
            />
            <p className='text-[#7DA148] dark:text-white text-xs mt-2 font-light'>Gambar 3. Pertunjukan Jathilan</p>
          </div>
        </div>

        <h1 className='text-xl md:text-2xl font-semibold mt-12 mb-3 md:mb-6 lg:mb-8 text-center'>Menghadapi Masa Depan dengan Optimisme</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <img
              src={view2}
              alt="Sejarah Karanglor"
              className="object-cover rounded-lg aspect-square w-3/4 md:w-[24rem] cursor-pointer"
              onClick={() => handleImageClick(view2)}
            />
            <p className='text-[#7DA148] dark:text-white text-xs mt-2 font-light'>Gambar 4. Suasana Malam yang Amat Syahdu</p>
          </div>
          <div>
            <p className='text-sm md:text-md lg:text-lg font-reg text-justify px-7'>
              Seiring berjalannya waktu, Karanglor tak hanya bertahan, tapi juga berkembang dengan penuh optimisme. Setelah Indonesia merdeka, dusun ini mengalami banyak perubahan positif. Jalan-jalan mulai dibangun, sekolah dan puskesmas hadir untuk melayani warga, dan berbagai program desa terus diupayakan untuk meningkatkan kesejahteraan masyarakat. Meskipun begitu, warga Karanglor tetap setia pada prinsip mereka: menjaga keseimbangan antara perkembangan dan pelestarian lingkungan serta budaya. Baca Selengkapnya di Website Resmi Desa Jepitu.
            </p>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center text-black p-8 border dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
        <Link to="https://desajepitu.my.id/" class="inline-flex items-center px-8 py-4 text-sm font-medium text-center text-white bg-[#7DA148] dark:bg-[#801C1C] rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-200" target="_blank" rel="noopener noreferrer">
          <p className='text-2xl font-semibold'>WEBSITE DESA JEPITU</p>
        </Link>
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
    </>
  );
}

export default Body;
