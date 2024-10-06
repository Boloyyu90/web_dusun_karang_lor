// src/Components/LazyLoadImage.jsx
import React, { useRef, useState, useEffect } from 'react';

const LazyLoadImage = ({ src, alt, className, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div className={className} ref={imgRef}>
      {isLoaded ? (
        <img src={src} alt={alt} className="w-full h-full object-cover cursor-pointer" onClick={onClick} />
      ) : (
        <div className="w-full h-full bg-gray-200 animate-pulse"></div> // Placeholder while loading
      )}
    </div>
  );
};

export default LazyLoadImage;
