import React, { useState } from 'react';
import LazyLoadImage from '../../LazyLoadImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // For Swiper modules
import 'swiper/swiper-bundle.css'; // Swiper styles

import senam from "../../../assets/images/AssetKebersamaan/gatherImg (5).webp"
import senam1 from "../../../assets/images/KegiatanImage/senam (1).webp"
import senam2 from "../../../assets/images/KegiatanImage/senam (2).webp"
import senam3 from "../../../assets/images/KegiatanImage/senam (3).webp"
import senam5 from "../../../assets/images/KegiatanImage/senam (5).webp"
import senam6 from "../../../assets/images/KegiatanImage/senam (6).webp"
import senam7 from "../../../assets/images/KegiatanImage/senam (7).webp"
import senam8 from "../../../assets/images/KegiatanImage/senam (8).webp"
import senam9 from "../../../assets/images/KegiatanImage/senam (9).webp"
import senam10 from "../../../assets/images/KegiatanImage/senam (10).webp"
import senam11 from "../../../assets/images/KegiatanImage/senam (11).webp"
import senam12 from "../../../assets/images/KegiatanImage/senam (12).webp"
import senam13 from "../../../assets/images/KegiatanImage/senam (13).webp"
import senam14 from "../../../assets/images/KegiatanImage/senam (14).webp"
import senam15 from "../../../assets/images/KegiatanImage/senam (15).webp"
import senam16 from "../../../assets/images/KegiatanImage/senam (16).webp"
import senam17 from "../../../assets/images/KegiatanImage/senam (17).webp"
import senam18 from "../../../assets/images/KegiatanImage/senam (18).webp"
import senam19 from "../../../assets/images/KegiatanImage/senam (19).webp"
import senam20 from "../../../assets/images/KegiatanImage/senam (20).webp"
import senam21 from "../../../assets/images/KegiatanImage/senam (21).webp"
import senam22 from "../../../assets/images/KegiatanImage/senam (22).webp"
import senam23 from "../../../assets/images/KegiatanImage/senam (23).webp"
import senam24 from "../../../assets/images/KegiatanImage/senam (24).webp"
import senam25 from "../../../assets/images/KegiatanImage/senam (25).webp"
import senam26 from "../../../assets/images/KegiatanImage/senam (26).webp"
import senam111 from "../../../assets/images/KegiatanImage/senam (111).webp"
import senam27 from "../../../assets/images/KegiatanImage/senam (27).webp"

const images = [
   { id: 1, src: senam, alt: 'senamImg' },
  { id: 2, src: senam1, alt: 'senamImg' },
  { id: 3, src: senam2, alt: 'senamImg' },
  { id: 4, src: senam3, alt: 'senamImg' },
  { id: 6, src: senam5, alt: 'senamImg' },
  { id: 7, src: senam6, alt: 'senamImg' },
  { id: 8, src: senam7, alt: 'senamImg' },
  { id: 9, src: senam8, alt: 'senamImg' },
  { id: 10, src: senam9, alt: 'senamImg' },
  { id: 11, src: senam10, alt: 'senamImg' },
  { id: 12, src: senam11, alt: 'senamImg' },
  { id: 13, src: senam12, alt: 'senamImg' },
  { id: 14, src: senam13, alt: 'senamImg' },
  { id: 15, src: senam14, alt: 'senamImg' },
  { id: 16, src: senam15, alt: 'senamImg' },
  { id: 17, src: senam16, alt: 'senamImg' },
  { id: 18, src: senam17, alt: 'senamImg' },
  { id: 19, src: senam18, alt: 'senamImg' },
  { id: 20, src: senam19, alt: 'senamImg' },
  { id: 21, src: senam20, alt: 'senamImg' },
  { id: 22, src: senam21, alt: 'senamImg' },
  { id: 23, src: senam22, alt: 'senamImg' },
  { id: 24, src: senam23, alt: 'senamImg' },
  { id: 25, src: senam24, alt: 'senamImg' },
  { id: 26, src: senam25, alt: 'senamImg' },
  { id: 27, src: senam26, alt: 'senamImg' },
  { id: 28, src: senam111, alt: 'senamImg' },
  { id: 29, src: senam27, alt: 'senamImg' },

];

const SenamSehatImages = () => {
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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80" // Very high z-index
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

export default SenamSehatImages;
