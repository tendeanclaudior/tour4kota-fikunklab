import React from "react";
import Navbar from "../components/Navbar";

import JarangPulang from "../assets/logo/jarankPulang.png";

const Admin = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="flex relative justify-center px-2 pt-40 sm:pt-40 text-black">
          <div className="bg-white rounded-xl shadow-2xl shadow-black-200 w-[1242px]">
            <div className="text-center">
              <h1 className="font-bold text-2xl my-6">Admin Tour Jarang Pulang</h1>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl shadow-black-200 w-[500px] h-[220px] mx-auto mt-[70px]">
          <img src={JarangPulang} alt="/" />
        </div>
      </div>
      <div className="mb-[90px]"></div>
    </>
  );
};

export default Admin;
