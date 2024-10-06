import React, { useState } from 'react';
import logoDesa from "../../assets/images/logoDesaJepitu.png";
import logoKKN from "../../assets/images/logoKKN.png";
import calendar from "../../assets/images/calendar.svg";
import jathilanHead from "../../assets/images/BeritaImage/jathilan(14).jpeg";
import LazyLoadImage from '../../Components/LazyLoadImage'; // Import LazyImage component
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { images, ImageGallery } from '../../Components/LazyImage/BeritaImages'; // Import the image data and components

function Body() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleImageClick = (imageSrc) => {
    setIsFullscreen(true);
    setFullscreenImage(imageSrc);
    setIsHeaderVisible(false); // Menyembunyikan header
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
    setFullscreenImage(null);
    setIsHeaderVisible(true); // Menampilkan header kembali
  };

  return (
    <>
      <div className='container  mx-auto p-6 md:p-12 px-4 md:px-10 mb-8'>
        {isHeaderVisible && (
          <div className='text-black dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700 m-5 p-3 border rounded-md bg-white bg-opacity-80'>
            <h1 className='text-2xl md:text-3xl font-semibold'>Keajaiban Budaya di Dusun Karanglor: Perayaan Budaya Jathilan serta Makna Gotong Royong</h1>
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

            <div className='mx-3 mt-5'>
              <p className='text-sm md:text-md lg:text-lg font-reg text-justify'>
                Halo sobat virtual sekalian! Selamat datang di cerita yang penuh makna tentang pelestarian budaya lokal, yaitu pagelaran Jathilan di Dusun Karanglor. Kami, anak-anak KKN 85 UAJY Kelompok 13, berkesempatan menjadi bagian dari momen istimewa ini, di mana semangat gotong royong masyarakat bersatu untuk menjaga tradisi leluhur. Dari gemuruh musik tradisional hingga gerakan tari yang penuh energi, pagelaran ini bukan hanya hiburan, tetapi wujud nyata cinta warga dusun terhadap budaya mereka. Mari simak lebih lanjut dan rasakan kekuatan kebersamaan serta warisan budaya yang terus hidup di tengah kita!
              </p>
            </div>
          </div>
        )}

        <div className='text-black m-5 p-7 border dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center mr-2">
              <img
                src={jathilanHead}
                alt="Sejarah Karanglor"
                className="object-cover rounded-lg aspect-square w-3/4 md:w-[56rem]  cursor-pointer"
                onClick={() => handleImageClick(jathilanHead)}
              />
              <p className="text-[#7DA148] dark:text-white text-xs mt-2 font-light">Tekan Gambar untuk Detail</p>
            </div>
            <div className='text-center'>
              <h1 className='text-2xl md:text-3xl font-semibold mb-3'>Kemeriahan Jathilan dan Gotong Royong Masyarakat</h1>
              <p className='text-sm md:text-md lg:text-lg font-reg text-justify'>
                Pada 7 Juli 2024, Dusun Karanglor, Jepitu menjadi tuan rumah pagelaran Jathilan dalam rangka wujud syukur yang diadakan oleh salah satu warga dusun. Acara ini menampilkan penari-penari Jathilan yang didatangkan langsung dari Temanggung, mempersembahkan tarian tradisional dengan penuh magis dan semangat. Dalam suasana meriah, gamelan mengiringi para penari yang memukau warga dan pengunjung.
                <p className='text-sm md:text-md lg:text-lg font-reg text-justify mt-2'> Kesuksesan acara ini tidak lepas dari semangat gotong royong yang luar biasa. Semua elemen masyarakat pun terlibat aktif, mulai dari Karang Taruna hingga Kepala Dusun. Mereka bersama-sama bahu-membahu andil dalam keberlangsungan acara serta kelancaran acara itu sendiri. Kolaborasi ini menunjukkan betapa kuatnya rasa kebersamaan dan dukungan warga dalam melestarikan tradisi serta memperkuat tali silaturahmi di tengah-tengah masyarakat.</p>
              </p>
            </div>
          </div>

          <div className='text-black m-3 mt-16 p-3 border dark:bg-gray-900 dark:text-white border-gray-300 dark:border-gray-700 rounded-xl bg-white bg-opacity-80'>
            <h1 className="text-2xl md:text-3xl font-semibold mt-5 mb-5 text-center">Dokumentasi</h1>
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
                    className="border border-gray-300 dark:border-gray-700 rounded-lg w-full h-auto object-cover aspect-[16/9] cursor-pointer"
                    onClick={() => handleImageClick(image.src)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-center">
              <div className="mt-6 max-w-screen-lg">
                <ImageGallery />
              </div>
            </div>
          </div>

          <div className='text-center mt-16'>
            <h1 className='text-2xl md:text-3xl font-semibold mt-10 mb-5'>Ayo Lestarikan Budaya Bersama!</h1>
            <p className='text-sm md:text-md lg:text-lg font-reg text-justify mt-2'>
              Dari kegiatan Jathilan ini, kita jadi tahu kan?, bahwa acara ini tidak hanya menonjolkan Jathilan sebagai sarana hiburan saja ya sobat pembaca, tetapi juga memperkuat rasa kebersamaan dan mempererat hubungan sosial di antara warga. Dengan semangat gotong royong yang ditunjukkan oleh semua lapisan masyarakat, acara ini berhasil memperkuat nilai-nilai tradisi dan melestarikan warisan budaya lokal. Selain itu, kolaborasi masyarakat dalam menyukseskan acara ini mencerminkan pentingnya peran setiap individu dalam menjaga keberlangsungan tradisi yang kaya, serta memperkaya identitas bersama yang diwariskan dari generasi ke generasi.
            </p>
            <p className='mt-2 text-sm md:text-md lg:text-lg font-reg text-justify'>
              Mari ambil bagian dalam menjaga dan melestarikan warisan budaya kita! Partisipasi Anda, baik melalui kehadiran dalam acara budaya maupun sebagai sukarelawan, akan memberikan kontribusi nyata untuk menjaga tradisi yang berharga. Dengan bergabung dalam upaya pelestarian budaya, kita bersama-sama memastikan bahwa nilai-nilai luhur dan kekayaan budaya lokal terus hidup dan diwariskan ke generasi berikutnya.
              Ayo, jadilah bagian dari gerakan pelestarian budaya! Kunjungi situs kami untuk mengetahui acara budaya yang akan datang dan bagaimana Anda bisa ikut berperan aktif.
            </p>
          </div>
        </div>

       
        {isFullscreen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={handleCloseFullscreen}>
            <img src={fullscreenImage} alt="Fullscreen" className="max-w-full max-h-full" />
          </div>
        )}
      </div>
    </>
  );
}

export default Body;
