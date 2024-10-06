import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Image1 from '../../assets/images/carousel/DSC01491.png';
import Image2 from '../../assets/images/carousel/DSC01492.png';
import Image3 from '../../assets/images/carousel/DSC01497.png';
import Image4 from '../../assets/images/carousel/DSC01503.png';
import Maps from '../../assets/images/Peta.png';
import Berita from '../../assets/images/news.svg'
import Lokasi from '../../assets/images/map.svg'

function Body() {
  const [activeTab, setActiveTab] = useState('tourism');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleImageClick = () => {
    setIsFullscreen(true);
    setIsHeaderVisible(false);
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
    setIsHeaderVisible(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [Image1, Image2, Image3, Image4];

  return (
    <>
       <div className="container mx-auto w-full max-w-full p-6 md:p-12 mb-8 dark:bg-gray-900 px-0 flex justify-center items-center min-h-screen">
       <div className="text-black dark:text-white m-5 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80 dark:bg-gray-800 w-full max-w-[90rem]">
      {isHeaderVisible && (
        <div className='text-black m-5 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 dark:text-white bg-opacity-80 p-4 md:p-10'>
          <h1 className='text-2xl md:text-3xl font-bold'>Selamat Datang di Dusun Karanglor</h1>
          <p className='text-sm md:text-md font-light mt-2 text-justify mb-5'>
          Selamat datang di Dusun Karang Lor, tempat di mana kebersamaan adalah fondasi kehidupan. Lebih dari sekadar tempat tinggal, Karang Lor adalah rumah bagi jiwa-jiwa yang saling terikat dalam semangat gotong royong dan kekeluargaan. Di sini, kami percaya bahwa kebahagiaan sejati tumbuh dari kebersamaan, di mana setiap warga saling mendukung, menginspirasi, dan membantu satu sama lain. Dalam setiap langkah kecil, terselip harapan besar untuk masa depan yang lebih baik melalui harmoni dan solidaritas antar warga.
          </p>

          <div>
            {/* Add YouTube Video here */}
            <div className="my-5">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/fUGtSMS3Rrg?start=130"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-64 md:h-96 rounded-md"
              ></iframe>
            </div>
          </div>

          <h1 className='text-2xl md:text-3xl font-bold mt-10'>Sekilas Mengenai Karanglor</h1>
          <p className='text-sm md:text-md font-light mt-2 text-justify'>
          Dusun Karanglor, yang terletak di Desa Jepitu, Kecamatan Girisubo, Kabupaten Gunung Kidul, Daerah Istimewa Yogyakarta, merupakan sebuah dusun yang menyimpan potensi besar di berbagai bidang. Didukung oleh semangat gotong royong yang kuat dan kebersamaan yang terjalin erat antar warga, dusun ini terus berupaya untuk berkembang secara berkelanjutan. Dengan memanfaatkan sumber daya yang ada, serta inovasi yang lahir dari kerja sama warga, Dusun Karanglor diharapkan mampu meningkatkan kesejahteraan masyarakatnya, membuka peluang baru, dan menciptakan perubahan positif bagi generasi mendatang.
          </p>
          
          <div className='p-3'>
            <img src={Maps} alt="" onClick={handleImageClick} />
            <p className='my-2 ms-2 text-xs font-thin text-[#7DA148] dark:text-white  flex justify-center'>Tekan Gambar untuk Detail</p>
          </div>

          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" role="tablist">
              <li className="mr-2" role="presentation">
                <button
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'tourism' ? 'border-[#7DA148] text-[#7DA148]' : 'border-transparent text-[#7DA148] dark:text-white hover:text-[#7DA148] dark:hover:text-white hover:border-gray-200'}`}
                  id="tourism-tab"
                  type="button"
                  role="tab"
                  onClick={() => handleTabClick('tourism')}
                  aria-controls="tourism"
                  aria-selected={activeTab === 'tourism'}
                >
                  Pariwisata
                </button>
              </li>
              <li className="mr-2" role="presentation">
                <button
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'micro-enterprise' ? 'border-[#7DA148] text-[#7DA148]' : 'border-transparent text-[#7DA148] dark:text-white hover:text-[#7DA148] dark:bg-[#801C1C] dark:hover:bg-red-700 hover:border-gray-200 dark:hover:border-gray-800'}`}
                  id="micro-enterprise-tab"
                  type="button"
                  role="tab"
                  onClick={() => handleTabClick('micro-enterprise')}
                  aria-controls="micro-enterprise"
                  aria-selected={activeTab === 'micro-enterprise'}
                >
                  UMKM
                </button>
              </li>
              <li className="mr-2" role="presentation">
                <button
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'culture' ? 'border-[#7DA148] text-[#7DA148]' : 'border-transparent text-[#7DA148] dark:text-white hover:text-[#7DA148] dark:bg-[#801C1C] dark:hover:bg-red-700 hover:border-gray-200'}`}
                  id="culture-tab"
                  type="button"
                  role="tab"
                  onClick={() => handleTabClick('culture')}
                  aria-controls="culture"
                  aria-selected={activeTab === 'culture'}
                >
                  Kebudayaan
                </button>
              </li>
            </ul>
          </div>
          <div id="default-tab-content">
            <div className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-900  ${activeTab === 'tourism' ? '' : 'hidden'}`} id="tourism" role="tabpanel" aria-labelledby="tourism-tab">
                <p className="text-sm md:text-md text-black text-justify dark:text-white">Dusun Karanglor memiliki potensi pariwisata yang besar dengan keindahan alam dan budaya lokalnya. Nantinya, dusun ini akan menghadirkan homestay bagi para wisatawan, memberikan kesempatan bagi pengunjung untuk merasakan kehidupan dusun yang autentik dan keramahan penduduk setempat. Dengan lokasi strategisnya yang dekat dengan pantai (Pantai Wediombo, Pantai Jungwok, dan Pantai Sedahan). Homestay di Karanglor tidak hanya akan meningkatkan daya tarik wisata, tetapi juga membantu memajukan perekonomian lokal melalui sektor pariwisata.</p>
                <Link to='/pariwisata' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#7DA148] rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-200 mt-4 dark:bg-[#801C1C]">Baca selengkapnya</Link>
            </div>
            
            <div className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-900 ${activeTab === 'micro-enterprise' ? '' : 'hidden'}`} id="micro-enterprise" role="tabpanel" aria-labelledby="micro-enterprise-tab">
                <p className="text-sm md:text-md text-black text-justify dark:text-white">Dusun Karanglor, sebuah dusun yang terletak di tepi perbukitan Gunung Kidul, tidak hanya menarik dengan keindahan alamnya, tetapi juga memiliki potensi besar dalam pengembangan Usaha Mikro, Kecil, dan Menengah (UMKM). Melalui pemanfaatan sumber daya lokal dan kearifan tradisional, Dusun Karanglor memiliki peluang yang sangat menjanjikan untuk memajukan perekonomian lokalnya.t yang ramah, tetapi juga menawarkan berbagai peluang yang melimpah.</p>
                <Link to='/kegiatan' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#7DA148] rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-200 mt-4 dark:bg-[#801C1C]">Baca selengkapnya</Link>
            </div>
            <div className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-900 ${activeTab === 'culture' ? '' : 'hidden'}`} id="culture" role="tabpanel" aria-labelledby="culture-tab">
                <p className="text-sm md:text-md text-black text-justify dark:text-white">Dusun Karanglor menyimpan kekayaan budaya yang luar biasa, mulai dari tradisi seni hingga upacara adat yang diwariskan secara turun-temurun. Dengan pengembangan sektor kebudayaan, dusun ini memiliki potensi besar untuk menarik minat wisatawan yang ingin mengeksplorasi keunikan budaya lokal. Homestay yang akan dibangun di Karanglor juga akan menjadi sarana bagi para pengunjung untuk merasakan langsung kehidupan budaya sehari-hari, memberikan pengalaman yang mendalam dan otentik. Inisiatif ini diharapkan dapat melestarikan tradisi sekaligus memberikan kontribusi signifikan pada perekonomian setempat.</p>
                <Link to='/kegiatan' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#7DA148] rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-200 mt-4 dark:bg-[#801C1C]"> Baca Selengkapnya</Link>
            </div>
          </div>
        </div>
      )}

      <div className='relative'>
        <div className="overflow-hidden w-full h-[14rem] md:h-[20rem] "> 
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="relative w-full h-[14rem] md:h-[20rem]"> 
                <LazyLoadImage
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Slider>
          <div className="absolute inset-0 bg-black bg-opacity-45 flex items-center justify-center p-10 text-xl font-bold">
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="text-white text-center"
            >
           <h1 className="hidden md:block lg:text-3xl">
            Mari kenali lebih dalam tentang Dusun Karanglor, di mana kesederhanaan menjadi kekuatan, dan kebahagiaan adalah milik semua.
          </h1>

          {/* Text for medium screens */}
          <h1 className="hidden sm:block md:hidden text-md sm:text-xl">
            Jelajahi Dusun Karanglor yang penuh keindahan dan kebersamaan.
          </h1>

          {/* Text for small screens */}
          <h1 className="block sm:hidden text-sm">
            Karanglor, sederhana namun penuh kebahagiaan.
          </h1>
            </motion.div>
          </div>
        </div>
        </div>
        
      <div className='justify-center mx-14'>
        <h1 className='flex justify-center font-bold mt-16 md:mt-24 mb-12 md:mb-18` text-2xl md:text-3xl my-5 gap-3'>DETAIL LOKASI <img src={Lokasi} alt="" className="h-10 flex justify-center"/></h1>       
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4208.628831995166!2d110.71234053446065!3d-8.148528756483655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bc7dc08348e55%3A0x103a8fa8403692f6!2sBalai%20Padukuhan%20Karanglor!5e0!3m2!1sid!2sid!4v1721350570475!5m2!1sid!2sid"
                  className="w-full h-[250px] lg:h-[1000px] border rounded-lg"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
      </div>

      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleCloseFullscreen}
        >
          <img src={Maps} alt="Full screen" className="max-w-full max-h-full" />
        </div>
      )}

     
        <div className='flex justify-center mb-5 mx-auto'>
          <h1 className='font-bold mt-16 text-2xl md:text-3xl gap-5 inline-flex '>BERITA TERKINI <img src={Berita} alt="" className="h-10 flex justify-center"/></h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 place-items-center px-10 lg:px-52 py-4 md:py-8">
         
        <div className="max-w-sm bg-white border dark:bg-gray-800 dark:text-white dark:border-gray-700 border-gray-200 rounded-lg shadow mx-2">
          <Link to="/pariwisata">
            <img className="rounded-t-lg h-80 w-full object-cover" src="src/assets/images/beranda (4).webp" alt="" />
          </Link>
          <div className="p-5">
            <Link to="/pariwisata">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">Pariwisata - Wildan's Homestay Karanglor</h5>
            </Link>
              
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
              Jika Anda ingin menikmati liburan yang tenang dan jauh dari hiruk pikuk kota, Wildan's Homestay di Dusun Karanglor adalah pilihan sempurna...
            </p>
            <Link to="/pariwisata" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#7DA148]  dark:bg-[#801C1C] rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-200">
            Baca selengkapnya
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
          </div>
        </div>

          <div className="max-w-sm bg-white border border-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700 rounded-lg shadow mx-2">
            <Link to="/kegiatan">
              <img className="rounded-t-lg h-80 w-full object-cover" src="src/assets/images/beranda (3).webp" alt="" />
            </Link>
        
            <div className="p-5">
              <Link to="/kegiatan"><h5 className="mb-2 text-2xl font-bold tracking-tight">UMKM - Kerajinan Rajut Karanglor</h5></Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
              KKN 85 Universitas Atma Jaya Yogyakarta berkomitmen membantu UMKM di Dusun Karanglor berkembang lebih jauh dengan program Pendampingan Migrasi ke E-Commerce...
              </p>
              <Link to="/kegiata " className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#7DA148] dark:bg-[#801C1C] rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-200">
                Baca selengkapnya
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
          </div>
        </div>

          <div className="max-w-sm bg-white border border-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700 rounded-lg shadow mx-4">
            <Link to='/berita'>
              <img className="rounded-t-lg object-cover h-80 w-full" src="src/assets/images/beranda (1).webp" alt="" />
            </Link>
            
            <div className="p-5">
              <Link to=''><h5 className="mb-2 text-2xl font-bold tracking-tight">Kebudayaan Leluhur-Jathilan</h5></Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
              Jathilan di Karanglor adalah warisan budaya yang memadukan tari tradisional dengan semangat kebersamaan. Melalui gerakan energik dan iringan musik gamelan, Jathilan mencerminkan kearifan lokal serta kekuatan gotong royong masyarakat dalam melestarikan tradisi.
              </p>
              <Link to='/berita' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#7DA148] dark:bg-[#801C1C] rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-200">
              Baca selengkapnya
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg></Link>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700 rounded-lg shadow mx-2">
          <Link to='/kkn'> <img 
                className="rounded-t-lg h-80 w-full object-cover" 
                src="src/assets/images/beranda (2).webp" 
                alt="" 
              /></Link>
            
            <div className="p-5">
            <Link to='/kkn'>  <h5 className="mb-2 text-2xl font-bold tracking-tight">Mengenal Mahasiswa KKN 85 UAJY</h5></Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
                Kami, anak-anak KKN 85 Universitas Atma Jaya Yogyakarta, hadir untuk berkolaborasi dengan masyarakat dalam membangun desa yang lebih baik. Dengan semangat kebersamaan, kami berkomitmen untuk berkontribusi dalam berbagai kegiatan, mulai dari pemberdayaan ekonomi hingga pendidikan anak-anak. Bersama-sama, mari kita wujudkan desa yang sejahtera dan berkelanjutan.
              </p>
              <Link to='/kkn' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#7DA148] dark:bg-[#801C1C] rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-200">Baca selengkapnya
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg></Link>
            </div>
          </div>
        </div>
        </div>
        </div>
    </>
  );
}

export default Body;
