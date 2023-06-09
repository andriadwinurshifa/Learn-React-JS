import React from 'react';
import { culture } from '../assets';

const Hero = () => {
  return (
    <div className='w-full bg-blue-500 pt-6 pb-5'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-start gap-4 py-24'>
                <p className='py-2 text-2xl text-white font-semibold'>START TO LEARN</p>
                <h1 className='text-white md:leading-[72px] py-2 md:text-6xl text-5xl font-bold '>Mari Kita Cintai Budaya Sendiri</h1>
                <p className='py-2 text-lg text-white'>Mari Cintai Budaya Sendiri Agar Budaya Tidak Hilang Termakan Waktu dan Pergeresan Budaya</p>
                
                <div>
                     <button className='px-8 py-3 rounded-md bg-[#20B486] text-white font-bold'>Join</button>
                </div>
            </div>
            
            <img  src={culture} className=" h-48 w-full object-cover md:h-full md:w-full "/>



        </div>
        

    </div>
  )
}

export default Hero