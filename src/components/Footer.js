import React from 'react'
import Baciraro from '../assets/logo/image 41 (1).png'
import Likupang from '../assets/logo/image 52 (1).png'
import Anker from '../assets/logo/PicsArt_01-09-12.36 1 (2).png'
import Kobeng from '../assets/logo/image 48 (1).png'
import ZanChips from '../assets/logo/image 49 (1).png'
import DrShoes from '../assets/logo/image 42 (1).png'
import OneLove from '../assets/logo/image 43 (1).png'
import P1 from '../assets/logo/image 50 (1).png'
import Unklab from '../assets/logo/LOGO UNIVERSITAS KLABAT 2 (1).png'
import Fik from '../assets/logo/fik 2 (1).png'
import HydroCoco from '../assets/logo/WhatsApp Image 2022-08-15 at 17.38 2 (1).png'
import TRHotel from '../assets/logo/WhatsApp Image 2022-08-15 at 17.38 1 (1).png'
import Corner52 from '../assets/logo/IMG-20220510-WA0012 1 (1).png'
import BengkelIde from '../assets/logo/image 51 (1).png'
import WonderfullNM from '../assets/logo/image 57 (1).png'
import InBlood from '../assets/logo/image 55 (1).png'
import Reid from '../assets/logo/image 53 (1).png'
import Gekrafs from '../assets/logo/image 54 (1).png'


const Footer = () => {
  return (
    <div className='w-full h-full'>
        <div className='w-full h-[82px] bg-[#8AAF80] pt-[14px]'>
            <div className='w-[375px] h-[29px] flex justify-between mx-auto px-[48px]'>
                <img src={Baciraro} alt="" className='w-[19px] h-[19px]' />
                <img src={Likupang} alt="" className='w-[24px] h-[22px]' />
                <img src={Anker} alt="" className='w-[20px] h-[20px]' />
                <img src={Kobeng} alt="" className='w-[27px] h-[22px]' />
                <img src={ZanChips} alt="" className='w-[30px] h-[28px]' />
                <img src={DrShoes} alt="" className='w-[23px] h-[19px]' />
                <img src={OneLove} alt="" className='w-[20px] h-[18px]' />
                <img src={P1} alt="" className='w-[21px] h-[18px]' />
                <img src={Unklab} alt="" className='w-[19px] h-[19px]' />
                <img src={Fik} alt="" className='w-[15px] h-[19px]' />
            </div>
            <div className='w-[375px] h-[29px] flex justify-between mx-auto px-[30px] items-center'>
                <img src={HydroCoco} alt="" className='w-[25px] h-[24px]' />
                <img src={TRHotel} alt="" className='w-[24px] h-[24px]' />
                <img src={Corner52} alt="" className='w-[47px] h-[16px]' />
                <img src={BengkelIde} alt="" className='w-[40px] h-[11px]'/>
                <img src={WonderfullNM} alt="" className='w-[42px] h-[20px]' />
                <img src={InBlood} alt="" className='w-[40px] h-[16px]' />
                <img src={Reid} alt="" className='w-[24px] h-[23px]' />
                <img src={Gekrafs} alt="" className='w-[23px] h-[24px]' />
            </div>
        </div>
        <div className='w-full h-[30px] bg-[#A54E47] flex items-center pl-[16px]'>
            <h1 className='font-poppins text-white text-[8px]'>@2022 PT.KTP FIK UNKLAB</h1>
        </div>
    </div>
  )
}

export default Footer