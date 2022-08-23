import React, { useState } from "react";
import { Link } from "react-router-dom";

import { UserAuth } from "../context/AuthContext";

const ForgetPass = () => {
  const { forgetPass } = UserAuth();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await forgetPass(email);
      alert("Silahkan cek email anda, di kotak masuk atau spam");
    } catch (error) {
      setError("Email tidak valid");
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 h-screen w-full">
        <div className="flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="max-w-[360px] md:max-w-[400px] w-full mx-auto bg-[#F6F6F6] p-8 px-8 rounded-lg shadow-xl">
            <h2 className="text-3xl text-[#A61E22] font-medium text-center">Reset Password</h2>
            {error ? <p className="my-5 text-sm text-red-600 mx-auto">{error}</p> : null}
            <div className="flex flex-col py-2">
              <label className="after:content-['*'] after:text-red-500 after:ml-0.5">Email</label>
              <input onChange={(e) => setEmail(e.target.value)} className="rounded-lg mt-2 p-2 border border-black text-black invalid:text-red-500 peer" type="email" placeholder="Tulis email anda..." />
              <p className="text-sm text-red-500 invisible peer-invalid:visible">Email tidak valid</p>
            </div>
            <p className="text-gray-300 before:content-['*'] before:text-red-500">Tulis email yang anda daftarkan</p>
            <div className="pt-[16px]">
              <button className="bg-[#4B4C51] text-white text-1xl font-bold rounded-lg shadow-2xl shadow-gray-300 w-[295px] md:w-[337px] h-[50px] mb-4">Kirim Reset Password</button>
              <Link to="/">
                <button className="bg-[#4B4C51] text-white text-1xl font-bold rounded-lg shadow-2xl shadow-gray-300 w-[295px] md:w-[337px] h-[50px] ">Masuk</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPass;
