import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoDesa from "../../assets/images/logoDesaJepitu.png";
import calendar from "../../assets/images/calendar.svg"
import logoKKN from "../../assets/images/logoKKN.png";
import Safe from "react-safe";


function Body() {

  return (
    <>
       <div className='container mx-auto p-6 md:p-12 px-4 md:px-10 mb-8'>
      <div>
      <div className='text-black m-5 p-2 border dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-700 rounded-md bg-white bg-opacity-80'>
          <h1 className='text-2xl font-semibold'>Pertanyaan Seputar Informasi Karanglor</h1>
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
          
          <p className='text-sm md:text-md lg:text-lg font-light mt-4 mx-2 text-justify'>
          Halo Sobat, berjumpa kita di halaman Pertanyaan seputar informasi mengenai Dusun Karanglor. Selamat datang di halaman FAQ dan Bantuan Sistem Informasi Dusun. Di sini, Anda dapat menemukan jawaban atas pertanyaan umum dan panduan penggunaan untuk membantu Anda menjelajahi website kami. Jika Anda membutuhkan bantuan lebih lanjut, jangan ragu untuk menghubungi kami melalui halaman Kontak. Kami siap membantu memastikan Anda mendapatkan informasi yang Anda butuhkan dengan mudah dan cepat.
          </p>
          <div id="disqus_thread" className='mt-10'></div>
        </div>
       
      </div>

      <Safe.script>
        {
            (function() { // DON'T EDIT BELOW THIS LINE
              var d = document, s = d.createElement('script');
              s.src = 'https://karanglor.disqus.com/embed.js';
              s.setAttribute('data-timestamp', +new Date());
              (d.head || d.body).appendChild(s);
              })()
        }
        </Safe.script>
        </div>
    </>
    
  );
}

export default Body;
