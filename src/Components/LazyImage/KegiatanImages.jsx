import React, { useState } from 'react';
import LazyLoadImage from '../LazyLoadImage';

// Import the new images based on the naming in the screenshot you uploaded
import kkn1 from "../../assets/images/KegiatanImage/kkn (1).webp";
import kkn2 from "../../assets/images/KegiatanImage/kkn (2).webp";
import kkn3 from "../../assets/images/KegiatanImage/kkn (3).webp";
import kkn4 from "../../assets/images/KegiatanImage/kkn (4).webp";
import kkn5 from "../../assets/images/KegiatanImage/kkn (5).webp";
import kkn6 from "../../assets/images/KegiatanImage/kkn (6).webp";
import kkn7 from "../../assets/images/KegiatanImage/kkn (7).webp";
import kkn8 from "../../assets/images/AssetKebersamaan/gatherImg (1).webp"
import kkn9 from "../../assets/images/AssetKebersamaan/gatherImg (2).webp"
import kkn10 from "../../assets/images/AssetKebersamaan/gatherImg (3).webp"
import kkn11 from "../../assets/images/AssetKebersamaan/gatherImg (4).webp"
import kkn12 from "../../assets/images/AssetKebersamaan/gatherImg (5).webp"
import kkn13 from "../../assets/images/AssetKebersamaan/gatherImg (6).webp"
import kkn14 from "../../assets/images/AssetKebersamaan/gatherImg (7).webp"
import kkn15 from "../../assets/images/AssetKebersamaan/gatherImg (8).webp"
import kkn16 from "../../assets/images/AssetKebersamaan/gatherImg (9).webp"
import kkn17 from "../../assets/images/AssetKebersamaan/gatherImg (10).webp"

const images = [
  { id: 1, src: kkn1, alt: 'KKN 1' },
  { id: 2, src: kkn2, alt: 'KKN 2' },
  { id: 3, src: kkn3, alt: 'KKN 3' },
  { id: 4, src: kkn4, alt: 'KKN 4' },
  { id: 5, src: kkn5, alt: 'KKN 5' },
  { id: 6, src: kkn6, alt: 'KKN 6' },
  { id: 7, src: kkn7, alt: 'KKN 7' },
  { id: 8, src: kkn8, alt: 'KKN 8' },
  { id: 10, src: kkn10, alt: 'KKN 9' },
  { id: 11, src: kkn11, alt: 'KKN 10' },
  { id: 12, src: kkn12, alt: 'KKN 11' },
  { id: 13, src: kkn13, alt: 'KKN 12' },
  { id: 14, src: kkn14, alt: 'KKN 13' },
  { id: 15, src: kkn15, alt: 'KKN 14' },
  { id: 16, src: kkn16, alt: 'KKN 15' },
  { id: 17, src: kkn17, alt: 'KKN 16' },
  // Add more images here if necessary
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
