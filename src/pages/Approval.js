import React from "react";
import Ceklist from "../assets/logo/ceklist.png";
import JarankPulang from "../assets/logo/jarankPulang.png";
import Footer from "../components/Footer";

const Approval = ({ status = "Pending" }) => {
  return (
    <div>
      <div className="flex justify-center mb-[64px]">
        <div className="bg-gradient-to-b from-[#1B8D42] via-[#FF0000] to-[#FFDD00] p-[1px] mt-[129px] rounded-lg shadow-2xl">
          <div className="flex w-[244px] h-[382px] bg-white border items-center flex-col rounded-lg relative">
            <img src={Ceklist} alt="" className="w-[72px] h-[72px] mt-[-45px]" />
            <h1 className="text-[14px] text-[#A61E22] mt-[20px] font-poppins font-semibold">Registrasi Berhasil!</h1>
            <img src={JarankPulang} alt="" className="w-[157px] h-[143px] mt-[40px] animate-bounce" />
            <div className="w-full flex mt-[42px] ml-[20px]">
              <p className="font-poppins font-medium text-black text-[11px]">Status Pembayaran:</p>
              <p className="font-poppins font-medium text-[#9E9E9E] text-[11px] ml-[5px]">{status}</p>
            </div>
            <div className="w-full mt-[10px] ml-[20px]">
              <p className="font-poppins font-medium text-black text-[11px]">Beli Tiket & Kirim Bukti Pembayaran</p>
              <a href="https://wa.me/085399904556" className="font-poppins font-regular text-[#1B8D42] text-[8px] mt-[7px] cursor-pointer">
                https://chat.whatsapp.com/K3cDxMnIat1FVs0AhxLi55
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Approval;
