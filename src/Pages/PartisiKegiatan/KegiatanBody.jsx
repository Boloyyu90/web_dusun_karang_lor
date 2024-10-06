import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoDesa from "../../assets/images/logoDesaJepitu.png";
import calendar from "../../assets/images/calendar.svg";
import logoKKN from "../../assets/images/logoKKN.png";
import LazyLoadImage from '../../Components/LazyLoadImage'; // Import LazyImage component
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { images, ImageGallery } from '../../Components/LazyImage/KegiatanImages'; // Import the image data and components
import kknHead from "../../assets/images/KegiatanImage/kkn (7).webp";
import senamHead from "../../assets/images/KegiatanImage/senam (8).webp"
import bimbelHead from "../../assets/images/KegiatanImage/bimbel (2).webp"
import mgrsiHead from "../../assets/images/KegiatanImage/mgrsi (6).webp"
import kgTnaHead from "../../assets/images/KegiatanImage/krgtrna (6).webp"
import kknHead1 from "../../assets/images/AssetKebersamaan/gatherImg (1).webp";
import SenamSehatImages from '../../Components/LazyImage/ProkerImages/SenamSehatImages';
import BimbelAnak from '../../Components/LazyImage/ProkerImages/BimbinganBelajarImages';
import MigrasiUMKM from '../../Components/LazyImage/ProkerImages/MigrasiECommerceImages';
import KarangTaruna from '../../Components/LazyImage/ProkerImages/KarangTaruna';


