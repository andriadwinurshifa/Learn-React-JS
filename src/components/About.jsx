import React from 'react';
import { culture2 } from '../assets';

const About = () => {
  return (
    <div className='w-full bg-[#BFCEEE] pt-10 pb-5'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='justify-start'>
            <h1 className='text-black md:leading-[72px] py-2 md:text-6xl text-2xl font-bold py-20'>Kenapa Budaya Penting</h1>
                <p className='text-justif py-2 text-black text-2xl pr-10 '  >
                Budaya merupakan suatu cara hidup yang berkembang dan dimiliki bersama oleh sebuah kelompok orang
                 dan diwariskan dari generasi ke generasi. Oleh sebab itu, budaya sangat penting dan wajib 
                 dilestarikan serta dijaga agar diwariskan sampai ke anak cucu kita. Budaya terbentuk dari banyak 
                 unsur yang rumit, termasuk sistem agama dan politik, adat istiadat, bahasa, perkakas, pakaian, 
                 bangunan dan karya seni. Budaya bersifat kompleks, abstrak dan luas. Banyak aspek budaya turut 
                 menentukan perilaku komunikatif. Unsur-unsur sosio-budaya ini terse­bar dan meliputi banyak 
                 kegiatan sosial manusia (wikipedia.org)</p>
            </div>
            
            <img  src={culture2} className="pl-24 h-full w-5/6 md:h-full md:w-5/6" />



        </div>
        

    </div>
  )
}

export default About