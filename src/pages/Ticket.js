import React from 'react'
import JarankPulang from '../assets/logo/jarankPulang.png'
import Footer from '../components/Footer'
import Foto from '../assets/logo/foto.png'
import Scan from '../assets/logo/scan.png'

const Approval = ({lokasi="Manado", nama="Budi Doremi", wa="08123456789"}) => {
  return (
    <div>
        <div className='flex justify-center mb-[64px]'>
            <div className='bg-gradient-to-b from-[#1B8D42] via-[#FF0000] to-[#FFDD00] p-[1px] mt-[129px] rounded-lg shadow-2xl'>
            <div className='flex w-[244px] h-[382px] bg-white border items-center flex-col rounded-lg relative'>
                <h1 className='text-[14px] text-[#A61E22] mt-[20px] font-poppins font-semibold'>Tiket Masuk</h1>
                <img src={JarankPulang} alt="" className="w-[157px] h-[143px] mt-[20px] animate-bounce" />
                <div className='w-full flex justify-between'>
                    <div className='w-auto ml-[28px] mt-[22px]'>
                        <img src={Foto} alt="" className='w-[34px] h-[34px] flex-inline' />
                        <div className='mt-[15px]'>
                            <p className='font-poppins font-medium text-[11px] text-black'>Lokasi Event</p>
                            <p className='font-poppins font-medium text-[10px] text-[#9E9E9E]'>{lokasi}</p>
                        </div>
                    </div>
                    <div className='w-auto mt-[22px] flex-inline mr-[28px] text-right'>
                        <p className='font-poppins font-medium text-[11px] text-black'>Nama</p>
                        <p className='font-poppins font-medium text-[10px] text-[#9E9E9E]'>{nama}</p>
                        <p className='font-poppins font-medium text-[11px] text-black mt-[15px]'>No. WA</p>
                        <p className='font-poppins font-medium text-[10px] text-[#9E9E9E]'>{wa}</p>
                    </div>
                </div>
                <div className='flex w-full justify-end mt-[25px]'>
                    <img src={Scan} alt="" className='w-[28px] h-[28px] mr-[16px] cursor-pointer animate-pulse' />
                </div>
            </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Approval