function Body() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleImageClick = (imageSrc) => {
    console.log("Image clicked: ", imageSrc);
    setIsFullscreen(true);
    setFullscreenImage(imageSrc);
    setIsHeaderVisible(false);
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
    setFullscreenImage(null);
    setIsHeaderVisible(true); // Menampilkan header kembali
  };

  return (
    <>
         <div className='container mx-auto p-6 md:p-12 px-4 md:px-10 mb-8'>
      {isHeaderVisible && (
        <div className='text-black m-5 p-2 border dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
          <h1 className='text-2xl font-semibold'>Merangkai Kebersamaan di Dusun Karanglor: KKN 85 UAJY</h1>
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
          
          <p className=' mx-3 mt-5 text-sm md:text-md lg:text-lg font-reg text-justify'>
            Halo sobat virtual sekalian! Pada kesempatan kali ini, Kelompok 13 KKN 85 UAJY ingin mengajak Kita semua untuk menjelajahi kisah di dalam Dusun Karanglor tercinta kita. Bersama-sama, kita akan membahas mengenai Perjalanan KKN Universitas Atma Jaya Yogyakarta dalam memupuk kebersamaan, gotong royong, dan cinta di tengah masyarakat Dusun Karanglor.
          </p>
          <p className='text-sm md:text-md lg:text-lg font-light mx-3 mt-5 text-justify'>
            Selama pelaksanaan KKN 85 Universitas Atma Jaya Yogyakarta di Dusun Karanglor dari 4 Juli hingga 2 Agustus 2024, banyak kegiatan bermakna yang dilakukan bersama warga untuk memperkuat rasa kebersamaan dan menyongsong keberlanjutan dusun. Salah satu kegiatan inti yang rutin dilakukan adalah rapat warga, yang biasanya dilaksanakan setiap Hari Pon. Rapat ini menjadi ajang diskusi penting bagi warga dalam membahas masa depan dan keberlanjutan Dusun Karanglor.
          </p>
        </div>
      )}

      <div className='text-black m-5 p-3 md:p-7 border dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="flex flex-col items-center">
            <img
              src={kknHead} // Use the first image in the array as an example
              alt="Kegiatan KKN"
              className="object-cover rounded-lg aspect-square w-3/4 md:w-[20rem] cursor-pointer"
              onClick={() => handleImageClick(kknHead)}
              />
                <p className="text-[#7DA148] text-xs mt-2 font-light text-center">Tekan Gambar untuk Detail</p>
          </div>
          <div className='text-center'>
            <p className='text-sm md:text-md lg:text-lg font-reg text-justify'>
              Berbagai kegiatan selama KKN di Dusun Karanglor melibatkan warga dalam gotong royong. Mulai dari rapat rutin warga setiap Hari Pon, senam sehat bersama ibu-ibu PKK, hingga pendampingan UMKM dalam rebranding dan migrasi e-commerce. Semua kegiatan ini memperlihatkan semangat kebersamaan yang terjalin antara mahasiswa dan warga dusun.
            </p>
          </div>
        </div>

        

        <div className='text-center '>
         
          <div className='text-black m-5 p-4 md:p-8 border dark:bg-gray-900 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80 pb-10 mt-5'>
          <h1 className="text-2xl font-semibold mt-5 mb-3 text-center">Semangat Kebersamaan</h1>
            <img
              src={senamHead}
              alt="Kegiatan KKN"
              className="object-cover aspect-square w-[20rem] md:w-[30rem] cursor-pointer p-5 rounded-full block mx-auto" // Added 'block mx-auto'
              onClick={() => handleImageClick(senamHead)}
            />
            <p className="text-[#7DA148] dark:text-white text-xs mt-2 font-light">Tekan Gambar untuk Detail</p>

            <p className='text-sm md:text-md lg:text-lg font-reg text-justify my-4'>
              KKN 85 Universitas Atma Jaya Yogyakarta menggelar Senam Sehat yang ditujukan bagi ibu-ibu PKK di Dusun Karanglor. Kegiatan ini diadakan di sebuah ladang milik warga yang sementara tidak digunakan untuk menanam komoditas pertanian, sehingga menjadi lokasi ideal untuk senam bersama. Pemilihan waktu pun dilakukan dengan cermat, yakni pada Hari Pon—hari yang dikenal sebagai "Hari Ibu", di mana para ibu di dusun biasanya beristirahat dari aktivitas luar rumah.

              Dengan penuh antusias, para ibu mengikuti gerakan senam yang dipandu secara energik. Di tengah suasana ladang yang asri, senam ini tidak hanya menjadi momen untuk menjaga kebugaran, tetapi juga mempererat hubungan antarwarga. Setelah senam, kegiatan dilanjutkan dengan menikmati susu bernutrisi yang disediakan untuk menambah kesegaran dan memulihkan energi.

              Melalui program ini, diharapkan ibu-ibu PKK Karanglor dapat terus menjaga kesehatan dan kebugaran tubuh, sekaligus menjadikan Hari Pon sebagai waktu yang bermanfaat untuk diri sendiri dan komunitas. Berikut dokumentasinya.
            </p>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Navigation, Pagination, Autoplay]}
            >
              <SenamSehatImages />
            </Swiper>
          </div>

          </div>


        <div className='text-center'>
          <div className='text-black m-5 p-4 md:p-8 border dark:bg-gray-900 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
            <h1 className='text-xl font-semibold mt-2 mb-5'>Bimbingan Belajar Anak</h1>
            <img
              src={bimbelHead}
              alt="Kegiatan KKN"
              className="object-cover aspect-square w-[20rem] md:w-[30rem] cursor-pointer p-5 rounded-full block mx-auto" // Fully round
              onClick={() => handleImageClick(bimbelHead)}
            />
            <p className="text-[#7DA148] dark:text-white text-xs mt-2 font-light">Tekan Gambar untuk Detail</p>
            <p className='text-sm md:text-md lg:text-lg font-reg text-justify my-4'>
            Program Bimbingan Belajar Anak yang diadakan oleh KKN 85 Universitas Atma Jaya Yogyakarta di Dusun Karanglor menjadi salah satu kegiatan yang dinanti-nanti oleh anak-anak. Mulai dari belajar calistung (baca, tulis, hitung) hingga pengenalan bahasa asing, kegiatan ini dirancang agar anak-anak dapat belajar dengan cara yang menyenangkan.

            Desta, Zainal, dan teman-teman mereka terlihat sangat antusias mengikuti setiap sesi. Mereka tidak hanya belajar, tapi juga bermain bersama di sela-sela kegiatan. Suasana yang penuh canda tawa membuat bimbingan belajar ini terasa seperti waktu bermain yang produktif. Anak-anak bebas mengekspresikan rasa ingin tahu mereka sambil mendapat bimbingan langsung dari mahasiswa KKN.

            Dengan adanya program ini, diharapkan anak-anak di Dusun Karanglor tidak hanya mendapatkan pemahaman akademik yang lebih baik, tetapi juga memiliki pengalaman belajar yang menyenangkan serta memperluas wawasan, termasuk kemampuan dasar dalam berbahasa asing. Berikut dokumentasinya.
            </p>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Navigation, Pagination, Autoplay]}
            >
             
                <BimbelAnak />
            
            </Swiper>
            </div>
        </div>

        <div className='text-center'>
          <div className='text-black m-5 p-4 md:p-8  dark:bg-gray-900 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
            <h1 className='text-xl font-semibold mt-2 mb-5'>Pendampingan UMKM</h1>
            <img
              src={mgrsiHead}
              alt="Kegiatan KKN"
              className="object-cover aspect-square w-[20rem] md:w-[30rem] cursor-pointer p-5 rounded-full block mx-auto" // Fully round
              onClick={() => handleImageClick(mgrsiHead)}
            />
            <p className="text-[#7DA148] dark:text-white text-xs mt-2 font-light">Tekan Gambar untuk Detail</p>
            <p className='text-sm md:text-md lg:text-lg font-reg text-justify my-4'>
            KKN 85 Universitas Atma Jaya Yogyakarta berkomitmen membantu UMKM di Dusun Karanglor berkembang lebih jauh dengan program Pendampingan Migrasi ke E-Commerce. Salah satu usaha yang mendapat pendampingan adalah usaha rajut milik warga setempat, yang telah menghasilkan berbagai produk rajutan berkualitas seperti tas, dompet, dan aksesoris lainnya.

            Melalui program ini, pemilik usaha didampingi untuk mempelajari cara memanfaatkan platform e-commerce, mulai dari membuat akun, mengatur etalase digital, hingga memahami strategi pemasaran online. Tidak hanya itu, mahasiswa KKN juga memberikan edukasi tentang pentingnya visualisasi produk yang menarik dan cara mengelola pesanan secara efisien di dunia digital.

            Dengan adanya pendampingan ini, diharapkan produk kerajinan rajut dari Dusun Karanglor bisa menjangkau pasar yang lebih luas dan meningkatkan daya saing di era digital. Migrasi ke e-commerce ini menjadi langkah penting agar UMKM di Karanglor dapat terus berkembang dan dikenal lebih luas.
            </p>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Navigation, Pagination, Autoplay]}
            >
             
                <MigrasiUMKM />
            
            </Swiper>
            </div>
        </div>

        <div className='text-center'>
          <div className='text-black m-5 p-4 md:p-8 border dark:bg-gray-900 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
            <h1 className='text-xl font-semibold mt-2 mb-5'>Kumpul Karang Taruna</h1>
            <img
              src={kgTnaHead}
              alt="Kegiatan KKN"
              className="object-cover aspect-square  w-[20rem] md:w-[30rem] cursor-pointer p-5 rounded-full block mx-auto" // Fully round
              onClick={() => handleImageClick(kgTnaHead)}
            />
            <p className="text-[#7DA148] dark:text-white text-xs mt-2 font-light">Tekan Gambar untuk Detail</p>
            <p className='text-sm md:text-md lg:text-lg font-reg text-justify my-4'>
            Dalam rangka mempererat tali silaturahmi dan meningkatkan kesadaran warga, Karang Taruna Dusun Karanglor mengadakan kegiatan kumpul di balai dusun yang diisi dengan berbagai agenda penting. Didampingi oleh mahasiswa KKN 85 Universitas Atma Jaya, acara ini menjadi ajang sharing dan transfer knowledge untuk para anggota karang taruna dan masyarakat sekitar.

            Beberapa agenda utama yang disampaikan adalah sosialisasi mengenai bahaya dan penanggulangan judi online yang saat ini marak terjadi, serta pengenalan video profil Dusun Karanglor yang bertujuan untuk memperkenalkan identitas dan potensi desa kepada khalayak luas. Selain itu, ada pula sosialisasi penanggulangan kecelakaan, yang memberikan edukasi praktis tentang langkah-langkah keselamatan di jalan.

            Puncak acara diisi dengan serah terima website resmi dusun yang telah dikembangkan oleh mahasiswa KKN kepada perwakilan KIM (Komunitas Informasi Masyarakat). Dengan adanya website ini, diharapkan informasi seputar kegiatan dusun dapat tersampaikan lebih efektif dan Dusun Karanglor semakin dikenal secara digital.
            </p>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Navigation, Pagination, Autoplay]}
            >
             
                <KarangTaruna />
            
            </Swiper>
            </div>
        </div>


        
      </div>

      {isFullscreen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleCloseFullscreen}
        >
          <img src={fullscreenImage} alt="Full screen" className="max-w-full max-h-full" />
          <button
            onClick={handleCloseFullscreen}
            className="absolute top-5 right-5 text-white text-2xl font-bold"
          >
            &times;
          </button>
        </div>
        )}
        </div>
    </>
  );
}

export default Body;
