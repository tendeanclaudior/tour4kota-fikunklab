import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import Footer from "../components/Footer";
import Input from "../components/Input";
import UploadPhoto from "../components/UploadPhoto";

import { db, auth } from "../firebase";
import { ref, update, getDatabase, child, get } from "firebase/database";
import ErrorMassage from "../components/ErrorMassage";

const Registration = () => {
  const [name, setName] = useState("");
  const [wa, setWa] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [sosmed, setSosmed] = useState("");
  const [pesan, setPesan] = useState("");
  const [baseImage, setBaseImage] = useState("");

  const [errorInput, setErrorInput] = useState(false);

  const navigate = useNavigate();

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    console.log("base64", base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const onSubmit = (e) => {
    let status = true;
    let a = 0;

    if (name.length === 0) {
      setErrorInput(true);
      a = 1;
      status = false;
    }
    if (wa.length === 0) {
      setErrorInput(true);
      a = 1;
      status = false;
    }
    if (lokasi.length === 0) {
      setErrorInput(true);
      a = 1;
      status = false;
    }
    if (sosmed.length === 0) {
      setErrorInput(true);
      a = 1;
      status = false;
    }
    if (pesan.length === 0) {
      setErrorInput(true);
      a = 1;
      status = false;
    }

    if (a === 0) {
      status = true;
      console.log("status", status);
      e.preventDefault();
      update(ref(db, `users/${auth.currentUser.uid}`), {
        nama: name,
        noWA: wa,
        lokasi: lokasi,
        sosmed: sosmed,
        pesan: pesan,
        foto: baseImage,
        doneRegis: "true",
      });
      navigate("/approval");
    }
  };

  const errors = useRef(null);
  const regisDone = async () => {
    try {
      const database = getDatabase();
      const rootReference = ref(database);
      const dbGet = await get(child(rootReference, `users/${auth.currentUser.uid}/doneRegis`));
      const dbValue = dbGet.val();
      console.log("test", dbValue);
      if (dbValue) {
        navigate("/approval");
      }
    } catch (getError) {
      errors.current = getError.massage;
    }
  };

  useEffect(() => {
    regisDone();
  }, []);

  return (
    <div className="flex items-center pt-[16px] flex-col">
      <div className="bg-white shadow-2xl h-[52px] w-[350px] rounded-[18px] flex justify-center items-center">
        <h1 className="font-poppins font-semibold text-[#A61E22] text-[12px]">Registrasi Pendaftaran Tour JARANKPULANG</h1>
      </div>
      <div className="bg-gradient-to-b from-[#1B8D42] via-[#FF0000] to-[#FFDD00] p-[1px] mt-[42px] mb-[64px] rounded-lg shadow-2xl">
        <div className="flex w-[244px] h-[415px] bg-white border items-center flex-col rounded-lg pt-[27px]">
          <h1 className="font-poppins font-semibold text-[#4B4C51] text-[8px]">Contact details</h1>
          <h2 className="font-poppins font-regular text-[#FF0000] text-[6px] mt-[8px]">informasi yang diberikan dapat membantu kami!</h2>
          <div className="w-[150px] border-b-[1px] border-[#4B4C51] mt-1 mb-[15px]" />
          <Input name={"name"} title={"Nama"} placeholder={"Tulis nama anda"} value={name} onChange={(e) => setName(e.target.value)} />
          {errorInput && name.length <= 0 ? <ErrorMassage /> : ""}
          <Input name={"wa"} title={"No. Wa"} placeholder={"Tulis nomor anda"} value={wa} onChange={(e) => setWa(e.target.value)} />
          {errorInput && wa.length <= 0 ? <ErrorMassage /> : ""}
          <div className="mt-2">
            <span className="block font-poppins font-medium mb-1 text-black text-[8px]">Lokasi Event</span>
            <form className="flex flex-col">
              <select name="lokasi" value={lokasi} onChange={(e) => setLokasi(e.target.value)} className="w-[140px] h-[20px] mr-4 rounded-[46px] border-[#EFF0F6] border-[1px] text-black text-[8px] shadow-sm">
                <option> </option>
                <option>Manado</option>
                <option>Kotamobagu</option>
                <option>Bitung</option>
                <option>Gorontalo</option>
              </select>
            </form>
            {errorInput && lokasi.length <= 0 ? <ErrorMassage /> : ""}
          </div>
          <Input name={"sosmed"} title={"Nama Social Media FB/IG"} placeholder={"Tulis nama sosmed anda"} value={sosmed} onChange={(e) => setSosmed(e.target.value)} />
          {errorInput && sosmed.length <= 0 ? <ErrorMassage /> : ""}
          <Input name={"pesan"} title={"Pesan untuk Band JarankPulang"} placeholder={"Tulis pesan anda"} value={pesan} onChange={(e) => setPesan(e.target.value)} />
          {errorInput && pesan.length <= 0 ? <ErrorMassage /> : ""}
          <div className="w-full pl-[43px] mt-[7px]">
            <p className="font-poppins font-medium mb-1 text-black text-[8px]">Upload Photo</p>
          </div>
          <UploadPhoto onChange={(e) => uploadImage(e)} />
          <div className="mt-[26px]"></div>
          <Button onSubmit={onSubmit} title="Continue" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
