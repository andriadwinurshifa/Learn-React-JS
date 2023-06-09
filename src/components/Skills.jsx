import React from 'react'
import CardSkills from './Cardskills'
import { RiAncientGateLine } from "react-icons/ri";
import { FaTshirt } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa"; 
import { BsMusicNoteBeamed } from "react-icons/bs"; 
import { BsBookHalf } from "react-icons/bs"; 
import { FaCookie } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className='w-full bg-[#F0FBF7] py-24'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
                <h1 className='md:leading-[72px] text-3xl font-bold'>Sesuaikan Dengan Keinginanmu</h1>
                <p className='text-2xl text-black '>Temukan Bidang Favorite Anda</p>

                <div className='grid lg:grid-cols-3 grid-cols-2 py-12 md:gap-4 gap-1'>
                {/* <CardSkills  icons={<GiBrain size={30} />} title={'Design Thingking'} /> */}
                <CardSkills icons={<RiAncientGateLine size={30}/>} title={'Sejarah'}/>
                <CardSkills icons={<FaTshirt size={30}/>} title={'Baju Adat'}/>
                <CardSkills icons={<FaGamepad size={30}/>} title={'Permainan Tradisional'}/>
                <CardSkills icons={<BsMusicNoteBeamed size={30}/>} title={'Lagu Adat'}/>
                <CardSkills icons={<BsBookHalf size={30}/>} title={'Cerita'}/>
                <CardSkills icons={<FaCookie size={30}/>} title={'Makanan'}/>
                </div>



        </div>
    </div>
  )
}

export default Skills