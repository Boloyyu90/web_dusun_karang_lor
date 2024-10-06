import React, { useState } from 'react';
import LazyLoadImage from '../LazyLoadImage';

import jathilan1 from "../../assets/images/BeritaImage/jathilan (1).jpeg";
import jathilan2 from "../../assets/images/BeritaImage/jathilan (2).jpeg";
import jathilan3 from "../../assets/images/BeritaImage/jathilan (3).jpeg";
import jathilan4 from "../../assets/images/BeritaImage/jathilan (4).jpeg";
import jathilan5 from "../../assets/images/BeritaImage/jathilan (5).jpeg";
import jathilan6 from "../../assets/images/BeritaImage/jathilan (6).jpeg";
import jathilan7 from "../../assets/images/BeritaImage/jathilan (7).jpeg";
import jathilan8 from "../../assets/images/BeritaImage/jathilan (8).jpeg";
import jathilan9 from "../../assets/images/BeritaImage/jathilan (9).jpeg";
import jathilan10 from "../../assets/images/BeritaImage/jathilan (10).jpeg";
import jathilan11 from "../../assets/images/BeritaImage/jathilan (11).jpeg";
import jathilan12 from "../../assets/images/BeritaImage/jathilan (12).jpeg";
import jathilan13 from "../../assets/images/BeritaImage/jathilan (13).jpeg";
import jathilan14 from "../../assets/images/BeritaImage/jathilan(14).jpeg";
import jathilan15 from "../../assets/images/BeritaImage/jathilan(15).jpeg";
import jathilan16 from "../../assets/images/BeritaImage/jathilan (16).jpeg";
import jathilan17 from "../../assets/images/BeritaImage/jathilan(17).jpeg";
import jathilan18 from "../../assets/images/BeritaImage/j (1).webp";
import jathilan19 from "../../assets/images/BeritaImage/j (2).webp";
import jathilan20 from "../../assets/images/BeritaImage/j (3).webp";
import jathilan21 from "../../assets/images/BeritaImage/j (4).webp";
import jathilan22 from "../../assets/images/BeritaImage/j (5).webp";
import jathilan23 from "../../assets/images/BeritaImage/j (6).webp";
import jathilan24 from "../../assets/images/BeritaImage/j (7).webp";
import jathilan25 from "../../assets/images/BeritaImage/j (8).webp";

const images = [
  { id: 1, src: jathilan1, alt: 'Jathilan 1' },
  { id: 2, src: jathilan2, alt: 'Jathilan 2' },
  { id: 3, src: jathilan3, alt: 'Jathilan 3' },
  { id: 4, src: jathilan4, alt: 'Jathilan 4' },
  { id: 5, src: jathilan5, alt: 'Jathilan 5' },
  { id: 6, src: jathilan6, alt: 'Jathilan 6' },
  { id: 7, src: jathilan7, alt: 'Jathilan 7' },
  { id: 8, src: jathilan8, alt: 'Jathilan 8' },
  { id: 9, src: jathilan9, alt: 'Jathilan 9' },
  { id: 10, src: jathilan10, alt: 'Jathilan 10' },
  { id: 11, src: jathilan11, alt: 'Jathilan 11' },
  { id: 12, src: jathilan12, alt: 'Jathilan 12' },
  { id: 13, src: jathilan13, alt: 'Jathilan 13' },
  { id: 14, src: jathilan14, alt: 'Jathilan 14' },
  { id: 15, src: jathilan15, alt: 'Jathilan 15' },
  { id: 16, src: jathilan16, alt: 'Jathilan 16' },
  { id: 17, src: jathilan17, alt: 'Jathilan 17' },
  { id: 18, src: jathilan18, alt: 'Jathilan 18' },
  { id: 19, src: jathilan19, alt: 'Jathilan 18' },
  { id: 20, src: jathilan20, alt: 'Jathilan 18' },
  { id: 21, src: jathilan21, alt: 'Jathilan 18' },
  { id: 22, src: jathilan22, alt: 'Jathilan 18' },
  { id: 23, src: jathilan23, alt: 'Jathilan 18' },
  { id: 24, src: jathilan24, alt: 'Jathilan 18' },
  { id: 25, src: jathilan25, alt: 'Jathilan 18' },

  // Add more images here
];

// Fullscreen feature state management
const ImageGallery = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleImageClick = (src) => {
    setFullscreenImage(src); // Set the clicked image to fullscreen mode
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null); // Close fullscreen mode
  };

  return (
    <>
      {/* Render image grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map(({ id, src, alt }) => (
          <LazyLoadImage
            key={id}
            src={src}
            alt={alt}
            className="w-full h-auto object-cover aspect-[9/16] cursor-pointer"
            onClick={() => handleImageClick(src)} // Open fullscreen on click
          />
        ))}
      </div>

      {/* Fullscreen Overlay */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleCloseFullscreen} // Close fullscreen on overlay click
        >
          <img
            src={fullscreenImage}
            alt="Full screen"
            className="max-w-full max-h-full"
          />
          {/* Close button */}
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

// Export images and ImageGallery component
export { images, ImageGallery };
