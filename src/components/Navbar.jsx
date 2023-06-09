import React, { useState } from 'react';
import { hamburgerMenu, close} from '../assets'

const Navbar = () => {

    const [toggle,setToggle]=useState(false)
    const handleClick = ()=> setToggle(!toggle)

  return (
    <div className='w-full h-[80px] bg-white border-b'>
        <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4'>
            
            <div>
            <h2 className='text-3xl font-bold text-blue-700 '>Andrian Dwi
            <span className='text-yellow-700'> Nur Shifa</span></h2>
            </div>
            
            <div className='hidden md:flex items-center font-bold text-xl'>
                <ul className='flex gap-4'>
                    <li>Tentang Kami</li>
                    <li>Budaya</li>
                    <li>Feedback</li>
                    <li>Hubungi Kami</li>
                </ul>
            </div>


            <div className='hidden md:flex'>
    
                <button className='px-8 py-3 rounded-md bg-[#20B486] text-white font-bold text-xl'> Join Us</button>
            </div>

            <div className='md:hidden '  onClick={handleClick}>
                    <img src={toggle?close:hamburgerMenu} />
            </div>




        </div>

        <div className={toggle?'absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b':'hidden'}>
            <ul className='font-bold text-xl'>
                    <li className='p-4 hover:bg-gray-100'>Home</li>
                    <li className='p-4 hover:bg-gray-100'>About</li>
                    <li className='p-4 hover:bg-gray-100'>Support</li>
                    <li className='p-4 hover:bg-gray-100'>Platform</li>
                    <li className='p-4 hover:bg-gray-100'>Pricing</li>
                    <div className='flex flex-col my-4 gap-4'>
                    <button className='px-8 py-5 rounded-md bg-[#20B486] text-white font-bold'>Join Us</button>
                    </div>
            </ul>
        </div>
        
        
    </div>
  )
}

export default Navbar