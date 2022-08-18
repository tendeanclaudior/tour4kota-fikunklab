import React, { useState } from 'react'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Input from '../components/Input'

const Registration = () => {
    const [name, setName] = useState("")
    const [wa, setWa] = useState("")
    const [lokasi, setLokasi] = useState("")
    const [sosmed, setSosmed] = useState("")
    const [pesan, setPesan] = useState("")

  return (
    <div className='flex items-center pt-[16px] flex-col'>
        <div className='bg-white shadow-2xl h-[52px] w-[350px] rounded-[18px] flex justify-center items-center'>
            <h1 className='font-poppins font-semibold text-[#A61E22] text-[12px]'>Registrasi Pendaftaran Tour JARANKPULANG</h1>
        </div>
        <div className='bg-gradient-to-b from-[#1B8D42] via-[#FF0000] to-[#FFDD00] p-[1px] mt-[42px] mb-[64px] rounded-lg shadow-2xl'>
            <div className='flex w-[244px] h-[415px] bg-white border items-center flex-col rounded-lg pt-[27px]'>
                <h1 className='font-poppins font-semibold text-[#4B4C51] text-[8px]'>Contact details</h1>
                <h2 className='font-poppins font-regular text-[#FF0000] text-[6px] mt-[8px]'>informasi yang diberikan dapat membantu kami!</h2>
                <div className='w-[150px] border-b-[1px] border-[#4B4C51] mt-1 mb-[15px]'></div>
                <Input name={"name"} title={"Nama"} placeholder={"Tulis nama anda"} value={name} onChange={(e) => setName(e.target.value)} />
                <Input name={"wa"} title={"No. Wa"} placeholder={"Tulis nomor anda"} value={wa} onChange={(e) => setWa(e.target.value)} />
                <div className="p-2">
                    <span className="block font-poppins font-medium mb-1 text-black text-[8px]">Lokasi Event</span>
                    <form className="flex flex-col">
                        <select name="lokasi" value={lokasi} onChange={(e) => setLokasi(e.target.value)} className="w-[140px] h-[20px] p-2 mr-4 rounded-[46px] border-[#EFF0F6] border-[1px] text-black text-[8px] shadow-sm">
                            <option>Manado</option>
                            <option>Kotamobagu</option>
                            <option>Bitung</option>
                            <option>Gorontalo</option>
                        </select>
                    </form>
                </div>
                <Input name={"sosmed"} title={"Nama Social Media FB/IG"} placeholder={"Tulis nama sosmed anda"} value={sosmed} onChange={(e) => setSosmed(e.target.value)} />
                <div className='border-[1px] border-black w-[140px] h-[20px] mr-4 rounded-md mt-[20px] mb-[10px] flex items-center justify-center'>
                    <p className='text-[8px]'>upload foto:angel ator</p>
                </div>
                <Input name={"pesan"} title={"Pesan untuk Band JarankPulang"} placeholder={"Tulis pesan anda"} value={pesan} onChange={(e) => setPesan(e.target.value)} />
                <div className='mt-[26px]'></div>
                <Button title="Continue" />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Registration