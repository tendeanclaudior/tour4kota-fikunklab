import React, { useEffect, useRef, useState } from "react";
import JarankPulang from "../assets/logo/jarankPulang.png";
import Footer from "../components/Footer";
import Scan from "../assets/logo/scan.png";
import { child, get, getDatabase, ref } from "firebase/database";
import { auth } from "../firebase";

const Approval = () => {
  const [isLoading, setIsLoading] = useState(true);
  const snaphsot = useRef(null);
  const error = useRef(null);

  const getValues = async () => {
    try {
      const database = getDatabase();
      const rootReference = ref(database);
      const dbGet = await get(child(rootReference, `users/${auth.currentUser.uid}`));
      const dbValue = dbGet.val();
      console.log("test", dbValue);
      snaphsot.current = dbValue;
    } catch (getError) {
      error.current = getError.message;
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getValues();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center pt-[300px]">
        <p className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#165E00] via-[#FFDD00] to-[#FF0000]">memproses data...</p>
      </div>
    );
  }

  const users = snaphsot.current;
  const data = Object.values(users);
  const baseImage = data[1];
  const nama = data[3];
  const lokasi = data[2];
  const wa = data[4];

  console.log({ users, data });

  return (
    <div>
      <div className="flex justify-center mb-[64px]">
        <div className="bg-gradient-to-b from-[#1B8D42] via-[#FF0000] to-[#FFDD00] p-[1px] mt-[129px] rounded-lg shadow-2xl">
          <div className="flex w-[244px] h-[382px] bg-white border items-center flex-col rounded-lg relative">
            <h1 className="text-[14px] text-[#A61E22] mt-[20px] font-poppins font-semibold">Tiket Masuk</h1>
            <img src={JarankPulang} alt="" className="w-[157px] h-[143px] mt-[20px] animate-bounce" />
            <div className="w-full flex justify-between">
              <div className="w-auto ml-[28px] mt-[22px]">
                <img src={baseImage} alt="" className="w-[34px] h-[34px] rounded-full flex-inline" />
                <div className="mt-[15px]">
                  <p className="font-poppins font-medium text-[11px] text-black">Lokasi Event</p>
                  <p className="font-poppins font-medium text-[10px] text-[#9E9E9E]">{lokasi}</p>
                </div>
              </div>
              <div className="w-auto mt-[22px] flex-inline mr-[28px] text-right">
                <p className="font-poppins font-medium text-[11px] text-black">Nama</p>
                <p className="font-poppins font-medium text-[10px] text-[#9E9E9E]">{nama}</p>
                <p className="font-poppins font-medium text-[11px] text-black mt-[15px]">No. WA</p>
                <p className="font-poppins font-medium text-[10px] text-[#9E9E9E]">{wa}</p>
              </div>
            </div>
            <div className="flex w-full justify-end mt-[25px]">
              <img src={Scan} alt="" className="w-[28px] h-[28px] mr-[16px] cursor-pointer animate-pulse" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Approval;
