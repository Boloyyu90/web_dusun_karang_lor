import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoDesa from "../../assets/images/logoDesaJepitu.png";
import calendar from "../../assets/images/calendar.svg"
import logoKKN from "../../assets/images/logoKKN.png";
import LazyLoadImage from '../../Components/LazyLoadImage'; // Import LazyImage component
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import landscape from "../../assets/images/GaleriImage/DSC01661.webp"
import kumpul from "../../assets/images/AssetKebersamaan/gatherImg (1).webp"
import { images, ImageGallery } from '../../Components/LazyImage/KegiatanImages'; // Import the image data and components

function Body() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleImageClick = (imageSrc) => {
    console.log("Image clicked: ", imageSrc);
    setIsFullscreen(true);
    setFullscreenImage(imageSrc);
    setIsHeaderVisible(false);
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
    setFullscreenImage(null);
    setIsHeaderVisible(true); // Menampilkan header kembali
  };
  return (
    <>
      <div className='container mx-auto p-6 md:p-12 px-4 md:px-10 mb-8'>
     
        <div className='text-black m-5 p-6 border dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
          <h1 className='text-2xl font-semibold'>Galeri Foto KKN 85 UAJY:</h1>
          <h1 className='text-2xl font-semibold'>Momen Berharga di Dusun Karanglor</h1>
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
          
          <div className='text-justify'>
          <p className='text-sm md:text-md lg:text-lg font-light mt-4 mx-auto'>
          Selama pelaksanaan KKN 85 Universitas Atma Jaya Yogyakarta di Dusun Karanglor, banyak momen berharga yang berhasil diabadikan. Dalam Galeri Foto ini, kami sajikan rangkaian kegiatan penuh kenangan yang melibatkan mahasiswa KKN bersama masyarakat dusun. Setiap foto merekam kisah kebersamaan, kerja keras, serta keceriaan selama program berlangsung.
          </p>
          <img
              src={landscape}
              alt="Kegiatan KKN"
              className="object-cover aspect-square w-[20rem] md:w-[30rem] block mx-auto cursor-pointer p-5 rounded-full " // Fully round
              onClick={() => handleImageClick(landscape)}
          />
           <p className="text-[#7DA148] dark:text-white text-xs font-light text-center">Tekan Gambar untuk Detail</p>
          <p className='text-sm md:text-md lg:text-lg font-light mt-7 mb-13'>
          Lingkungan Alam Dusun Karanglor
          Kehidupan alam Dusun Karanglor yang asri menjadi latar indah dalam setiap kegiatan KKN. Mulai dari panorama hijau ladang hingga hamparan sawah, semuanya memberikan nuansa ketenangan yang mendukung suasana kegiatan. Potret alam ini menjadi bukti kekayaan lingkungan yang kami jaga bersama warga dusun selama masa KKN.
            </p>
            <img
              src={kumpul}
              alt="Kegiatan KKN"
              className="object-cover aspect-square w-[20rem] md:w-[30rem] block mx-auto cursor-pointer p-5 rounded-full" // Fully round
              onClick={() => handleImageClick(kumpul)}
            />
             <p className="text-[#7DA148] dark:text-white text-xs font-light text-center">Tekan Gambar untuk Detail</p>
          <p className='text-sm md:text-md lg:text-lg font-light mt-2 mb-8'>
          Suasana Posko dan Kebersamaan dengan ibu-ibu
          Di lingkungan posko, kebersamaan antara mahasiswa KKN dan yang lainnya menjadi momen yang hangat. Foto-foto ini menampilkan interaksi sehari-hari di posko, diskusi santai dengan perangkat desa, hingga kegiatan informal yang mempererat hubungan kami dengan masyarakat setempat.
            </p>
            
            <div className='text-black m-2 mb-8 p-3 border dark:bg-gray-900 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
          <h1 className="text-2xl font-semibold mt-2 mb-5 text-center">Dokumentasi</h1>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            loop={true}
            autoplay={{
              delay: 3000, // Delay between slides (3 seconds)
              disableOnInteraction: false, // Keeps autoplay running even after interactions
            }}
            modules={[Navigation, Pagination, Autoplay]} // Include Autoplay module
            className="rounded-lg overflow-hidden shadow-lg"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <LazyLoadImage
                  src={image.src}
                  alt={image.alt}
                  className="border border-gray-300 dark:border-gray-700 rounded-lg w-full h-auto object-cover aspect-[16/9] cursor-pointer mb-13"
                  onClick={() => handleImageClick(image.src)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div> 

          <p className='text-sm md:text-md lg:text-lg font-light mt-2'>
          Program Kerja (Proker) KKN
          Dokumentasi pelaksanaan program kerja seperti Senam Sehat untuk ibu-ibu PKK, Bimbingan Belajar Anak, Pendampingan UMKM Migrasi E-Commerce, hingga Kumpul Karang Taruna ada di galeri ini. Setiap program kerja penuh antusiasme dan semangat gotong royong, diabadikan dalam momen kebersamaan yang memperlihatkan betapa pentingnya kolaborasi antara mahasiswa dan warga dusun.
          </p>
          <p className='text-sm md:text-md lg:text-lg font-light mt-2'>
          Galeri ini mengajak semua pengunjung untuk melihat kembali perjalanan KKN 85 UAJY di Dusun Karanglor—momen yang tak hanya mengesankan, tetapi juga sarat manfaat bagi kedua belah pihak. Mari nikmati setiap fotonya!
            </p>
            </div>
        </div>
   

      {isFullscreen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleCloseFullscreen}
        >
          <img src={fullscreenImage} alt="Full screen" className="max-w-full max-h-full" />
          <button
            onClick={handleCloseFullscreen}
            className="absolute top-5 right-5 text-white text-2xl font-bold"
          >
            &times;
          </button>
        </div>
        )}
      </div>
      
    </>
  );
}

export default Body;
