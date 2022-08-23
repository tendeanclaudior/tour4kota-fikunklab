import React, { useEffect, useRef, useState } from "react";
import JarankPulang from "../assets/logo/jarankPulang.png";
import Footer from "../components/Footer";
import { ref, getDatabase, child, get } from "firebase/database";
import { auth } from "../firebase";

const LastPage = () => {
  const errors = useRef(null);
  let [nama, setNama] = useState("");
  const cek = async () => {
    try {
      const database = getDatabase();
      const rootReference = ref(database);
      const dbGet = await get(child(rootReference, `users/Manado/${auth.currentUser.uid}/nama`));
      let dbValue = dbGet.val();
      setNama(dbValue);

      if (dbValue == null) {
        const dbGet = await get(child(rootReference, `users/Kotamobagu/${auth.currentUser.uid}/nama`));
        dbValue = dbGet.val();

        setNama(dbValue);
      }
      if (dbValue == null) {
        const dbGet = await get(child(rootReference, `users/Bitung/${auth.currentUser.uid}/nama`));
        dbValue = dbGet.val();

        setNama(dbValue);
      }
      if (dbValue == null) {
        const dbGet = await get(child(rootReference, `users/Gorontalo/${auth.currentUser.uid}/nama`));
        dbValue = dbGet.val();

        setNama(dbValue);
      }
    } catch (getError) {
      errors.current = getError.message;
    }
  };

  useEffect(() => {
    cek();
  }, []);
  return (
    <div className=" flex-col">
      <div className="flex justify-center mb-[100px]">
        <div className="bg-gradient-to-b from-[#1B8D42] via-[#FF0000] to-[#FFDD00] p-[1px] mt-[129px] rounded-lg shadow-2xl">
          <div className="flex w-[244px] h-[382px] bg-white border items-center flex-col rounded-lg relative">
            <h1 className="text-[14px] text-[#A61E22] mt-[20px] font-poppins font-semibold">Thank You</h1>
            <h1 className="text-[11px] text-[#9E9E9E] mt-[8px] font-poppins font-semibold">{nama}</h1>
            <img src={JarankPulang} alt="" className="w-[157px] h-[143px] mt-[45px] animate-pulse" />
            <h1 className="font-poppins font-medium text-[10px] text-center w-[185px] mt-[67px]">Terima Kasih sudah menjadi bagian dari Tour & Concert JarankPulang</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LastPage;
