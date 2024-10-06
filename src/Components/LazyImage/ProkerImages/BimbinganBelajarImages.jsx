import React, { useState } from 'react';
import LazyLoadImage from '../../LazyLoadImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // For Swiper modules
import 'swiper/swiper-bundle.css'; // Swiper styles

import bimbel1 from "../../../assets/images/KegiatanImage/bimbel (1).webp";
import bimbel2 from "../../../assets/images/KegiatanImage/bimbel (2).webp";
import bimbel3 from "../../../assets/images/KegiatanImage/bimbel (3).webp";
import bimbel4 from "../../../assets/images/KegiatanImage/bimbel (4).webp";
import bimbel5 from "../../../assets/images/KegiatanImage/bimbel (5).webp";
import bimbel6 from "../../../assets/images/KegiatanImage/bimbel (6).webp";
import bimbel7 from "../../../assets/images/KegiatanImage/bimbel (7).webp";
import bimbel8 from "../../../assets/images/KegiatanImage/bimbel (8).webp";
import bimbel9 from "../../../assets/images/KegiatanImage/bimbel (9).webp";
import bimbel10 from "../../../assets/images/KegiatanImage/bimbel (10).webp";
import bimbel11 from "../../../assets/images/KegiatanImage/hw1.webp";
import bimbel12 from "../../../assets/images/KegiatanImage/hw2.webp";
import bimbel13 from "../../../assets/images/KegiatanImage/hw3.webp";
import bimbel14 from "../../../assets/images/KegiatanImage/hw4.webp";
import bimbel15 from "../../../assets/images/KegiatanImage/hw (5).webp";
import bimbel16 from "../../../assets/images/KegiatanImage/hw (6).webp";
import bimbel17 from "../../../assets/images/KegiatanImage/hw (7).webp";
import bimbel18 from "../../../assets/images/KegiatanImage/hw (8).webp";




const images = [
  { id: 1, src: bimbel1, alt: 'bimbelImg' },
  { id: 2, src: bimbel2, alt: 'bimbelImg' },
  { id: 3, src: bimbel3, alt: 'bimbelImg' },
  { id: 4, src: bimbel4, alt: 'bimbelImg' },
  { id: 5, src: bimbel5, alt: 'bimbelImg' },
  { id: 6, src: bimbel6, alt: 'bimbelImg' },
  { id: 7, src: bimbel7, alt: 'bimbelImg' },
  { id: 8, src: bimbel8, alt: 'bimbelImg' },
  { id: 9, src: bimbel9, alt: 'bimbelImg' },
  { id: 10, src: bimbel10, alt: 'bimbelImg' },
  { id: 11, src: bimbel11, alt: 'bimbelImg' },
  { id: 12, src: bimbel12, alt: 'bimbelImg' },
  { id: 13, src: bimbel13, alt: 'bimbelImg' },
  { id: 14, src: bimbel14, alt: 'bimbelImg' },
  { id: 15, src: bimbel15, alt: 'bimbelImg' },
  { id: 16, src: bimbel16, alt: 'bimbelImg' },
  { id: 17, src: bimbel17, alt: 'bimbelImg' },
  { id: 18, src: bimbel18, alt: 'bimbelImg' },

];

const BimbelAnak = () => {
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
          className="border fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80" 
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

export default BimbelAnak;
