import React from 'react'
import LazyLoadImage from '../../LazyLoadImage'

import nari1 from "../../../assets/images/AssetKebersamaan/gatherImg (5).webp"

const images = [
  { id: 1, src: nari1, alt: 'nari1' },

];

const TariDayak= () => {
  return (
    <>
      {images.map(({ id, src, alt }) => (
        <LazyLoadImage
          key={id}
          src={src}
          alt={alt}
          className="w-full h-auto object-cover cursor-pointer"
        />
      ))}
    </>
  );
};


export default TariDayak ;