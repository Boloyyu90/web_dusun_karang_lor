import React from 'react';
import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image1 from '../../assets/images/carousel/DSC01491.png';
import Image2 from '../../assets/images/carousel/DSC01492.png';
import Image3 from '../../assets/images/carousel/DSC01497.png';
import Image4 from '../../assets/images/carousel/DSC01503.png';
import Image5 from '../../assets/images/KegiatanImage/kkn (1).webp';
import Image6 from '../../assets/images/ProfilImage/bintang.jpeg'
import Image7 from '../../assets/images/carousel/gunung_1.jpeg';
import Image8 from '../../assets/images/carousel/view (1).webp';
import Image9 from '../../assets/images/carousel/view (2).webp';
import Image10 from '../../assets/images/carousel/view (3).webp';
import Image11 from '../../assets/images/carousel/view (4).webp';
import Image12 from '../../assets/images/carousel/view (5).webp';
import Image13 from '../../assets/images/carousel/view (6).webp';
import Image14 from '../../assets/images/carousel/view (7).webp';
import Image15 from '../../assets/images/carousel/view (8).webp';


const Intro = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13, Image14, Image15];

  return (
    <div className="relative overflow-hidden h-[20rem] md:h-[30rem] lg:h-[35rem]"> {/* Adjusted height */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative h-[20rem] md:h-[30rem] lg:h-[35rem]"> {/* Adjusted height */}
            <LazyLoadImage
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-start p-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-white text-left"
        >
          <p className="text-xs md:text-lg lg:text-2xl max-w-2xl font-light dark:text-[#801C1C] text-[#A7CA73]">ꦏꦼꦩꦼꦒꦲꦤ꧀ꦱꦼꦣꦼꦂꦲꦤ</p>
          <h3 className="text-2xl md:text-3xl lg:text-5xl font-semibold">Kemegahan Sederhana,</h3>
          <h3 className="text-2xl md:text-3xl lg:text-5xl font-semibold">Kebahagiaan Murni</h3>
          <p className="text-xs md:text-lg lg:text-2xl max-w-2xl font-light dark:text-[#801C1C] text-[#A7CA73]">ꦏꦼꦧꦲꦒꦶꦪꦄꦤ꧀ꦩꦸꦂꦤꦶ</p>
          <p className="mt-4 text-xs md:text-lg lg:text-xl max-w-2xl font-light">Di tengah gemerlap modernisasi, Dusun Karang Lor berdiri sebagai oase ketenangan yang penuh dengan kesederhanaan. Dusun ini adalah tempat dimana setiap hari adalah tentang  kerukunan dan keramah-tamahan.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
