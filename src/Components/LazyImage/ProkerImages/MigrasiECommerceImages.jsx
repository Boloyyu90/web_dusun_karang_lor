import React, { useState } from 'react';
import LazyLoadImage from '../../LazyLoadImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // For Swiper modules
import 'swiper/swiper-bundle.css'; // Swiper styles

import migrasi1 from "../../../assets/images/KegiatanImage/mgrsi (1).webp"
import migrasi2 from "../../../assets/images/KegiatanImage/mgrsi (2).webp"
import migrasi3 from "../../../assets/images/KegiatanImage/mgrsi (3).webp"
import migrasi4 from "../../../assets/images/KegiatanImage/mgrsi (4).webp"
import migrasi5 from "../../../assets/images/KegiatanImage/mgrsi (5).webp"
import migrasi6 from "../../../assets/images/KegiatanImage/mgrsi (6).webp"
import migrasi7 from "../../../assets/images/KegiatanImage/mgrsi (7).webp"
import migrasi8 from "../../../assets/images/KegiatanImage/mgrsi (8).webp"
import migrasi9 from "../../../assets/images/KegiatanImage/mgrsi (9).webp"
import migrasi10 from "../../../assets/images/KegiatanImage/mgrsi (10).webp"

const images = [
  { id: 1, src: migrasi1, alt: 'migrasi' },
  { id: 2, src: migrasi2, alt: 'migrasi' },
  { id: 3, src: migrasi3, alt: 'migrasi' },
  { id: 4, src: migrasi4, alt: 'migrasi' },
  { id: 5, src: migrasi5, alt: 'migrasi' },
  { id: 6, src: migrasi6, alt: 'migrasi' },
  { id: 7, src: migrasi7, alt: 'migrasi' },
  { id: 8, src: migrasi8, alt: 'migrasi' },
  { id: 9, src: migrasi9, alt: 'migrasi' },
  { id: 10, src: migrasi10, alt: 'migrasi' },
  

];

const MigrasiUMKM = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleImageClick = (src) => {
    setFullscreenImage(src); // Open the clicked image in fullscreen
    document.body.style.overflow = 'hidden'; // Disable scrolling
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null); // Close fullscreen
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="rounded-lg overflow-hidden shadow-lg"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <LazyLoadImage
              src={image.src}
              alt={image.alt}
              className="border border-gray-300 dark:border-gray-700 rounded-lg w-full h-auto object-cover aspect-[16/9] cursor-pointer"
              onClick={() => handleImageClick(image.src)} // Handle fullscreen
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {fullscreenImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80" 
          onClick={handleCloseFullscreen} // Close fullscreen on click
        >
          <img
            src={fullscreenImage}
            alt="Full screen"
            className="max-w-full max-h-full object-contain"
          />
          <button
            onClick={handleCloseFullscreen}
            className="absolute top-5 right-5 text-white text-2xl font-bold"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default MigrasiUMKM;
